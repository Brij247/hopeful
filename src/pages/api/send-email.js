import { sendAdminNotification, sendSponsorConfirmation } from "@/utils/email";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const sponsorData = req.body;

    if (!sponsorData || !sponsorData.sponsorEmail) {
      return res.status(400).json({
        success: false,
        error: "Missing required sponsor data",
      });
    }

    // Send email to admin
    await sendAdminNotification(sponsorData);

    // Send confirmation email to sponsor
    await sendSponsorConfirmation(sponsorData);

    return res.status(200).json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("❌ Error sending emails:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "Failed to send emails",
    });
  }
}
