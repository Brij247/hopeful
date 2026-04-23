import { google } from "googleapis";

const sheets = google.sheets("v4");

// Hardcoded Google Sheet ID
const SHEET_ID = "15Dyw-IEltBODf69XTBFMxy3e2zZa3I9xtia12t8C0KY";

// Headers for new sheets
const HEADERS = [
  "Timestamp",
  "Sponsor Name",
  "Email",
  "Phone",
  "Address",
  "Child Name",
  "Project",
  "Amount",
  "Frequency",
  "Source",
  "Message",
];

// Auth setup
const getAuthClient = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: process.env.GOOGLE_SHEETS_TYPE || "service_account",
      project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
      private_key_id: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return await auth.getClient();
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const {
      timestamp,
      sponsorName,
      sponsorEmail,
      sponsorPhone,
      sponsorAddress,
      childName,
      project,
      monthlyAmount,
      donationFrequency,
      hearAboutUs,
      message,
    } = req.body;

    // Basic validation
    if (!sponsorName || !sponsorEmail || !sponsorPhone) {
      return res.status(400).json({
        success: false,
        error: "Missing required sponsor information",
      });
    }

    // 📅 Create dynamic sheet name (e.g., Apr-2026)
    const date = timestamp ? new Date(timestamp) : new Date();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    const sheetName = `${month}-${year}`;

    const range = `'${sheetName}'!A1`;

    // Prepare row
    const row = [
      timestamp || new Date().toISOString(),
      sponsorName,
      sponsorEmail,
      sponsorPhone,
      sponsorAddress || "",
      childName || "",
      project || "",
      monthlyAmount || "",
      donationFrequency || "monthly",
      hearAboutUs || "",
      message || "",
    ];

    const authClient = await getAuthClient();

    // 📄 Get existing sheets
    const spreadsheet = await sheets.spreadsheets.get({
      auth: authClient,
      spreadsheetId: SHEET_ID,
    });

    const existingSheets =
      spreadsheet.data.sheets?.map((s) => s.properties.title) || [];

    // 🆕 Create sheet if missing
    if (!existingSheets.includes(sheetName)) {
      console.log(`📄 Creating new sheet: ${sheetName}`);

      await sheets.spreadsheets.batchUpdate({
        auth: authClient,
        spreadsheetId: SHEET_ID,
        resource: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: sheetName,
                },
              },
            },
          ],
        },
      });

      // 🧾 Add headers
      await sheets.spreadsheets.values.update({
        auth: authClient,
        spreadsheetId: SHEET_ID,
        range: `'${sheetName}'!A1`,
        valueInputOption: "RAW",
        resource: {
          values: [HEADERS],
        },
      });
    }

    // ➕ Append data
    const response = await sheets.spreadsheets.values.append({
      auth: authClient,
      spreadsheetId: SHEET_ID,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [row],
      },
    });

    console.log("✅ Data saved to:", sheetName);

    // Send notification emails after successful registration
    try {
      await fetch(`${process.env.BASE_URL || "http://localhost:3000"}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp,
          sponsorName,
          sponsorEmail,
          sponsorPhone,
          sponsorAddress,
          childName,
          project,
          monthlyAmount,
          donationFrequency,
          hearAboutUs,
          message,
        }),
      });
      console.log("✅ Notification emails sent");
    } catch (emailError) {
      console.error("⚠️ Error sending notification emails:", emailError);
      // Don't fail the form submission if email fails
    }

    return res.status(200).json({
      success: true,
      message: "Sponsor registered successfully!",
      sheet: sheetName,
      spreadsheetUpdate: {
        updatedRows: response.data.updates?.updatedRows,
        updatedCells: response.data.updates?.updatedCells,
      },
    });
  } catch (error) {
    console.error("❌ Error saving to Google Sheets:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
