# Phase 1 Privacy & DPDP Data-Flow Report

- **Date:** 10 November 2026
- **Auditor:** Indian Privacy & DPDP Implementation Specialist
- **Statutory Framework:** Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)
- **Target Repository:** `urmika-juris-legal-presence` (Branch: `testing`)

---

## 1. End-to-End Technical Data Flow

The website implements a stateless, client-side inquiry architecture:

```
[1. Visitor Fills Consultation Form]
    │ Inputs: Full Name, Mobile Number, Optional Email, Practice Category, Overview Notes
    ▼
[2. Client-Side Input Sanitization]
    │ Validates: Required name, mobile length (10-15 digits), email format, BCI Rule 36 agreement
    ▼
[3. Browser-Side URI Construction]
    │ Builds: https://wa.me/918802487291?text=[encoded text]
    ▼
[4. Direct External Transition]
    │ window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    ▼
[5. Private Chamber Reception]
    │ Direct encrypted communication between Client and Chamber Advocates (+91 88024 87291)
```

### Verified Technical Observations:
1. **Server-Side Persistence:** **Zero database storage.** The web application does not connect to any SQL, NoSQL, or cloud database.
2. **Third-Party Analytics:** **Zero tracking scripts.** No Google Analytics, Google Tag Manager, Meta Pixel, PostHog, or external tracking beacons exist.
3. **Cookies & Browser Storage:**
   - Cookies: 0 tracking or session cookies set by the application.
   - `localStorage`: 0 keys used.
   - `sessionStorage`: Exactly 1 boolean key (`urmika_auto_consult_shown: "true"`) used strictly to prevent repetitive popups during an active session. No personal data is stored.

---

## 2. DPDP Act, 2023 Statutory Compliance Separation

Technical absence of database storage does not absolve a Data Fiduciary from statutory notice obligations under the DPDP Act, 2023. The Privacy Policy has been codified with explicit disclosures:

### A. Notice (Section 5, DPDP Act 2023)
- **Data Fiduciary Identity:** Urmika Juris & Associates, Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054.
- **Personal Data Collected:** Name, mobile number, optional email, matter category, and brief procedural overview.
- **Specified Purpose:** Scheduling an initial 30-minute structured case evaluation (standard rate ₹4,500/hr applying thereafter under agreed terms) and verifying conflicts of interest.

### B. Retention Limitation (Section 8(7), DPDP Act 2023)
- No digital copies are stored on website servers.
- Chamber case notes are retained strictly in accordance with statutory limitation periods and professional conduct standards under the Advocates Act, 1961.

### C. Grievance Redressal Mechanism (Section 8(10) & Section 13, DPDP Act 2023)
- **Primary Contact Point:** Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054.
- **Grievance Helpline:** `+91 88024 87291` | **Email:** `urmikajuris@gmail.com`.
- **Hours:** Monday – Saturday, 10:00 AM – 6:00 PM (By Appointment).

### D. Data Principal Rights (Sections 11–14, DPDP Act 2023)
The updated Privacy Policy articulates:
- Right to access summary of personal data provided.
- Right to correction and erasure (subject to legal retention duties).
- Right of grievance redressal.
- Right to nominate.

