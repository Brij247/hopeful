# Excel HOPE - Google Sheets Integration Setup Guide

## Overview
This guide will help you set up Google Sheets integration to automatically save sponsor registration data to a Google Sheet.

## Prerequisites
- A Google Cloud Project
- Google Sheets API enabled
- A Google Sheet ready to receive sponsor data

## Step-by-Step Setup

### 1. Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Name it "Excel HOPE" or similar
4. Click Create

### 2. Enable Google Sheets API
1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

### 3. Create a Service Account
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the details:
   - Service account name: "excel-hope-sponsor-sync"
   - Description: "Syncs sponsor data to Google Sheets"
4. Click "Create and Continue"
5. Grant it "Editor" role (for now, you can restrict later)
6. Click "Continue" and then "Done"

### 4. Create and Download Service Account Key
1. Go to "APIs & Services" > "Credentials"
2. Under "Service Accounts", click on the account you just created
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Choose "JSON" format
6. Click "Create"
7. A JSON file will download - keep it secure!

### 5. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Excel HOPE Sponsors"
4. Rename the first sheet to "Sponsors"
5. Add these headers in row 1:
   ```
   Timestamp | Sponsor Name | Email | Phone | Address | Child Name | Project | Monthly Amount | Frequency | How Found Us | Message
   ```
6. Get the Sheet ID from the URL (it's the long alphanumeric string)

### 6. Share Google Sheet with Service Account
1. Open the JSON file you downloaded
2. Copy the `client_email` value (looks like: example@project.iam.gserviceaccount.com)
3. Open your Google Sheet
4. Click "Share" and paste the email
5. Give it "Editor" access
6. Click "Share"

### 7. Set Up Environment Variables
Add these to your `.env.local` file in the project root:

```env
# Google Sheets Configuration
GOOGLE_SHEET_ID=YOUR_SHEET_ID_HERE
GOOGLE_SHEETS_TYPE=service_account
GOOGLE_SHEETS_PROJECT_ID=your-project-id
GOOGLE_SHEETS_PRIVATE_KEY_ID=your-private-key-id
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_CLIENT_ID=your-client-id
GOOGLE_SHEETS_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40project.iam.gserviceaccount.com
```

### 8. Extract Values from Downloaded JSON
Open your downloaded JSON file and find these values:
- `project_id` → GOOGLE_SHEETS_PROJECT_ID
- `private_key_id` → GOOGLE_SHEETS_PRIVATE_KEY_ID
- `private_key` → GOOGLE_SHEETS_PRIVATE_KEY
- `client_email` → GOOGLE_SHEETS_CLIENT_EMAIL
- `client_id` → GOOGLE_SHEETS_CLIENT_ID
- `client_x509_cert_url` → GOOGLE_SHEETS_CLIENT_CERT_URL

### 9. Update API Route
The API route at `src/pages/api/save-sponsor-gsheet.js` handles the Google Sheets integration.

To use it, update `src/pages/sponser-a-child/index.js` line that calls:
```javascript
// Change this:
const response = await fetch("/api/sponser", {...})

// To this:
const response = await fetch("/api/save-sponsor-gsheet", {...})
```

### 10. Install Google API Library
Run in your project root:
```bash
npm install googleapis
```

### 11. Test the Integration
1. Fill out a sponsor form on your website
2. Check your Google Sheet - the data should appear!

## Alternative: Use Zapier or Make.com
If you prefer not to deal with API keys, you can:
1. Keep the current basic `/api/save-sponsor` endpoint
2. Use Zapier or Make.com to watch for form submissions
3. Automatically add them to Google Sheets

This is simpler but less real-time.

## Troubleshooting

### "Permission Denied" Error
- Make sure you shared the Google Sheet with the service account email
- Check that the Sheet ID is correct
- Verify API is enabled in Google Cloud

### "Invalid Credentials" Error
- Check that all environment variables are set correctly
- Make sure the private key includes literal `\n` characters
- The private_key should start with "-----BEGIN PRIVATE KEY-----"

### Data Not Appearing
- Check the browser console for errors
- Check server logs (run `npm run dev` to see logs)
- Verify the sheet name is "Sponsors"
- Make sure headers match the expected format

## Security Notes
- Never commit `.env.local` to git
- Store the service account key securely
- Consider rotating keys periodically
- Limit service account permissions to only Google Sheets API
- Use `.env.local` for sensitive data (already in `.gitignore`)

## Next Steps
- Set up email notifications when new sponsors register
- Create a dashboard to view sponsor statistics
- Implement automated progress emails to sponsors
- Set up payment verification with Razorpay
