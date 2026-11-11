import { createServerFn } from "@tanstack/react-start";
import { FIRM } from "@/components/site/data";

export interface ChatRequest {
  message: string;
  history?: Array<{ role: "user" | "assistant"; content: string }>;
}

export interface ChatResponse {
  reply: string;
  isAiGenerated: boolean;
  disclaimer: string;
}

export const SYSTEM_DISCLAIMER =
  "This automated assistant provides general firm and procedural information only. It does not provide legal advice or establish an advocate-client relationship. For legal counsel regarding your matter, contact our chamber directly at +91 88024 87291 or urmikajuris@gmail.com.";

/**
 * Pure deterministic FAQ knowledge engine.
 * Matches keywords and inquiries against verified firm domain areas.
 * Zero external network calls, zero model API keys.
 */
export function getDeterministicChatReply(message: string): ChatResponse {
  const lower = message.toLowerCase();
  let responseText = "";

  // 1. Criminal Law
  if (
    lower.includes("criminal") ||
    lower.includes("bail") ||
    lower.includes("fir") ||
    lower.includes("arrest") ||
    lower.includes("police") ||
    lower.includes("quash") ||
    lower.includes("anticipatory") ||
    lower.includes("bnss") ||
    lower.includes("crpc") ||
    lower.includes("ipc") ||
    lower.includes("bns") ||
    lower.includes("jail") ||
    lower.includes("chargesheet")
  ) {
    responseText =
      `Criminal Law Practice at Urmika Juris & Associates:\n\n` +
      `Our advocates handle regular bail, anticipatory bail (under BNSS / CrPC), Section 482 FIR quashing petitions before the Delhi High Court, and trial defense before Sessions and District Courts across Delhi.\n\n` +
      `• Primary Forums: Tis Hazari Courts, Patiala House, Rohini, Saket, Dwarka, Karkardooma, and the Delhi High Court.\n` +
      `• Key Focus: Protection of personal liberty, statutory compliance, cross-examination, and appellate relief.\n\n` +
      `For urgent criminal matters or bail listings, please contact our chamber line directly at +91 88024 87291 or WhatsApp us.`;
  }
  // 2. Civil Law & Injunctions
  else if (
    lower.includes("civil") ||
    lower.includes("injunction") ||
    lower.includes("recovery") ||
    lower.includes("suit") ||
    lower.includes("partition") ||
    lower.includes("contract") ||
    lower.includes("agreement") ||
    lower.includes("breach") ||
    lower.includes("possession") ||
    lower.includes("damages") ||
    lower.includes("execution")
  ) {
    responseText =
      `Civil Litigation Practice at Urmika Juris & Associates:\n\n` +
      `We represent individuals and commercial entities in civil recovery suits, permanent and interim injunctions (Order 39 CPC), ancestral partition disputes, declaration of title, and execution of court decrees.\n\n` +
      `• Court Forums: Civil Courts at Tis Hazari, all Delhi District Court complexes, and Original Civil Jurisdiction before the Delhi High Court.\n` +
      `• Procedure: Evidence examination, statutory limitation evaluation, plaint drafting, and disciplined courtroom presentation.\n\n` +
      `To discuss your civil dispute, schedule an initial 30-minute review via phone (+91 88024 87291) or our website consultation form.`;
  }
  // 3. Matrimonial & Family Law
  else if (
    lower.includes("divorce") ||
    lower.includes("matrimonial") ||
    lower.includes("family") ||
    lower.includes("custody") ||
    lower.includes("maintenance") ||
    lower.includes("alimony") ||
    lower.includes("domestic violence") ||
    lower.includes("dv act") ||
    lower.includes("498a") ||
    lower.includes("annulment") ||
    lower.includes("separation")
  ) {
    responseText =
      `Family & Matrimonial Law Practice:\n\n` +
      `Our chamber provides discreet, ethical guidance in family and matrimonial matters:\n` +
      `• Mutual Consent Divorce under Section 13B Hindu Marriage Act\n` +
      `• Contested Divorce on statutory grounds\n` +
      `• Interim & Permanent Maintenance petitions (Section 125 CrPC / BNSS)\n` +
      `• Child Custody and Visitation rights\n` +
      `• Defense and prosecution in Domestic Violence and Section 498A matters\n\n` +
      `We prioritize pre-litigation mediation and structured amicable settlements wherever viable. Consult our advocates at Chamber 298A Tis Hazari Courts or call +91 88024 87291.`;
  }
  // 4. NI Act Matters (Section 138 Cheque Bounce)
  else if (
    lower.includes("138") ||
    lower.includes("cheque") ||
    lower.includes("check") ||
    lower.includes("bounce") ||
    lower.includes("dishonour") ||
    lower.includes("dishonor") ||
    lower.includes("ni act") ||
    lower.includes("negotiable")
  ) {
    responseText =
      `Section 138 Negotiable Instruments Act (Cheque Bounce Matters):\n\n` +
      `We represent both complainants seeking debt recovery and accused respondents defending false or disputed claims:\n` +
      `• Drafting and serving statutory 30-day legal demand notices\n` +
      `• Filing criminal complaints before Judicial Magistrates (within strict 30-day limitation)\n` +
      `• Trial defense, evidence affidavit preparation, and cross-examination\n` +
      `• Compounding and structured pre-trial settlements\n\n` +
      `Strict statutory timelines govern cheque dishonour cases. Contact our Tis Hazari chamber immediately at +91 88024 87291 for limitation review.`;
  }
  // 5. Consultation Process & Protocol
  else if (
    lower.includes("consult") ||
    lower.includes("process") ||
    lower.includes("procedure") ||
    lower.includes("how it works") ||
    lower.includes("step") ||
    lower.includes("mode") ||
    lower.includes("video") ||
    lower.includes("phone consultation")
  ) {
    responseText =
      `Initial Legal Consultation Process at Urmika Juris:\n\n` +
      `1. Initial Case Review: Up to 30 minutes structured discussion to review your factual background, relevant documents, and court forum.\n` +
      `2. Procedural Evaluation: Objective assessment of merits, court jurisdiction, and statutory limitation periods.\n` +
      `3. Flexible Modes: Choose between an in-person Chamber Visit at Tis Hazari Courts, a direct Phone Call, or a secure Video Conference.\n` +
      `4. Transparent Terms: Professional conduct governed strictly under Bar Council of India Rule 36.\n\n` +
      `To book your consultation, click the 'Book Consultation' button on the website, use the WhatsApp button, or call +91 88024 87291.`;
  }
  // 6. Consultation Availability & Chamber Timings
  else if (
    lower.includes("timing") ||
    lower.includes("timings") ||
    lower.includes("hours") ||
    lower.includes("available") ||
    lower.includes("availability") ||
    lower.includes("open") ||
    lower.includes("saturday") ||
    lower.includes("sunday") ||
    lower.includes("schedule")
  ) {
    responseText =
      `Chamber Timings & Availability:\n\n` +
      `• Days: Monday through Saturday\n` +
      `• Consultation Timings: 10:00 AM – 6:00 PM (By prior appointment)\n` +
      `• Sunday: Chamber closed; emergency bail or urgent remand inquiries coordinated via helpline: +91 88024 87291.\n\n` +
      `Court benches function from 10:00 AM to 4:00 PM. Evening chamber hours from 4:00 PM to 6:00 PM are dedicated to pre-scheduled client briefings.`;
  }
  // 7. Chamber Location
  else if (
    lower.includes("location") ||
    lower.includes("address") ||
    lower.includes("chamber") ||
    lower.includes("office") ||
    lower.includes("where") ||
    lower.includes("tis hazari") ||
    lower.includes("reach") ||
    lower.includes("metro") ||
    lower.includes("direction")
  ) {
    responseText =
      `Chamber Location Details:\n\n` +
      `Urmika Juris & Associates\n` +
      `Chamber 298A, Western Wing, Tis Hazari Courts Complex,\n` +
      `Delhi – 110054, India.\n\n` +
      `• Landmark: Located in the Western Wing of Tis Hazari Courts complex, near Tis Hazari Metro Station (Red Line) and Kashmiri Gate.\n` +
      `• Chamber Telephone: +91 88024 87291\n` +
      `• Chamber Hours: Monday to Saturday, 10:00 AM – 6:00 PM (By prior appointment).`;
  }
  // 8. Contact Details & Helpline
  else if (
    lower.includes("contact") ||
    lower.includes("phone") ||
    lower.includes("call") ||
    lower.includes("number") ||
    lower.includes("whatsapp") ||
    lower.includes("email") ||
    lower.includes("helpline") ||
    lower.includes("reach out")
  ) {
    responseText =
      `Direct Chamber Contact Channels:\n\n` +
      `• Telephone Helpline: +91 88024 87291\n` +
      `• WhatsApp Chamber Line: +91 88024 87291\n` +
      `• Official Email: urmikajuris@gmail.com\n` +
      `• Physical Address: Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054\n\n` +
      `You can also use the contact form on our website to prepare an enquiry directly for our WhatsApp helpline.`;
  }
  // 9. Advocate Team & Leadership Information
  else if (
    lower.includes("advocate") ||
    lower.includes("lawyer") ||
    lower.includes("team") ||
    lower.includes("who") ||
    lower.includes("aashish") ||
    lower.includes("ashish") ||
    lower.includes("satish") ||
    lower.includes("durga") ||
    lower.includes("krishan") ||
    lower.includes("principal") ||
    lower.includes("founder") ||
    lower.includes("counsel")
  ) {
    responseText =
      `Legal Advocacy Team at Urmika Juris & Associates:\n\n` +
      `• Advocate Aashish Choudhary — Advocate (Founder, Chamber 298A Tis Hazari Courts)\n` +
      `• Advocate Satish Chand — Advocate\n` +
      `• Advocate Durga Das — Advocate\n` +
      `• Advocate Krishan Kumar — Advocate\n\n` +
      `Our advocates represent matters across the Supreme Court of India, Delhi High Court & District Courts Pan-India.`;
  }
  // 10. Property, Real Estate & RERA
  else if (
    lower.includes("property") ||
    lower.includes("real estate") ||
    lower.includes("rera") ||
    lower.includes("tenant") ||
    lower.includes("landlord") ||
    lower.includes("builder")
  ) {
    responseText =
      `Property & Real Estate Law Practice:\n\n` +
      `We advise on property acquisition title verification, builder delay relief before RERA Delhi, eviction petitions under Delhi Rent Control, and civil partition suits across Delhi courts.\n\n` +
      `To discuss your property matter, contact our chamber line at +91 88024 87291 or book a consultation.`;
  }
  // 11. High Court Writs & Constitutional Matters
  else if (
    lower.includes("writ") ||
    lower.includes("high court") ||
    lower.includes("supreme court") ||
    lower.includes("article 226") ||
    lower.includes("article 32") ||
    lower.includes("nclt")
  ) {
    responseText =
      `High Court Writs & Appellate Practice:\n\n` +
      `Our advocates draft and argue Article 226 writ petitions before the Delhi High Court and Special Leave Petitions (SLP) before the Supreme Court of India in cases of administrative overreach, fundamental rights violations, and statutory appeals.\n\n` +
      `Connect directly with our advocates at Chamber 298A Tis Hazari Courts or call +91 88024 87291.`;
  }
  // 12. Fallback for Unknown / Specific Queries
  else {
    responseText =
      `I am an automated chamber information assistant for Urmika Juris & Associates and cannot answer this specific question or provide tailored legal advice.\n\n` +
      `For reliable legal counsel regarding your specific situation, please connect directly with our chamber advocates:\n` +
      `• WhatsApp Chamber Line: +91 88024 87291\n` +
      `• Direct Telephone Call: +91 88024 87291\n` +
      `• Chamber Address: Ch. 298A, Western Wing, Tis Hazari Courts, Delhi – 110054\n` +
      `• Website Contact: Use the Contact page or 'Book Consultation' button on this site.\n\n` +
      `Note: This automated assistant provides website navigation guidance only and is not a substitute for professional legal counsel from an advocate.`;
  }

  return {
    reply: responseText,
    isAiGenerated: false,
    disclaimer: SYSTEM_DISCLAIMER,
  };
}

/**
 * Server function endpoint wrapping the pure deterministic knowledge engine.
 */
export const submitLegalEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown): ChatRequest => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid request payload");
    }
    const d = data as Record<string, unknown>;
    const rawMessage = d["message"];
    const message = typeof rawMessage === "string" ? rawMessage.trim() : "";
    if (!message || message.length > 1000) {
      throw new Error("Message must be between 1 and 1000 characters");
    }
    const rawHistory = d["history"];
    const history = Array.isArray(rawHistory)
      ? (rawHistory as Array<{ role: "user" | "assistant"; content: string }>)
      : [];
    return { message, history: history.slice(-6) };
  })
  .handler(async ({ data }): Promise<ChatResponse> => {
    return getDeterministicChatReply(data.message);
  });
