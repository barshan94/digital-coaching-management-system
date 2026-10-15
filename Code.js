function addTodayDateColumn() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Attendance");
  const headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  const today = Utilities.formatDate(new Date(), "GMT+6", "yyyy-MM-dd"); // Bangladesh Time

  if (!headerRow.includes(today)) {
    const nextColumn = sheet.getLastColumn() + 1;
    sheet.getRange(1, nextColumn).setValue(today);
  }
}


function addMonthColumn() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Payment");
  const headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  const today = new Date();
  const thisMonth = Utilities.formatDate(today, "GMT+6", "MMM-yyyy"); // e.g. Jan-2025

  if (!headerRow.includes(thisMonth)) {
    const nextColumn = sheet.getLastColumn() + 1;
    sheet.getRange(1, nextColumn).setValue(thisMonth);
  }
}
