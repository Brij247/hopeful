# ✅ Setup Guide - Excel HOPE Sponsor Registration

## Your Google Sheet Configuration

**Sheet ID:** `15Dyw-IEltBODf69XTBFMxy3e2zZa3I9xtia12t8C0KY`  
**Sheet URL:** https://docs.google.com/spreadsheets/d/15Dyw-IEltBODf69XTBFMxy3e2zZa3I9xtia12t8C0KY/

---

## 📋 What You Need to Do

### Step 1: Ensure Your Google Sheet Has the Right Headers

Open your Google Sheet and make sure the first sheet (or "Sponsors" sheet if you have one) has these column headers in row 1:

```
A: Timestamp
B: Sponsor Name
C: Email
D: Phone
E: Address
F: Child Name
G: Project
H: Monthly Amount
I: Donation Frequency
J: How Found Us
K: Message
```

**Note:** You can create a new sheet called "Sponsors" if needed and add these headers.

---

### Step 2: Create a Google Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Go to **"APIs & Services"** → **"Library"**
4. Search for **"Google Sheets API"** and enable it
5. Go to **"APIs & Services"** → **"Credentials"**
6. Click **"Create Credentials"** → **"Service Account"**
7. Fill in:
   - Service account name: `excel-hope-sponsor-sync`
   - Description: `Syncs sponsor data to Google Sheets`
8. Click **"Create and Continue"**
9. Grant role: Select **"Editor"** role
10. Click **"Continue"** → **"Done"**

---

### Step 3: Create and Download Service Account Key

1. Go to **"APIs & Services"** → **"Credentials"**
2. Under **"Service Accounts"**, click the account you just created
3. Go to the **"Keys"** tab
4. Click **"Add Key"** → **"Create new key"**
5. Choose **"JSON"** format
6. Click **"Create"**
7. A JSON file will download - **keep this file safe!**

---

### Step 4: Get the Values from the JSON File

Open the downloaded JSON file and find these values:

```json
{
  "type": "service_account",
  "project_id": "YOUR_PROJECT_ID",
  "private_key_id": "YOUR_PRIVATE_KEY_ID",
  "private_key": "-----BEGIN PRIVATE KEY-----\n....\n-----END PRIVATE KEY-----\n",
  "client_email": "your-email@project.iam.gserviceaccount.com",
  "client_id": "YOUR_CLIENT_ID",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/..."
}
```

---

### Step 5: Share Your Google Sheet with the Service Account

1. Copy the `client_email` value (looks like: `something@project.iam.gserviceaccount.com`)
2. Open your Google Sheet: https://docs.google.com/spreadsheets/d/15Dyw-IEltBODf69XTBFMxy3e2zZa3I9xtia12t8C0KY/
3. Click **"Share"** (top right)
4. Paste the service account email
5. Give it **"Editor"** access
6. Click **"Share"**

---

### Step 6: Create `.env.local` File

In your project root (`/home/brijitha/projects/private/hopeful/`), create a file called `.env.local`:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_TYPE=service_account
GOOGLE_SHEETS_PROJECT_ID=your-project-id
GOOGLE_SHEETS_PRIVATE_KEY_ID=your-private-key-id
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_FULL_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_CLIENT_ID=your-client-id
GOOGLE_SHEETS_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40project.iam.gserviceaccount.com
```

**Replace with values from your JSON file!**

---

### Step 7: Install Dependencies

Run this command in your terminal:

```bash
cd /home/brijitha/projects/private/hopeful
npm install
```

This will add the Google Sheets API library.

---

### Step 8: Test It!

1. Start the app:

   ```bash
   npm run dev
   ```

2. Open: http://localhost:3000

3. Click **"Sponsor a Child"** button

4. Fill out the form with test data:
   - **Sponsor Name:** John Doe
   - **Email:** john@example.com
   - **Phone:** +91 98765 43210
   - **Project:** Kozhencherry
   - **Monthly Amount:** 500
   - Other fields: optional

5. Click **"Submit Registration"**

6. Check your Google Sheet - the data should appear! ✅

---

## ⚠️ Important Security Notes

- **Never commit `.env.local` to GitHub!** It's already in `.gitignore`
- Keep your service account JSON file safe
- The service account can only access what you shared with it
- You can revoke access anytime by removing the service account email from your sheet

---

## 🔧 How It Works

When a sponsor fills out the form:

1. They click **"Submit Registration"**
2. Form data is sent to `/api/save-sponsor`
3. API uses Google Sheets credentials to authenticate
4. Data is automatically added as a new row in your Google Sheet
5. You get a confirmation message
6. Sheet updates instantly!

---

## 📊 What Data Gets Saved

Each submission adds a row with:

- **Timestamp** - When they registered
- **Sponsor Name** - Their full name
- **Email** - Their email address
- **Phone** - Their phone number
- **Address** - Their address (optional)
- **Child Name** - Specific child if mentioned
- **Project** - Which project they chose
- **Monthly Amount** - Their contribution
- **Donation Frequency** - How often (monthly, quarterly, etc.)
- **How Found Us** - Where they heard about you
- **Message** - Their personal message

---

## ✅ Admin Access

**To view/download the data:**

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/15Dyw-IEltBODf69XTBFMxy3e2zZa3I9xtia12t8C0KY/
2. View all sponsor registrations in real-time
3. **Download as Excel:** File → Download → Microsoft Excel

---

## 🆘 Troubleshooting

### "Error: Credentials not found"

- ❌ `.env.local` file not created
- ✅ Create it with all 7 variables from your JSON file

### "Permission denied"

- ❌ Sheet not shared with service account email
- ✅ Share your sheet with the `client_email` value

### "Invalid credentials"

- ❌ Private key not formatted correctly
- ✅ Make sure it includes literal `\n` characters and quotes around the whole key

### Data not appearing in sheet

- ❌ Headers don't match (check column names)
- ❌ Wrong sheet selected
- ✅ Verify headers and sheet name match the code

### Still having issues?

1. Check the terminal for error messages (run `npm run dev`)
2. Check browser console (F12) for errors
3. Verify all environment variables are set: `cat .env.local`
4. Make sure JSON file values are copied exactly

---

## 🚀 Quick Start Checklist

- [ ] Google Sheet created and shared link ready
- [ ] Google Cloud Project set up
- [ ] Google Sheets API enabled
- [ ] Service Account created
- [ ] JSON key downloaded
- [ ] Sheet headers added (columns A-K)
- [ ] Sheet shared with service account email
- [ ] `.env.local` file created with all 7 variables
- [ ] `npm install` completed
- [ ] `npm run dev` running
- [ ] Form tested and data appearing in sheet

---

## 📞 Need Help?

- Check `.env.local` exists with correct values
- Verify service account has "Editor" access to sheet
- Check that sheet headers match exactly
- Look for errors in terminal when running `npm run dev`

**You're all set!** 🎉 When sponsors register, their data will automatically appear in your Google Sheet!
