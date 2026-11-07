# Route Architecture & Reference Mapping

## Urmika Juris & Associates — Reconstructed from VakeelSaab.com

This document establishes the explicit 1:1 mapping between the reference platform (**VakeelSaab.com**) and the reconstructed production implementation of **Urmika Juris & Associates**.

---

### Master Route Mapping Matrix

| VakeelSaab Reference Page                            | Urmika Juris Equivalent URL            | Route Type           | Purpose & Equivalent Feature                                                                                                                                                                                                                                                              | Implementation Status      |
| :--------------------------------------------------- | :------------------------------------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `/` (Homepage)                                       | `/`                                    | Primary Root         | Executive hero with classical courtroom architecture, verified advocates (Satish Chand, Durga Das, Krishan Kumar), Tis Hazari Chamber 298A credentials, Our Legal Services overview, How We Work 3-step hybrid flow, FAQ, pre-footer CTA, floating WhatsApp + Call + AI Chatbot triggers. | **Implemented & Verified** |
| `/about`                                             | `/about`                               | Static Brand         | Full firm profile, core ethical values (Truth, Integrity, Privilege, Discipline), verified advocates panel, Tis Hazari Chamber 298A permanent presence, Bar Council Rule 36 compliance.                                                                                                   | **Implemented & Verified** |
| `/legal-services`                                    | `/legal-services`                      | Services Hub         | "Our Legal Services" category filter hub covering 8 verified practice areas with custom Lucide iconography, focus sub-domains, and 30-min consultation triggers.                                                                                                                          | **Implemented & Verified** |
| `/legal-services/criminal-defense-lawyer`            | `/legal-services/criminal-law`         | Practice Detail      | Regular bail, anticipatory bail (BNSS / CrPC), FIR quashing (Sec 482), sessions trial defense, and criminal appellate advocacy before Tis Hazari & Delhi High Court.                                                                                                                      | **Implemented & Verified** |
| `/legal-services/family-lawyer` / `/divorce-lawyers` | `/legal-services/family-divorce`       | Practice Detail      | Mutual consent & contested divorce, child custody, interim/permanent maintenance (Sec 125 CrPC), domestic violence protection (PWDVA), and mediation.                                                                                                                                     | **Implemented & Verified** |
| `/legal-services/real-estate-and-property-lawyers`   | `/legal-services/property-real-estate` | Practice Detail      | Title search due diligence, partition suits, possession recovery, builder-buyer disputes, RERA complaints, and commercial leases.                                                                                                                                                         | **Implemented & Verified** |
| `/legal-services/corporate-lawyer-in-india`          | `/legal-services/corporate-commercial` | Practice Detail      | Commercial contract drafting, arbitration under Arbitration & Conciliation Act 1996, Section 9 interim relief, DRT recovery, and IBC / NCLT representation.                                                                                                                               | **Implemented & Verified** |
| `/legal-services/civil-lawyer`                       | `/legal-services/civil-litigation`     | Practice Detail      | Temporary injunctions (Order 39 CPC), declaratory suits, summary recovery suits (Order 37), execution of decrees, and civil appeals.                                                                                                                                                      | **Implemented & Verified** |
| `/legal-services/consumer-protection-lawyer`         | `/legal-services/consumer-protection`  | Practice Detail      | Consumer grievance redressal, deficiency in service claims, insurance repudiation, and builder delay complaints before District, State, and National Consumer Commissions.                                                                                                                | **Implemented & Verified** |
| `/cheque-bounce-lawyer-delhi`                        | `/legal-services/cheque-bounce`        | Practice Detail      | Section 138 Negotiable Instruments Act statutory 30-day demand notices, complaints before Metropolitan Magistrate, trial cross-examination, and compounding.                                                                                                                              | **Implemented & Verified** |
| `/writ-petition-lawyer`                              | `/legal-services/writs-constitutional` | Practice Detail      | Article 226 constitutional writ petitions before Delhi High Court and Article 32 / 136 Special Leave Petitions before Supreme Court of India.                                                                                                                                             | **Implemented & Verified** |
| `/how-we-work`                                       | `/how-we-work`                         | Methodology          | Complete 3-step hybrid architecture matching VakeelSaab: Step 01 Case Intake & Study → Step 02 Chamber Consultation & 30-min Advisory → Step 03 Court Representation & Enforcement.                                                                                                       | **Implemented & Verified** |
| `/contact`                                           | `/contact`                             | Chamber & Lead       | Chamber 298A Western Wing Tis Hazari Courts coordinates, direct phone dialer (`+91 88024 87291`), official email (`urmikajuris@gmail.com`), and interactive enquiry form with WhatsApp link generator.                                                                                    | **Implemented & Verified** |
| `/faq`                                               | `/faq`                                 | Knowledge & Support  | Categorized accordion addressing 30-minute consultation terms, chamber appointment procedures, fee norms, confidentiality, and document requirements.                                                                                                                                     | **Implemented & Verified** |
| `/reviews`                                           | `/reviews`                             | Feedback & Ethics    | Client feedback & ethics policy explaining Bar Council of India Rule 36 restrictions on commercial solicitation, client-counsel privilege, and direct feedback channel.                                                                                                                   | **Implemented & Verified** |
| `/privacy-policy`                                    | `/privacy-policy`                      | Statutory Compliance | Advocate-client confidentiality under Section 126 of the Indian Evidence Act 1872, data protection, and inquiry handling standards.                                                                                                                                                       | **Implemented & Verified** |
| `/terms-of-service`                                  | `/terms-of-service`                    | Legal Agreement      | Website terms, 30-minute consultation terms wording, BCI Rule 36 non-solicitation disclaimer, and dispute jurisdiction (Delhi).                                                                                                                                                           | **Implemented & Verified** |
| `/practice-areas`                                    | `/practice-areas`                      | Legacy Route         | Backwards-compatible route redirecting/rendering updated "Our Legal Services" catalog for existing bookmarks and regression tests.                                                                                                                                                        | **Implemented & Verified** |
| `/practice-areas/[slug]`                             | `/practice-areas/$slug`                | Legacy Route         | Backwards-compatible route for all 8 practice areas, maintaining seamless navigation and full test suite passes.                                                                                                                                                                          | **Implemented & Verified** |

