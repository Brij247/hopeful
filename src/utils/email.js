import nodemailer from "nodemailer";

// Create a transporter using environment variables
const getTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Send email to admin
export const sendAdminNotification = async (sponsorData) => {
  try {
    const transporter = getTransporter();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Sponsorship Registration</h2>
        <p>A new sponsor has registered. Here are the details:</p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Sponsor Information</h3>
          <p><strong>Name:</strong> ${sponsorData.sponsorName}</p>
          <p><strong>Email:</strong> ${sponsorData.sponsorEmail}</p>
          <p><strong>Phone:</strong> ${sponsorData.sponsorPhone}</p>
          <p><strong>Address:</strong> ${sponsorData.sponsorAddress || "Not provided"}</p>

          <h3 style="color: #555;">Sponsorship Details</h3>
          <p><strong>Project:</strong> ${sponsorData.project}</p>
          <p><strong>Child Name:</strong> ${sponsorData.childName || "Not specified"}</p>
          <p><strong>Monthly Amount:</strong> ₹${sponsorData.monthlyAmount}</p>
          <p><strong>Frequency:</strong> ${sponsorData.donationFrequency}</p>

          <h3 style="color: #555;">Additional Information</h3>
          <p><strong>How they heard about us:</strong> ${sponsorData.hearAboutUs || "Not provided"}</p>
          <p><strong>Message:</strong> ${sponsorData.message || "No message provided"}</p>
        </div>

        <p style="color: #888; font-size: 12px;">Submitted at: ${new Date(sponsorData.timestamp).toLocaleString()}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Sponsorship Registration - ${sponsorData.sponsorName}`,
      html: htmlContent,
    });

    console.log("✅ Admin notification sent successfully");
    return { success: true };
  } catch (error) {
    console.error("❌ Error sending admin notification:", error);
    throw error;
  }
};

// Send confirmation email to sponsor
export const sendSponsorConfirmation = async (sponsorData) => {
  try {
    const transporter = getTransporter();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d946a6;">Thank You for Sponsoring! 💝</h2>

        <p>Dear <strong>${sponsorData.sponsorName}</strong>,</p>

        <p>We are thrilled to receive your sponsorship registration! Your generous support will make a real difference in a child's life through education, meals, counseling, and spiritual guidance.</p>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 20px 0;">
          <h3 style="color: #166534; margin-top: 0;">Your Sponsorship Summary</h3>
          <p><strong>Project:</strong> ${sponsorData.project}</p>
          <p><strong>Monthly Contribution:</strong> ₹${sponsorData.monthlyAmount}</p>
          <p><strong>Frequency:</strong> ${sponsorData.donationFrequency.charAt(0).toUpperCase() + sponsorData.donationFrequency.slice(1)}</p>
          ${sponsorData.childName ? `<p><strong>Child Name:</strong> ${sponsorData.childName}</p>` : ""}
        </div>

        <h3 style="color: #333;">What Happens Next?</h3>
        <ol style="color: #555;">
          <li>Our team will review your registration</li>
          <li>We'll match you with a child based on your preferences</li>
          <li>We'll send you detailed information about the child within 5-7 business days</li>
          <li>You'll receive regular progress updates about the child's education and life</li>
          <li>You can stay connected through letters and occasional video updates</li>
        </ol>

        <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Questions?</h3>
          <p>If you have any questions or need assistance, please don't hesitate to contact us:</p>
          <p><strong>Email:</strong> support@excelhope.org</p>
          <p><strong>Phone:</strong> ${process.env.SUPPORT_PHONE || "Contact us for support phone number"}</p>
        </div>

        <p style="color: #666; margin-top: 30px;">Thank you for being part of Excel HOPE and transforming lives through education!</p>

        <p style="color: #888; font-size: 12px;">
          <em>Registration Confirmation ID: ${sponsorData.timestamp}</em>
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: sponsorData.sponsorEmail,
      subject: "Sponsorship Confirmed! 🎉 - Excel HOPE",
      html: htmlContent,
    });

    console.log("✅ Sponsor confirmation email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("❌ Error sending sponsor confirmation:", error);
    throw error;
  }
};
