import { createServerFn } from "@tanstack/react-start";
import { FIRM, LEGAL_SERVICES, HOW_WE_WORK_STEPS } from "@/components/site/data";

interface ChatRequest {
  message: string;
  history?: Array<{ role: "user" | "assistant"; content: string }>;
}

interface ChatResponse {
  reply: string;
  isAiGenerated: boolean;
  disclaimer: string;
}

const SYSTEM_DISCLAIMER =
  "This AI assistant provides general information and website assistance only. It does not provide legal advice or establish an advocate-client relationship. For advice relating to your specific matter, please contact the firm directly at +91 88024 87291 or urmikajuris@gmail.com.";

/**
 * Server-side handler for the Urmika Juris legal enquiry assistant.
 * Securely checks for GEMINI_API_KEY or OPENAI_API_KEY on the server.
 * If configured, connects to the generative model.
 * If unconfigured, utilizes the verified firm knowledge base safely.
 */
export const submitLegalEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown): ChatRequest => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid request payload");
    }
    const d = data as Record<string, unknown>;
    const message = typeof d.message === "string" ? d.message.trim() : "";
    if (!message || message.length > 1000) {
      throw new Error("Message must be between 1 and 1000 characters");
    }
    const history = Array.isArray(d.history)
      ? (d.history as Array<{ role: "user" | "assistant"; content: string }>)
      : [];
    return { message, history: history.slice(-6) };
  })
  .handler(async ({ data }): Promise<ChatResponse> => {
    const { message, history } = data;
    const lower = message.toLowerCase();

    // Check if an AI provider key is set on the server
    const geminiKey = process.env.GEMINI_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (geminiKey) {
      try {
        const prompt = `You are the AI Legal Enquiry Assistant for Urmika Juris & Associates (Delhi law firm with chambers at Ch. 298A, Western Wing, Tis Hazari Courts, Delhi – 110054).
Firm Founder & Principal Advocate: Advocate Aashish Choudhary.
Advocates: Satish Chand (Advocate), Durga Das (Advocate), Krishan Kumar (Advocate).
Contact: Mobile +91 88024 87291, Email urmikajuris@gmail.com.
Services: 19 Practice Areas matching full legal service directory including Criminal Law (bail, FIR quashing, trials), Property Law (RERA, title search, land disputes), Civil Law (injunctions, recovery suits), Family & Divorce Law (mutual consent, custody, maintenance), Corporate Law, Cyber Crime Law, Intellectual Property, Labour & Employment, Consumer Protection, Tax Law, NCLT, and High Court Writs.
Consultation: Initial 30-minute structured consultation. Charges beyond initial period communicated according to applicable agreed terms and professional norms.

IMPORTANT RULES:
1. Always state you are an AI assistant and not an advocate.
2. Never give definitive legal advice or guarantee any case outcome.
3. Keep responses concise, professional, respectful, and guide the visitor to contact the advocates for their specific matter.
4. Conclude with guidance to call +91 88024 87291 or visit Chamber 298A, Tis Hazari Courts.

User question: ${message}`;

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          },
        );

        if (res.ok) {
          const json = await res.json();
          const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            return {
              reply: text.trim(),
              isAiGenerated: true,
              disclaimer: SYSTEM_DISCLAIMER,
            };
          }
        }
      } catch (err) {
        console.warn(
          "Server AI provider call failed, falling back to verified knowledge base:",
          err,
        );
      }
    } else if (openaiKey) {
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content: `You are the AI Legal Enquiry Assistant for Urmika Juris & Associates. Advocates: Satish Chand (Advocate), Durga Das (Advocate), Krishan Kumar (Advocate). Chamber: Ch. 298A, Western Wing, Tis Hazari Courts, Delhi – 110054. Phone: +91 88024 87291. Email: urmikajuris@gmail.com. Initial consultation is up to 30 minutes. You do not provide definitive legal advice or guarantee outcomes.`,
              },
              ...history,
              { role: "user", content: message },
            ],
            max_tokens: 350,
          }),
        });

        if (res.ok) {
          const json = await res.json();
          const text = json.choices?.[0]?.message?.content;
          if (text) {
            return {
              reply: text.trim(),
              isAiGenerated: true,
              disclaimer: SYSTEM_DISCLAIMER,
            };
          }
        }
      } catch (err) {
        console.warn("OpenAI API call failed, falling back to verified knowledge base:", err);
      }
    }

    // Verified Knowledge Engine (Deterministic, Safe, Accurate)
    // Runs when external AI keys are not yet configured in the environment.
    let responseText = "";

    if (
      lower.includes("consult") ||
      lower.includes("fee") ||
      lower.includes("charge") ||
      lower.includes("price") ||
      lower.includes("cost") ||
      lower.includes("book")
    ) {
      responseText =
        `Urmika Juris & Associates offers an initial structured consultation of up to 30 minutes. ` +
        `Any applicable charges beyond the initial consultation period, or subsequent professional case fees, will be communicated according to applicable agreed terms and professional norms. ` +
        `Where agreed, consultation charges may be adjusted as part of the overall case fees. ` +
        `To schedule a consultation at Chamber 298A Tis Hazari Courts or via phone, please call +91 88024 87291 or WhatsApp us.`;
    } else if (
      lower.includes("location") ||
      lower.includes("address") ||
      lower.includes("chamber") ||
      lower.includes("office") ||
      lower.includes("where") ||
      lower.includes("tis hazari")
    ) {
      responseText =
        `Our chamber is situated at:\n` +
        `Ch. 298A, Western Wing, Tis Hazari Courts, Delhi – 110054.\n\n` +
        `Chamber hours: Monday to Saturday, 10:00 AM – 7:00 PM (by prior appointment).\n` +
        `Phone: +91 88024 87291 | Email: urmikajuris@gmail.com.`;
    } else if (
      lower.includes("advocate") ||
      lower.includes("lawyer") ||
      lower.includes("team") ||
      lower.includes("who") ||
      lower.includes("aashish") ||
      lower.includes("ashish")
    ) {
      responseText =
        `Urmika Juris & Associates is led by:\n` +
        `• Advocate Aashish Choudhary — Founder & Principal Advocate\n` +
        `• Satish Chand (Advocate) — Senior Counsel\n` +
        `• Durga Das (Advocate) — Counsel\n` +
        `• Krishan Kumar (Advocate) — Counsel\n\n` +
        `Our advocates appear before Tis Hazari District Courts, Delhi High Court, and appellate tribunals.`;
    } else if (
      lower.includes("criminal") ||
      lower.includes("bail") ||
      lower.includes("fir") ||
      lower.includes("police") ||
      lower.includes("arrest")
    ) {
      responseText =
        `Our Criminal Law practice handles regular bail, anticipatory bail (under BNSS / CrPC), FIR quashing before the High Court, trial defense before Sessions Courts, and criminal appeals.\n\n` +
        `For urgent criminal matters in Delhi, please contact our advocates directly at +91 88024 87291.`;
    } else if (
      lower.includes("divorce") ||
      lower.includes("family") ||
      lower.includes("custody") ||
      lower.includes("maintenance") ||
      lower.includes("domestic violence")
    ) {
      responseText =
        `Our Family & Matrimonial Law practice handles mutual consent divorce, contested divorce, child custody, interim and permanent maintenance, and domestic violence protection.\n\n` +
        `We prioritize confidential mediation and structured settlements in Family Courts across Delhi.`;
    } else if (
      lower.includes("property") ||
      lower.includes("real estate") ||
      lower.includes("rera") ||
      lower.includes("tenant") ||
      lower.includes("land")
    ) {
      responseText = `Our Property & Real Estate practice provides title search due diligence, partition and possession civil suits, RERA delay complaints, and lease disputes before Tis Hazari and Delhi forums.`;
    } else if (lower.includes("cheque") || lower.includes("138") || lower.includes("bounce")) {
      responseText = `We represent both complainants and respondents in Section 138 Negotiable Instruments Act cheque bounce proceedings, including statutory 30-day legal notice drafting, trial presentation, and compounding.`;
    } else if (
      lower.includes("writ") ||
      lower.includes("high court") ||
      lower.includes("supreme court") ||
      lower.includes("constitution")
    ) {
      responseText = `Our advocates file Article 226 writ petitions before the Delhi High Court and Article 32/136 petitions before the Supreme Court of India in matters involving administrative arbitrariness and violation of fundamental rights.`;
    } else {
      responseText =
        `Welcome to Urmika Juris & Associates. We provide legal counsel across Criminal Law, Family & Divorce, Property & Real Estate, Corporate & Commercial Advisory, Civil Litigation, Consumer Protection, Cheque Bounce (NI Act), and High Court Writs.\n\n` +
        `Our chambers are at Ch. 298A, Western Wing, Tis Hazari Courts, Delhi. You can book an initial 30-minute consultation by calling +91 88024 87291 or using the consultation form on this website.`;
    }

    return {
      reply: responseText,
      isAiGenerated: false,
      disclaimer: SYSTEM_DISCLAIMER,
    };
  });
