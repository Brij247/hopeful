import { google } from "googleapis";

// Initialize the Google Sheets API
const sheets = google.sheets("v4");

// Hardcoded Google Sheet ID
const SHEET_ID = "15Dyw-IEltBODf69XTBFMxy3e2zZa3I9xtia12t8C0KY";
const SHEET_RANGE = "Sponsors!A:K";

// Get authenticated client for Google Sheets
const getAuthClient = async () => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: process.env.GOOGLE_SHEETS_TYPE || "service_account",
        project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
        private_key_id: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n",
        ),
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: process.env.GOOGLE_SHEETS_CLIENT_CERT_URL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return await auth.getClient();
  } catch (error) {
    console.error("Error initializing Google Auth:", error);
    throw error;
  }
};

// ✅ MAIN HANDLER (this was missing)
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

    // Validate required fields
    if (!sponsorName || !sponsorEmail || !sponsorPhone) {
      return res
        .status(400)
        .json({ error: "Missing required sponsor information" });
    }

    // Get auth client
    const authClient = await getAuthClient();

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

    // Append to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      auth: authClient,
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
      valueInputOption: "RAW",
      requestBody: {
        values: [row],
      },
    });

    console.log("Data saved:", response.data);

    return res.status(200).json({
      success: true,
      message: "Sponsor registered successfully",
    });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);

    return res.status(500).json({
      error: error.message || "Failed to register sponsor",
      details: process.env.NODE_ENV === "development" ? error : undefined,
    });
  }
}
