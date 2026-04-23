# 🚀 Quick Setup - Excel HOPE Sponsor Registration

**Good news:** The Google Sheet link is already hardcoded! You only need to set up Google credentials.

---

## 📋 What You Need to Do

### Step 1: Create Google Service Account (One-Time Setup)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Go to **"APIs & Services"** → **"Library"**
4. Search for **"Google Sheets API"** and click **Enable**
5. Go to **"APIs & Services"** → **"Credentials"**
6. Click **"Create Credentials"** → **"Service Account"**
7. Fill in:
   - Service account name: `excel-hope`
   - Description: `Excel Hope sponsor sync`
8. Click **"Create and Continue"** → **"Continue"** → **"Done"**

---

### Step 2: Download Service Account Key

1. Go to **"APIs & Services"** → **"Credentials"**
2. Under **"Service Accounts"**, click the account you just created
3. Go to **"Keys"** tab
4. Click **"Add Key"** → **"Create new key"**
5. Choose **"JSON"**
6. Click **"Create"** - JSON file downloads automatically

---

### Step 3: Get Values from JSON File

Open the downloaded JSON file and copy these 6 values:

```
type: service_account
project_id: YOUR_PROJECT_ID
private_key_id: YOUR_PRIVATE_KEY_ID
private_key: -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
client_email: something@project.iam.gserviceaccount.com
client_id: YOUR_CLIENT_ID
client_x509_cert_url: https://www.googleapis.com/...
```

---

### Step 4: Share Your Google Sheet with Service Account Email

1. Copy the `client_email` value from JSON
2. Open your Google Sheet: https://docs.google.com/spreadsheets/d/15Dyw-IEltBODf69XTBFMxy3e2zZa3I9xtia12t8C0KY/
3. Click **"Share"** (top right)
4. Paste the service account email
5. Select **"Editor"** access
6. Click **"Share"**

---

### Step 5: Create `.env.local` File

In `/home/brijitha/projects/private/hopeful/`, create a new file called `.env.local`:

```env
GOOGLE_SHEETS_TYPE=service_account
GOOGLE_SHEETS_PROJECT_ID=YOUR_PROJECT_ID
GOOGLE_SHEETS_PRIVATE_KEY_ID=YOUR_PRIVATE_KEY_ID
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=your-email@project.iam.gserviceaccount.com
GOOGLE_SHEETS_CLIENT_ID=YOUR_CLIENT_ID
GOOGLE_SHEETS_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your-email%40project.iam.gserviceaccount.com
```

**Replace with actual values from your JSON file!**

⚠️ **Important:** Keep the quotes around the private key and keep the `\n` characters exactly as shown.

---

### Step 6: Install & Test

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

Test the form → Check your Google Sheet for the data! ✅

---

## 📝 About Your Google Sheet

- **Sheet ID:** `15Dyw-IEltBODf69XTBFMxy3e2zZa3I9xtia12t8C0KY` (hardcoded ✅)
- **Range:** `Sponsors!A:K` (creates new sheet if needed)
- **Headers needed in row 1:**
  ```
  Timestamp | Name | Email | Phone | Address | Child | Project | Amount | Frequency | How Found | Message
  ```

---

## 🎯 That's It!

Once `.env.local` is set up with the 6 credentials, the app will:

1. Accept sponsor registrations
2. Automatically save to your Google Sheet
3. You can view/download anytime

---

## 🆘 Troubleshooting

**"Credentials not found"**

- ✅ Check `.env.local` exists with all 6 variables
- ✅ Run `npm install` again

**"Permission denied"**

- ✅ Did you share the sheet with the `client_email`?
- ✅ Verify it has "Editor" access

**"Private key invalid"**

- ✅ Make sure it has quotes around the whole thing
- ✅ Keep `\n` characters exactly as is

**Data not appearing**

- ✅ Check terminal for errors (run `npm run dev`)
- ✅ Verify sheet headers exist
- ✅ Check `.env.local` variables are correct

---

## ✅ Environment Variables Needed

Only these 6 - copy from your JSON file:

1. `GOOGLE_SHEETS_TYPE` → `service_account`
2. `GOOGLE_SHEETS_PROJECT_ID` → `project_id` from JSON
3. `GOOGLE_SHEETS_PRIVATE_KEY_ID` → `private_key_id` from JSON
4. `GOOGLE_SHEETS_PRIVATE_KEY` → `private_key` from JSON
5. `GOOGLE_SHEETS_CLIENT_EMAIL` → `client_email` from JSON
6. `GOOGLE_SHEETS_CLIENT_ID` → `client_id` from JSON
7. `GOOGLE_SHEETS_CLIENT_CERT_URL` → `client_x509_cert_url` from JSON

---

**Sheet link is hardcoded ✅**  
**Just add the 6 env vars and you're done!**
