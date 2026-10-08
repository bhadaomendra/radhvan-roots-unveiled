/**
 * Radhvan Origins - Inquiry form -> Google Sheet
 *
 * SETUP (one time):
 *  1. Create a Google Sheet (any name, e.g. "Radhvan Inquiries").
 *  2. In the sheet: Extensions -> Apps Script. Delete the sample code and paste this file.
 *  3. Click Save. Then Deploy -> New deployment -> gear icon -> "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone
 *  4. Click Deploy, allow the permissions, and copy the "Web app URL" (ends with /exec).
 *  5. Paste that URL into src/lib/inquiry.ts (INQUIRY_ENDPOINT) and push.
 *
 * If you change this script later: Deploy -> Manage deployments -> edit (pencil)
 * -> Version: New version -> Deploy. The URL stays the same.
 */

var SHEET_NAME = "Inquiries";
var HEADERS = ["Timestamp", "Name", "Phone", "City / State", "Message", "Page", "Source"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var p = (e && e.parameter) || {};
    if (!p.name || !p.phone) {
      return json_({ result: "error", message: "Missing name or phone" });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
      // Plain-text columns: stops Sheets turning "+91..." or "=..." into formulas/numbers.
      sheet.getRange(2, 2, sheet.getMaxRows() - 1, HEADERS.length - 1).setNumberFormat("@");
    }

    sheet.appendRow([
      new Date(),
      clean_(p.name),
      clean_(p.phone),
      clean_(p.city),
      clean_(p.message),
      clean_(p.page),
      clean_(p.source),
    ]);
    return json_({ result: "success" });
  } catch (err) {
    return json_({ result: "error", message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Opening the URL in a browser just shows that the script is alive.
function doGet() {
  return json_({ result: "ok", message: "Inquiry endpoint is running" });
}

function clean_(v) {
  return String(v == null ? "" : v).substring(0, 1000);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