---

### Core Component Architecture

1. **Sticky Top Navigation (`Header`)**:
   - Deep Navy `#172B54` with gold border tint and scroll shadow.
   - Urmika emblem (`urmika-emblem.png`) + "URMIKA JURIS & Associates".
   - Active route pill styling (`bg-[#FEC556]/10 border border-[#FEC556]/30 text-[#FEC556]`).
   - "Our Legal Services" hover/click dropdown.
   - "Book Consultation" CTA button triggering the 30-minute terms modal.
   - Accessible mobile drawer navigation with hamburger toggle.

2. **Hero Composition**:
   - High-contrast classical courtroom architecture (`court.jpg`) with deep navy gradient overlay (`#172B54` / `#0F1D38`).
   - Verified advocates: Satish Chand (Advocate), Durga Das (Advocate), Krishan Kumar (Advocate).
   - "Book 30-Minute Consultation" primary CTA + "Call +91 88024 87291".
   - 4-item Trust Badge Strip (Tis Hazari Chamber 298A, Multi-Court Representation, 30-Min Structured Consult, BCI Ethical Compliance).

3. **Consultation Agreement Modal (`ConsultationModal`)**:
   - Triggered from header, hero, footer, and service cards.
   - Transparent initial terms wording:
     > _"Your initial consultation is scheduled for up to 30 minutes. Any applicable charges beyond the initial consultation period, or any subsequent professional fees, will be communicated to you according to the applicable agreed terms and professional norms. Where agreed, applicable consultation charges may be adjusted as part of the overall case fees."_
   - Explicit disclaimer that wording is subject to advocate confirmation.
   - User reviews terms and continues to WhatsApp, Phone, or Contact Form.

4. **AI Legal Enquiry Assistant (`AiChatbot`)**:
   - Persistent floating widget at `bottom-6 right-6`.
   - Expandable chat dialog with loading states, suggested quick prompts, and clear chat action.
   - Connected to server-side RPC function (`submitLegalEnquiry`).
   - Supports `GEMINI_API_KEY` or `OPENAI_API_KEY` when configured in environment.
   - In offline/unconfigured environment mode, operates safely using the verified Urmika knowledge base without fabricating information or failing.
   - Mandatory disclaimer: _"General Information Only. Does not constitute legal advice or an advocate-client relationship."_

5. **Lead Generation Persistent Widgets (`FloatingButtons`)**:
   - WhatsApp float button (`https://wa.me/918802487291`).
   - Direct Call float button (`tel:+918802487291`).
   - Staggered vertically so they never collide with the AI Chatbot or page content.
