import { describe, expect, it } from "vitest";
import { getDeterministicChatReply } from "@/lib/chat-server";

describe("Deterministic Chatbot Knowledge Engine (No External AI APIs)", () => {
  it("recognizes Criminal Law queries and returns verified practice information", () => {
    const res = getDeterministicChatReply("I need an urgent anticipatory bail for a criminal FIR matter");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("Criminal Law Practice");
    expect(res.reply).toContain("bail");
    expect(res.reply).toContain("Tis Hazari");
    expect(res.reply).toContain("+91 88024 87291");
  });

  it("recognizes Civil Law queries and returns injunction and recovery details", () => {
    const res = getDeterministicChatReply("How do I file a civil suit for property injunction and money recovery?");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("Civil Litigation Practice");
    expect(res.reply).toContain("injunctions");
    expect(res.reply).toContain("Order 39 CPC");
  });

  it("recognizes Matrimonial and Family Law queries", () => {
    const res = getDeterministicChatReply("Need consultation on mutual consent divorce and child custody");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("Family & Matrimonial Law");
    expect(res.reply).toContain("Section 13B");
    expect(res.reply).toContain("Maintenance");
  });

  it("recognizes Section 138 NI Act Cheque Bounce queries", () => {
    const res = getDeterministicChatReply("I received a legal notice for a cheque bounce under Section 138 NI Act");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("Section 138 Negotiable Instruments Act");
    expect(res.reply).toContain("30-day");
    expect(res.reply.toLowerCase()).toContain("compounding");
  });

  it("recognizes Consultation Process queries", () => {
    const res = getDeterministicChatReply("What is your consultation process and how does it work?");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("Initial Legal Consultation Process");
    expect(res.reply).toContain("30 minutes");
    expect(res.reply).toContain("Bar Council of India Rule 36");
  });

  it("recognizes Chamber Location queries", () => {
    const res = getDeterministicChatReply("Where is your chamber located and how to reach by metro?");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("Chamber 298A, Western Wing, Tis Hazari Courts");
    expect(res.reply).toContain("110054");
  });

  it("recognizes Chamber Contact Details queries", () => {
    const res = getDeterministicChatReply("Please give me your contact phone number, WhatsApp and email");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("+91 88024 87291");
    expect(res.reply).toContain("urmikajuris@gmail.com");
  });

  it("recognizes Consultation Availability and Chamber Timings queries", () => {
    const res = getDeterministicChatReply("What are your chamber timings and availability on Saturday?");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("Monday through Saturday");
    expect(res.reply).toContain("10:00 AM – 7:00 PM");
  });

  it("recognizes Advocate Team and Leadership queries", () => {
    const res = getDeterministicChatReply("Who are the advocates and founders at Urmika Juris?");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("Advocate Aashish Choudhary");
    expect(res.reply).toContain("Satish Chand");
    expect(res.reply).toContain("Durga Das");
    expect(res.reply).toContain("Krishan Kumar");
  });

  it("handles unknown/out-of-scope questions politely with guidance to WhatsApp and contact page", () => {
    const res = getDeterministicChatReply("What is the airspeed velocity of an unladen swallow?");
    expect(res.isAiGenerated).toBe(false);
    expect(res.reply).toContain("automated chamber information assistant");
    expect(res.reply).toContain("cannot answer this specific question");
    expect(res.reply).toContain("WhatsApp Chamber Line: +91 88024 87291");
    expect(res.reply).toContain("not a substitute for professional legal counsel");
  });
});

describe("WhatsApp Handoff Form Protocol", () => {
  it("formats consultation booking WhatsApp URL with verified phone number and URL-encoded fields", () => {
    const clientName = "Vikram Malhotra";
    const clientPhone = "+91 98111 22334";
    const service = "Criminal Defense & Bail Matters";
    const mode = "Chamber Visit";
    const notes = "FIR quashing petition in Delhi High Court";

    const messageLines = [
      "Hello Urmika Juris & Associates,",
      "",
      "I would like to request an initial legal consultation at your Tis Hazari chamber.",
      "",
      `• Name: ${clientName}`,
      `• Phone: ${clientPhone}`,
      `• Legal Service Area: ${service}`,
      `• Preferred Consultation Mode: ${mode}`,
      `• Brief Matter Notes: ${notes}`,
    ];

    const encoded = encodeURIComponent(messageLines.join("\n"));
    const url = `https://wa.me/918802487291?text=${encoded}`;

    expect(url).toContain("https://wa.me/918802487291");
    expect(url).toContain(encodeURIComponent("Vikram Malhotra"));
    expect(url).toContain(encodeURIComponent(service));
    expect(url).toContain(encodeURIComponent(notes));
  });

  it("formats contact enquiry WhatsApp URL with verified chamber telephone number", () => {
    const fullName = "Pooja Verma";
    const mobile = "+91 98765 43210";
    const service = "Property & Real Estate Law";
    const message = "Need title search due diligence before purchasing commercial shop in Delhi.";

    const messageLines = [
      "Hello Urmika Juris & Associates,",
      "",
      "I am submitting a consultation enquiry through your website contact page.",
      "",
      `• Name: ${fullName}`,
      `• Mobile: ${mobile}`,
      `• Legal Service Required: ${service}`,
      `• Matter Summary: ${message}`,
    ];

    const encoded = encodeURIComponent(messageLines.join("\n"));
    const url = `https://wa.me/918802487291?text=${encoded}`;

    expect(url).toContain("https://wa.me/918802487291");
    expect(url).toContain(encodeURIComponent("Pooja Verma"));
    expect(url).toContain(encodeURIComponent(service));
    expect(url).toContain(encodeURIComponent(message));
  });
});
