# Email Configuration Guide

To enable email notifications for form submissions, you need to configure the following environment variables in your `.env.local` file:

## Email Service Configuration

### Using Gmail
```env
# Gmail Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password  # Use Gmail App Password, not your regular password
ADMIN_EMAIL=admin@excelhope.org
SUPPORT_PHONE=+91-XXXXX-XXXXX
BASE_URL=http://localhost:3000  # Change to your production URL
```

**Steps to set up Gmail:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail" and "Windows Computer"
4. Copy the 16-character password and use it as `EMAIL_PASSWORD`

### Using Other Services
You can use any email service supported by Nodemailer (SendGrid, Mailgun, Outlook, Custom SMTP, etc.)

Example for SendGrid:
```env
EMAIL_SERVICE=SendGrid
EMAIL_USER=apikey
EMAIL_PASSWORD=SG.xxxxx  # Your SendGrid API key
ADMIN_EMAIL=admin@excelhope.org
BASE_URL=http://localhost:3000
```

Example for Custom SMTP:
```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
ADMIN_EMAIL=admin@excelhope.org
BASE_URL=http://localhost:3000
```

## Environment Variables Explanation

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_SERVICE` | Email service provider | `gmail`, `SendGrid`, `mailgun` |
| `EMAIL_USER` | Sender email or API key | `your-email@gmail.com` |
| `EMAIL_PASSWORD` | Email password or API secret | `xxxx xxxx xxxx xxxx` |
| `ADMIN_EMAIL` | Email to receive admin notifications | `admin@excelhope.org` |
| `SUPPORT_PHONE` | Support phone number (shown in emails) | `+91-XXXXX-XXXXX` |
| `BASE_URL` | Your application URL | `http://localhost:3000` or your production domain |

## Installation

Make sure you have installed nodemailer:
```bash
npm install nodemailer
```

## What Emails Are Sent?

### 1. Admin Notification Email
- **Sent to:** Admin email address
- **When:** Form is submitted successfully
- **Content:** Complete sponsor details for follow-up

### 2. Sponsor Confirmation Email
- **Sent to:** Sponsor's email
- **When:** Form is submitted successfully
- **Content:** Confirmation and next steps

## Testing Locally

1. Set up a test email account or use [Mailtrap](https://mailtrap.io/) for testing
2. Configure the environment variables
3. Submit the sponsorship form
4. Check the inbox for both admin and user emails

## Production Deployment

- Use a reliable email service (Gmail, SendGrid, Mailgun)
- Store credentials securely in environment variables
- Never commit `.env.local` to version control
- Update `BASE_URL` to your production domain
