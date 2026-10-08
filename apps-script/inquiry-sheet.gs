/**
 * Radhvan Origins - Inquiry form -> Google Sheet
 *
 * Web App receives the website form fields:
 * name, phone, city, message, page, source
 *
 * Google Form submissions are handled separately by the installable
 * spreadsheet "On form submit" trigger calling handleGoogleFormSubmit(e).
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
    var sheet = getOrCreateSheet_(ss);

    sheet.appendRow([
      new Date(),
      clean_(p.name),
      clean_(p.phone),
      clean_(p.city),
      clean_(p.message),
      clean_(p.page),
      clean_(p.source || "Website"),
    ]);

    return json_({ result: "success" });
  } catch (err) {
    return json_({ result: "error", message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Handles Google Form responses when this script is triggered by:
 * From spreadsheet -> On form submit.
 */
function handleGoogleFormSubmit(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = getOrCreateSheet_(ss);

    var namedValues = (e && e.namedValues) || {};
    var row = (e && e.values) || [];

    // Prefer the submitted row values by matching the Google Form response
    // sheet headers. This is robust even if the form questions change.
    var responseSheet = e && e.range ? e.range.getSheet() : null;
    var responseHeaders = responseSheet
      ? responseSheet.getRange(1, 1, 1, responseSheet.getLastColumn()).getValues()[0]
      : [];

    var getByKeywords = function (keywords) {
      for (var i = 0; i < responseHeaders.length; i++) {
        var header = String(responseHeaders[i] || "").toLowerCase().trim();
        for (var k = 0; k < keywords.length; k++) {
          if (header.indexOf(keywords[k]) !== -1) {
            return row[i] != null ? row[i] : "";
          }
        }
      }

      for (var key in namedValues) {
        var normalizedKey = String(key).toLowerCase().trim();
        for (var j = 0; j < keywords.length; j++) {
          if (normalizedKey.indexOf(keywords[j]) !== -1) {
            var value = namedValues[key];
            return Array.isArray(value) ? value[0] : value;
          }
        }
      }

      return "";
    };

    var fullName = getByKeywords(["full name", "name"]);
    var phone = getByKeywords(["phone", "mobile", "whatsapp"]);
    var email = getByKeywords(["email", "e-mail"]);

    var city = getByKeywords(["city", "state", "location"]);
    var interest = getByKeywords(["interest", "interested"]);
    var budget = getByKeywords(["budget"]);
    var timeline = getByKeywords(["timeline", "when"]);
    var requirement = getByKeywords([
      "requirement",
      "question",
      "message",
      "query",
      "details"
    ]);

    // Keep the existing 7-column Inquiries structure. Email and other
    // Google Form fields are included in Message without changing the
    // existing website sheet structure.
    var extra = [];
    if (email) extra.push("Email: " + email);
    if (interest) extra.push("Interest: " + interest);
    if (budget) extra.push("Budget: " + budget);
    if (timeline) extra.push("Timeline: " + timeline);
    if (requirement) extra.push("Requirement: " + requirement);

    sheet.appendRow([
      new Date(),
      clean_(fullName),
      clean_(phone),
      clean_(city),
      clean_(extra.join(" | ")),
      "Google Form",
      "Google Form",
    ]);
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    lock.releaseLock();
  }
}

function getOrCreateSheet_(ss) {
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  // Keep lead fields as plain text so +91 numbers are preserved.
  if (sheet.getMaxRows() > 1) {
    sheet
      .getRange(2, 2, sheet.getMaxRows() - 1, HEADERS.length - 1)
      .setNumberFormat("@");
  }

  return sheet;
}

// Opening the Web App URL in a browser shows that the endpoint is alive.
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
