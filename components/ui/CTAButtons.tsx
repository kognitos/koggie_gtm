"use client";

import { useState } from "react";

interface CTAButtonsProps {
  sessionId?: string | null;
}

export function CTAButtons({ sessionId }: CTAButtonsProps) {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, sessionId, source: "report_request" }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setShowEmailModal(false);
          setStatus("idle");
          setEmail("");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <a
          href="https://www.kognitos.com/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 text-sm font-medium text-[var(--kognitos-gray-200)] hover:text-[var(--kognitos-white)] border border-[var(--kognitos-gray-700)] hover:border-[var(--kognitos-gray-600)] rounded-lg transition-colors"
        >
          Talk to a Human
        </a>
        <button
          onClick={() => setShowEmailModal(true)}
          className="px-3 py-2 text-sm font-medium bg-[var(--kognitos-yellow)] text-[var(--kognitos-black)] rounded-lg hover:bg-[var(--kognitos-yellow-dim)] transition-colors"
        >
          Get a Report
        </button>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowEmailModal(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-[var(--kognitos-gray-900)] border border-[var(--kognitos-gray-700)] rounded-2xl p-6 w-full max-w-md animate-fade-in">
            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-semibold text-[var(--kognitos-white)] mb-2">
                  You&apos;re on the list
                </h3>
                <p className="text-sm text-[var(--kognitos-gray-400)]">
                  We&apos;ll send you a helpful report shortly.
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="absolute top-4 right-4 text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)]"
                >
                  <CloseIcon />
                </button>
                
                <h3 className="text-lg font-semibold text-[var(--kognitos-white)] mb-2">
                  Get a helpful report
                </h3>
                <p className="text-sm text-[var(--kognitos-gray-400)] mb-6">
                  We&apos;ll send you insights on how Kognitos can help your business.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-[var(--kognitos-gray-800)] border border-[var(--kognitos-gray-700)] rounded-lg text-[var(--kognitos-white)] placeholder-[var(--kognitos-gray-600)] focus:outline-none focus:border-[var(--kognitos-yellow)] mb-4"
                    disabled={status === "loading"}
                  />
                  
                  {status === "error" && (
                    <p className="text-sm text-red-400 mb-4">
                      Something went wrong. Please try again.
                    </p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={status === "loading" || !email.includes("@")}
                    className="w-full px-4 py-3 text-sm font-medium bg-[var(--kognitos-yellow)] text-[var(--kognitos-black)] rounded-lg hover:bg-[var(--kognitos-yellow-dim)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === "loading" ? "Sending..." : "Send me the report"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
