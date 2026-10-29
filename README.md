# Digital Coaching Management System

A Google Sheets–based coaching workflow automation project built with Google Apps Script. The goal is to reduce repetitive spreadsheet maintenance for a coaching centre by keeping attendance and monthly payment sheets ready for use.

> **Implementation status:** This repository currently documents a small automation foundation, not a complete coaching management platform. The implemented script adds a missing date column to the Attendance sheet and a missing month column to the Payment sheet. The broader workflow shown in the portfolio animation is a concept demonstration and should not be mistaken for live functionality in this repository.

## Overview

Many coaching centres use spreadsheets to maintain student attendance and track monthly fees. As the calendar changes, staff often need to add new date columns and payment-month columns manually. This project automates two of those repetitive setup tasks using Google Apps Script.

## Implemented features

- **Attendance date header:** Adds today's date to the Attendance sheet when a matching date header does not already exist.
- **Payment month header:** Adds the current month to the Payment sheet when a matching month header does not already exist.
- **Duplicate prevention:** Checks for an existing date or month before adding a new header.
- **Bangladesh time zone:** Uses `Asia/Dhaka` (GMT+6) so date-based automation follows the intended local calendar.
- **Google Apps Script V8 runtime:** Configured through `appsscript.json`.

These helpers automate sheet preparation; they do not, by themselves, mark individual students present, collect payments, or calculate student performance.

## Technology stack

| Technology | Role |
| --- | --- |
| Google Sheets | Spreadsheet data and working interface |
| Google Apps Script | Automation logic |
| JavaScript (Apps Script V8) | Script runtime |
| `appsscript.json` | Runtime and time-zone configuration |

## Portfolio demonstration

The portfolio includes an animation that illustrates a possible broader coaching-management workflow, such as homework and assignment marks, quizzes and mock exams, prepared WhatsApp follow-up links, and weekly/monthly, attendance, and payment reports.

**Important:** These wider workflow elements are illustrative concept visuals using sample data. They are not implemented integrations in the current repository. The live code scope is limited to the two date/month header automations described above.

- **Portfolio:** [Digital Coaching Management demo](https://portfolio-beta-eight-b4vx6dfs83.vercel.app/)
- **Source repository:** [barshan94/digital-coaching-management-system](https://github.com/barshan94/digital-coaching-management-system)

## Setup

### Requirements

- A Google account
- A Google Sheets workbook with sheets named `Attendance` and `Payment`
- Access to Google Apps Script for that workbook

### Configure the project

1. Open the Google Sheets workbook that will be used for the coaching workflow.
2. Open **Extensions → Apps Script**.
3. Add the project's script code to the Apps Script editor, or copy the relevant functions into the existing project.
4. Confirm that the sheet names match the names expected by the script:
   - `Attendance`
   - `Payment`
5. Confirm that the Apps Script project time zone is set to `Asia/Dhaka`.
6. Save the project and test the functions on a **copy** of the workbook before using it with real records.

The repository currently contains the Apps Script manifest. If the script source is not present in the repository yet, the functions must be added to the Apps Script project separately; cloning this repository alone will not provide a complete runnable implementation.

## How it works

### Attendance sheet

The date helper checks the Attendance sheet for today's date. If a matching header is not found, it adds the date header so the sheet can be used for that day's attendance records. If the date is already present, it avoids adding a duplicate.

### Payment sheet

The month helper checks the Payment sheet for the current month. If a matching header is not found, it adds the month header. If the month already exists, it leaves the sheet unchanged.

### Time-zone handling

Date and month checks must use the coaching centre's intended time zone. This project is configured for Bangladesh time (`Asia/Dhaka`, GMT+6), which helps avoid date-boundary errors caused by a different script time zone.

## Current scope and limitations

The current implementation is intentionally small.

| Capability | Status |
| --- | --- |
| Add today's date header to Attendance | Implemented |
| Add current-month header to Payment | Implemented |
| Avoid duplicate date/month headers | Implemented |
| Student registry and profile management | Not implemented in current script |
| Mark and maintain individual attendance | Not implemented in current script |
| Record payments or calculate outstanding balances | Not implemented in current script |
| Homework, assignment, quiz, and mock-exam marks | Concept only in portfolio animation |
| Automated WhatsApp messaging | Not implemented; animation may show prepared follow-up links conceptually |
| Weekly/monthly analytics and reports | Not implemented in current script |
| Standalone web dashboard or role-based access | Not implemented in current script |

## Future development ideas

Potential next steps, if the project is expanded, include:

- A consistent student registry and unique student IDs
- Attendance entry and attendance summaries
- Monthly fee records, payment history, and outstanding balances
- Homework, assignment, quiz, and mock-exam score tracking
- Reports for attendance, payments, and academic progress
- Prepared WhatsApp follow-up links for manual review and sending
- Input validation, audit logs, and a safe backup/restore workflow

These are proposed enhancements, not claims about current functionality.

## Safety and data handling

- Test on a copy of the workbook before running scripts against real student or payment records.
- Do not commit student names, phone numbers, marks, payment details, or other private information.
- Review spreadsheet permissions before sharing a workbook.
- Apps Script permissions depend on the actions performed by the script and the account running it. Review any authorization prompts before granting access.

## Project configuration

The Apps Script manifest is configured with:

- **Time zone:** `Asia/Dhaka`
- **Runtime:** `V8`
- **Exception logging:** `STACKDRIVER`

See [`appsscript.json`](appsscript.json) for the current configuration.

## Author

**Barshan Ghosh**

- GitHub: [@barshan94](https://github.com/barshan94)
- Portfolio: [View portfolio](https://portfolio-beta-eight-b4vx6dfs83.vercel.app/)

---

This README distinguishes implemented automation from proposed features so visitors can understand the current state of the project accurately.
