"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

interface SessionSummary {
  id: string;
  ip_address: string | null;
  email: string | null;
  started_at: string;
  last_message_at: string;
  message_count: number;
  preview: string | null;
}

interface SessionMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

interface SessionDetail {
  session: {
    id: string;
    ip_address: string | null;
    email: string | null;
    user_agent: string | null;
    started_at: string;
    last_message_at: string;
    metadata: Record<string, unknown>;
  };
  messages: SessionMessage[];
  lead: { email: string; source: string; created_at: string } | null;
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<SessionDetail | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  const fetchSessions = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      params.set("page", page.toString());

      const res = await fetch(`/api/admin/sessions?${params}`);
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setSessions(data.sessions || []);
      setTotal(data.total || 0);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch sessions:", err);
    } finally {
      setLoading(false);
    }
  }, [search, page, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchSessions();
    }
  }, [status, fetchSessions]);

  const fetchSessionDetail = async (id: string) => {
    setLoadingDetail(true);
    try {
      const res = await fetch(`/api/admin/sessions/${id}`);
      const data = await res.json();
      setSelectedSession(data);
    } catch (err) {
      console.error("Failed to fetch session detail:", err);
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--kognitos-black)]">
        <div className="text-[var(--kognitos-gray-400)]">Loading...</div>
      </div>
    );
  }

  if (status !== "authenticated") {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--kognitos-black)] text-[var(--kognitos-white)]">
      {/* Header */}
      <header className="border-b border-[var(--kognitos-gray-700)] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              fill="none"
              height="24"
              viewBox="-30 0 512 320"
              width="38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m391.986 130.171v-38.341c0-2.946-2.385-5.331-5.331-5.331h-171.336c-2.946 0-5.331 2.385-5.331 5.331v38.341c0 2.945-2.385 5.331-5.33 5.331h-24.341c-2.945 0-5.331-2.386-5.331-5.331v-38.341c0-2.946-2.385-5.331-5.33-5.331h-164.3253c-2.9455 0-5.3307 2.385-5.3307 5.331v87.338c0 2.945 2.3852 5.33 5.3307 5.33h45.3414c2.9455 0 5.3307 2.386 5.3307 5.331v38.341c0 2.946 2.3852 5.331 5.3307 5.331h171.3365c2.945 0 5.331-2.385 5.331-5.331v-38.341c0-2.945 2.385-5.331 5.33-5.331h24.341c2.945 0 5.33 2.386 5.33 5.331v38.341c0 2.946 2.386 5.331 5.331 5.331h164.336c2.946 0 5.331-2.385 5.331-5.331v-87.343c0-2.946-2.385-5.331-5.331-5.331h-45.341c-2.946 0-5.331-2.385-5.331-5.331z"
                fill="#f2fb90"
              />
            </svg>
            <h1 className="text-lg font-semibold">Knox Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--kognitos-gray-400)]">
              {session?.user?.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="text-sm text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and stats */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold">Chat Sessions</h2>
            <p className="text-sm text-[var(--kognitos-gray-400)] mt-1">
              {total} total session{total !== 1 ? "s" : ""}
            </p>
          </div>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by email..."
              className="px-4 py-2 bg-[var(--kognitos-gray-900)] border border-[var(--kognitos-gray-700)] rounded-lg text-sm text-[var(--kognitos-white)] placeholder-[var(--kognitos-gray-600)] focus:outline-none focus:border-[var(--kognitos-yellow)] w-64"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[var(--kognitos-yellow)] text-[var(--kognitos-black)] text-sm font-medium rounded-lg hover:bg-[var(--kognitos-yellow-dim)] transition-colors"
            >
              Search
            </button>
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearchInput("");
                  setSearch("");
                  setPage(1);
                }}
                className="px-3 py-2 text-sm text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] transition-colors"
              >
                Clear
              </button>
            )}
          </form>
        </div>

        <div className="flex gap-6">
          {/* Session list */}
          <div className={`${selectedSession ? "w-1/2" : "w-full"} transition-all`}>
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-[var(--kognitos-gray-400)]">Loading sessions...</div>
              </div>
            ) : sessions.length === 0 ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <p className="text-[var(--kognitos-gray-400)]">
                    {search ? "No sessions found matching your search." : "No chat sessions yet."}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  {sessions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => fetchSessionDetail(s.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-colors ${
                        selectedSession?.session.id === s.id
                          ? "bg-[var(--kognitos-gray-800)] border-[var(--kognitos-yellow)]"
                          : "bg-[var(--kognitos-gray-900)] border-[var(--kognitos-gray-700)] hover:border-[var(--kognitos-gray-600)]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {s.email ? (
                              <span className="text-sm font-medium text-[var(--kognitos-yellow)] truncate">
                                {s.email}
                              </span>
                            ) : (
                              <span className="text-sm text-[var(--kognitos-gray-600)] italic">
                                Anonymous
                              </span>
                            )}
                            <span className="text-xs text-[var(--kognitos-gray-600)] flex-shrink-0">
                              {s.message_count} msg{s.message_count !== 1 ? "s" : ""}
                            </span>
                          </div>
                          {s.preview && (
                            <p className="text-sm text-[var(--kognitos-gray-400)] truncate">
                              {s.preview}
                            </p>
                          )}
                        </div>
                        <span className="text-xs text-[var(--kognitos-gray-600)] flex-shrink-0 whitespace-nowrap">
                          {formatDate(s.started_at)}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-3 py-1.5 text-sm rounded-lg border border-[var(--kognitos-gray-700)] text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-[var(--kognitos-gray-400)]">
                      Page {page} of {totalPages}
                    </span>
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="px-3 py-1.5 text-sm rounded-lg border border-[var(--kognitos-gray-700)] text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Chat detail panel */}
          {selectedSession && (
            <div className="w-1/2 border border-[var(--kognitos-gray-700)] rounded-xl bg-[var(--kognitos-gray-900)] flex flex-col max-h-[calc(100vh-200px)] sticky top-8">
              {/* Panel header */}
              <div className="flex items-center justify-between p-4 border-b border-[var(--kognitos-gray-700)]">
                <div>
                  <h3 className="font-medium text-[var(--kognitos-white)]">
                    {selectedSession.session.email || "Anonymous"}
                  </h3>
                  <p className="text-xs text-[var(--kognitos-gray-400)] mt-0.5">
                    {formatDate(selectedSession.session.started_at)}
                    {selectedSession.session.ip_address &&
                      ` -- ${selectedSession.session.ip_address}`}
                  </p>
                  {selectedSession.lead && (
                    <p className="text-xs text-[var(--kognitos-yellow)] mt-1">
                      Lead: {selectedSession.lead.email} ({selectedSession.lead.source})
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedSession(null)}
                  className="p-1.5 rounded-lg hover:bg-[var(--kognitos-gray-800)] text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {loadingDetail ? (
                  <div className="flex items-center justify-center py-10">
                    <div className="text-[var(--kognitos-gray-400)] text-sm">Loading messages...</div>
                  </div>
                ) : selectedSession.messages.length === 0 ? (
                  <div className="text-center py-10 text-sm text-[var(--kognitos-gray-400)]">
                    No messages in this session.
                  </div>
                ) : (
                  selectedSession.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                          msg.role === "user"
                            ? "bg-[var(--kognitos-gray-800)] text-[var(--kognitos-white)] rounded-tr-md"
                            : "bg-[var(--kognitos-gray-800)]/50 text-[var(--kognitos-gray-200)]"
                        }`}
                      >
                        <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                        <p className="text-[10px] text-[var(--kognitos-gray-600)] mt-1.5">
                          {new Date(msg.created_at).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
