import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Trash2,
  Bot,
  ShieldAlert,
  Phone,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FIRM } from "./data";
import { submitLegalEnquiry } from "@/lib/chat-server";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isAiGenerated?: boolean;
  timestamp: string;
}

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: `Hello. I am the AI Legal Enquiry Assistant for Urmika Juris & Associates. 

I can assist you with information regarding:
• Our 19 legal services & court forums in Delhi
• Initial 30-minute consultation terms
• Tis Hazari Courts chamber details & timings
• Connecting with Founder Advocate Aashish Choudhary & our legal team

How may I assist you today?`,
  timestamp: "Just now",
};

const SUGGESTED_QUESTIONS = [
  "What are the consultation terms?",
  "Where is your chamber located?",
  "Bail & criminal defense services",
  "Family & divorce matter guidance",
  "Property & RERA dispute help",
];

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Call server-side function
      const history = messages.slice(-4).map((m) => ({ role: m.role, content: m.content }));
      const response = await submitLegalEnquiry({
        data: { message: query, history },
      });

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.reply,
        isAiGenerated: response.isAiGenerated,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I apologize, but I encountered a momentary connection issue. Please contact the firm directly at +91 88024 87291 or urmikajuris@gmail.com for prompt assistance.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button (Sharp Architectural Badge — No Rounded-Full AI Pill) */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Legal Enquiry Assistant"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-lg bg-[#172B54] border border-[#FEC556]/60 px-4 py-3 text-white shadow-2xl hover:scale-105 hover:bg-[#1f386e] transition-all duration-200 group cursor-pointer"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded bg-[#FEC556] text-[#172B54]">
            <Bot className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          </div>
          <div className="text-left hidden sm:block pr-1">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Legal Assistant</span>
              <span className="rounded bg-[#FEC556]/20 px-1.5 py-0.2 text-[10px] text-[#FEC556] font-mono">
                AI
              </span>
            </div>
            <div className="text-[11px] text-gray-300">Enquiries & Info</div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Legal Enquiry Assistant Window"
          className="fixed bottom-4 right-4 z-50 flex h-[580px] w-[92vw] max-w-[410px] flex-col rounded-xl border border-[#FEC556]/40 bg-[#0F1D38] text-white shadow-2xl backdrop-blur-md overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#172B54] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#FEC556] text-[#172B54] font-bold">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading text-sm font-bold tracking-wide text-white">
                    Urmika Legal Assistant
                  </span>
                  <span className="rounded bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.5 font-medium">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-gray-300">Tis Hazari Courts Chamber 298A</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearChat}
                title="Clear conversation"
                className="rounded p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="rounded p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mandatory Safety Disclaimer Banner */}
          <div className="bg-[#172B54]/60 border-b border-white/10 px-3.5 py-2 flex items-start gap-2 text-[10.5px] text-gray-300">
            <ShieldAlert className="h-3.5 w-3.5 text-[#FEC556] shrink-0 mt-0.5" />
            <p className="leading-tight">
              <strong>General Information Only:</strong> Does not constitute legal advice or an
              advocate-client relationship.
            </p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap shadow-sm ${
                    m.role === "user"
                      ? "bg-[#FEC556] text-[#172B54] font-medium"
                      : "bg-[#172B54] text-gray-100 border border-white/10"
                  }`}
                >
                  {m.content}
                </div>
                <span className="mt-1 text-[10px] text-gray-400 px-1">{m.timestamp}</span>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 rounded-lg bg-[#172B54] border border-white/10 px-3.5 py-2.5 text-gray-300 max-w-[70%]">
                <Sparkles className="h-3.5 w-3.5 text-[#FEC556] animate-spin" />
                <span className="text-xs">Consulting knowledge base...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts (Sharp Rectangular Badges — No Pill Capsule Tags) */}
          {messages.length <= 2 && (
            <div className="px-3 py-1.5 border-t border-white/5 bg-[#172B54]/30 overflow-x-auto flex gap-1.5 no-scrollbar">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="shrink-0 rounded border border-[#FEC556]/30 bg-[#FEC556]/10 px-2.5 py-1 text-[11px] text-[#FEC556] hover:bg-[#FEC556]/20 transition cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Quick Connect Bar */}
          <div className="px-3 py-1.5 border-t border-white/10 bg-[#0c172d] flex items-center justify-between text-[11px] text-gray-400">
            <span>Direct Chamber Line:</span>
            <a
              href={FIRM.phoneHref}
              className="flex items-center gap-1 text-[#FEC556] hover:underline font-medium"
            >
              <Phone className="h-3 w-3" /> {FIRM.phone}
            </a>
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-white/10 bg-[#172B54] p-2.5 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about legal services, chamber, or consultation..."
              className="flex-1 rounded-xl border border-white/15 bg-[#0F1D38] px-3.5 py-2 text-xs text-white placeholder-gray-400 outline-none focus:border-[#FEC556] focus:ring-1 focus:ring-[#FEC556]"
              maxLength={1000}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEC556] text-[#172B54] transition hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
