// Contact form configuration.
//
// 1. Create a Google Sheet to collect submissions.
// 2. In the Sheet, go to Extensions -> Apps Script and paste a script that
//    appends incoming POST data as a new row, then sends a notification
//    email via MailApp/GmailApp to your agency inbox.
// 3. Deploy the Apps Script as a Web App (Execute as: Me, Access: Anyone),
//    and paste the resulting /exec URL below.
//
// Nothing else in the codebase needs to change — the Contact page reads
// this single value.
export const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec'

export const AGENCY_EMAIL = 'hello@webmint.agency'
export const AGENCY_PHONE_DISPLAY = '+1 (555) 019-2044'
export const AGENCY_WHATSAPP_NUMBER = '15550192044' // digits only, no + or spaces
