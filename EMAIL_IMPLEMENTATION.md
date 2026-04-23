# Email Notification System - Implementation Guide

## Overview
The email notification system has been implemented to send emails in two scenarios:
1. **Admin Notification**: Alert admin/staff about new sponsorship registrations
2. **Sponsor Confirmation**: Send confirmation email to the sponsor

## What Was Added

### 1. New Files Created

#### `/src/utils/email.js`
- Email utility functions for sending notifications
- `sendAdminNotification()` - Sends detailed registration info to admin
- `sendSponsorConfirmation()` - Sends welcome/confirmation email to sponsor
- Handles email template rendering

#### `/src/pages/api/send-email.js`
- API endpoint to trigger email sending
- Called after successful form submission
- Handles both admin and sponsor emails

#### Configuration Files
- `.env.local.example` - Example environment variables
- `EMAIL_SETUP.md` - Detailed setup instructions

### 2. Modified Files

#### `/src/pages/api/save-sponsor.js`
- Updated to call email sending API after successful Google Sheets save
- Sends sponsor data to `/api/send-email`
- Non-blocking email sending (won't fail form submission if email fails)

#### `/package.json`
- Added `nodemailer` dependency for email functionality

## Setup Instructions

### Step 1: Install Dependencies
```bash
npm install
# This will install nodemailer along with other dependencies
```

### Step 2: Configure Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Fill in your email service credentials:
   - `EMAIL_SERVICE`: Service provider (gmail, sendgrid, etc.)
   - `EMAIL_USER`: Your email address or API key
   - `EMAIL_PASSWORD`: Password or API token
   - `ADMIN_EMAIL`: Where admin notifications should go
   - `SUPPORT_PHONE`: Support phone for confirmation emails
   - `BASE_URL`: Your app's URL

### Step 3: Gmail Setup (if using Gmail)
1. Go to https://myaccount.google.com/security
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Copy the 16-character password to `EMAIL_PASSWORD`

### Step 4: Test the Implementation
1. Start the development server: `npm run dev`
2. Navigate to the sponsorship form
3. Submit a test sponsorship
4. Check both the admin email and sponsor email inbox

## Email Templates

### Admin Notification Email
- Sponsor's full contact information
- Project and sponsorship details
- Monthly amount and frequency
- Personal message and motivation
- Timestamp of submission

### Sponsor Confirmation Email
- Welcome message
- Sponsorship summary
- Next steps (5-7 days for assignment)
- Contact information
- Confirmation ID

## Error Handling
- Email failures don't prevent form submission
- Errors are logged to the console
- Failed emails can be investigated using server logs

## Security Considerations
- **Never commit `.env.local`** to version control
- Use App Passwords or API keys, not main account passwords
- Keep email credentials secure
- Consider rate limiting for production

## Troubleshooting

### Emails not being sent?
1. Check if `.env.local` is properly configured
2. Look at server console for error messages
3. Verify email credentials are correct
4. Check spam/junk folder
5. Ensure BASE_URL is set correctly

### Gmail authentication failing?
1. Verify App Password is correctly generated
2. Make sure 2-Factor Authentication is enabled
3. Use the 16-character password without spaces

### Email appears as spam?
1. Consider using a custom domain
2. Set up SPF, DKIM, and DMARC records
3. Use a professional email service like SendGrid

## Production Deployment
- Use a reliable email service (SendGrid, Mailgun, Postmark)
- Update `BASE_URL` to your production domain
- Store sensitive credentials in secure environment variables
- Monitor email sending and set up alerts for failures
- Consider implementing email queue/retry logic for critical messages

## Future Enhancements
- Email templates stored in database or CMS
- Email scheduling/queue system
- Attachment support (sponsor/child photos, etc.)
- Email analytics and tracking
- Multi-language support
- Dynamic email content based on project
