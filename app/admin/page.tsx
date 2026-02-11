"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback, useRef, Suspense } from "react";

interface SessionSummary {
  id: string;
  ip_address: string | null;
  email: string | null;
  started_at: string;
  last_message_at: string;
  message_count: number;
  preview: string | null;
  lead_email: string | null;
  lead_source: string | null;
  location: string | null;
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
    location: string | null;
    metadata: Record<string, unknown>;
  };
  messages: SessionMessage[];
  lead: { email: string; source: string; created_at: string } | null;
}

interface Stats {
  totalSessions: number;
  totalLeads: number;
  engagedSessions: number;
  customStarts: number;
  sessionsToday: number;
  avgMessages: number;
  conversionRate: number;
}

type FilterTab = "all" | "leads" | "engaged" | "custom";
type SortOption = "" | "newest" | "oldest" | "most_messages" | "fewest_messages";
type DaysOption = "" | "1" | "7" | "30";
type SearchScope = "all" | "user" | "assistant";

const SEARCH_SCOPES: { value: SearchScope; label: string }[] = [
  { value: "all", label: "All" },
  { value: "user", label: "User" },
  { value: "assistant", label: "AI" },
];

const FILTER_TABS: { key: FilterTab; label: string; statKey: keyof Stats }[] = [
  { key: "all", label: "All", statKey: "totalSessions" },
  { key: "leads", label: "Leads", statKey: "totalLeads" },
  { key: "engaged", label: "Engaged", statKey: "engagedSessions" },
  { key: "custom", label: "Custom Starts", statKey: "customStarts" },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "", label: "Smart sort" },
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "most_messages", label: "Most messages" },
  { value: "fewest_messages", label: "Fewest messages" },
];

const DAYS_OPTIONS: { value: DaysOption; label: string }[] = [
  { value: "", label: "All time" },
  { value: "1", label: "Today" },
  { value: "7", label: "7 days" },
  { value: "30", label: "30 days" },
];

function isFilterTab(v: string): v is FilterTab {
  return ["all", "leads", "engaged", "custom"].includes(v);
}

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[var(--kognitos-black)]">
          <div className="text-[var(--kognitos-gray-400)]">Loading...</div>
        </div>
      }
    >
      <AdminContent />
    </Suspense>
  );
}

function AdminContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialFilter = searchParams.get("filter");
  const initialSearch = searchParams.get("search") || "";
  const initialSessionId = searchParams.get("session") || null;
  const initialSort = (searchParams.get("sort") || "") as SortOption;
  const initialDays = (searchParams.get("days") || "") as DaysOption;
  const initialSearchScope = (searchParams.get("searchScope") || "all") as SearchScope;

  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [search, setSearch] = useState(initialSearch);
  const [searchInput, setSearchInput] = useState(initialSearch);
  const [searchScope, setSearchScope] = useState<SearchScope>(initialSearchScope);
  const [filter, setFilter] = useState<FilterTab>(
    initialFilter && isFilterTab(initialFilter) ? initialFilter : "all"
  );
  const [sort, setSort] = useState<SortOption>(initialSort);
  const [days, setDays] = useState<DaysOption>(initialDays);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionDetail | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);

  const pageRef = useRef(1);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Sync state to URL
  const updateUrl = useCallback(
    (params: {
      filter?: FilterTab;
      search?: string;
      sessionId?: string | null;
      sort?: SortOption;
      days?: DaysOption;
      searchScope?: SearchScope;
    }) => {
      const url = new URLSearchParams();
      const f = params.filter ?? filter;
      const s = params.search ?? search;
      const sid =
        params.sessionId !== undefined
          ? params.sessionId
          : selectedSession?.session.id || null;
      const so = params.sort ?? sort;
      const d = params.days ?? days;
      const sc = params.searchScope ?? searchScope;

      if (f !== "all") url.set("filter", f);
      if (s) url.set("search", s);
      if (sid) url.set("session", sid);
      if (so) url.set("sort", so);
      if (d) url.set("days", d);
      if (sc !== "all") url.set("searchScope", sc);

      const qs = url.toString();
      router.replace(`/admin${qs ? `?${qs}` : ""}`, { scroll: false });
    },
    [filter, search, selectedSession, sort, days, searchScope, router]
  );

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/admin/stats")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setStats(data);
      })
      .catch(() => {});
  }, [status]);

  const fetchSessions = useCallback(
    async (pageNum: number, append: boolean) => {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      try {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (search && searchScope !== "all") params.set("searchScope", searchScope);
        if (filter !== "all") params.set("filter", filter);
        if (sort) params.set("sort", sort);
        if (days) params.set("days", days);
        params.set("page", pageNum.toString());

        const res = await fetch(`/api/admin/sessions?${params}`);
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        const data = await res.json();
        const newSessions: SessionSummary[] = data.sessions || [];

        if (append) {
          setSessions((prev) => [...prev, ...newSessions]);
        } else {
          setSessions(newSessions);
        }
        setTotal(data.total || 0);
        setHasMore(data.hasMore ?? false);
        pageRef.current = pageNum;
      } catch (err) {
        console.error("Failed to fetch sessions:", err);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [search, searchScope, filter, sort, days, router]
  );

  // Fetch page 1 when filters change
  useEffect(() => {
    if (status === "authenticated") {
      pageRef.current = 1;
      fetchSessions(1, false);
    }
  }, [status, fetchSessions]);

  // Auto-open session detail from URL
  useEffect(() => {
    if (status === "authenticated" && initialSessionId && !selectedSession) {
      fetchSessionDetail(initialSessionId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, initialSessionId]);

  // Infinite scroll via IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore && !loading) {
          fetchSessions(pageRef.current + 1, true);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, loadingMore, loading, fetchSessions]);

  const fetchSessionDetail = async (id: string) => {
    setLoadingDetail(true);
    try {
      const res = await fetch(`/api/admin/sessions/${id}`);
      const data = await res.json();
      setSelectedSession(data);
      updateUrl({ sessionId: id });
    } catch (err) {
      console.error("Failed to fetch session detail:", err);
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    updateUrl({ search: searchInput, searchScope });
  };

  const handleFilterChange = (tab: FilterTab) => {
    setFilter(tab);
    setSelectedSession(null);
    updateUrl({ filter: tab, sessionId: null });
  };

  const handleSortChange = (newSort: SortOption) => {
    setSort(newSort);
    updateUrl({ sort: newSort });
  };

  const handleDaysChange = (newDays: DaysOption) => {
    setDays(newDays);
    updateUrl({ days: newDays });
  };

  const handleCloseDetail = () => {
    setSelectedSession(null);
    updateUrl({ sessionId: null });
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearch("");
    updateUrl({ search: "" });
  };

  const handleExportCsv = () => {
    if (sessions.length === 0) return;
    const headers = [
      "Date",
      "Email",
      "Lead Email",
      "Lead Source",
      "Location",
      "Messages",
      "First Message",
    ];
    const rows = sessions.map((s) => [
      new Date(s.started_at).toISOString(),
      s.email || "",
      s.lead_email || "",
      s.lead_source || "",
      s.location || "",
      s.message_count.toString(),
      (s.preview || "").replace(/"/g, '""'),
    ]);
    const csv = [
      headers.join(","),
      ...rows.map((r) => r.map((c) => `"${c}"`).join(",")),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `knox-sessions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
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

  if (status !== "authenticated") return null;

  return (
    <div className="min-h-screen bg-[var(--kognitos-black)] text-[var(--kognitos-white)]">
      {/* Header */}
      <header className="border-b border-[var(--kognitos-gray-700)] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg fill="none" height="24" viewBox="-30 0 512 320" width="38" xmlns="http://www.w3.org/2000/svg">
              <path d="m391.986 130.171v-38.341c0-2.946-2.385-5.331-5.331-5.331h-171.336c-2.946 0-5.331 2.385-5.331 5.331v38.341c0 2.945-2.385 5.331-5.33 5.331h-24.341c-2.945 0-5.331-2.386-5.331-5.331v-38.341c0-2.946-2.385-5.331-5.33-5.331h-164.3253c-2.9455 0-5.3307 2.385-5.3307 5.331v87.338c0 2.945 2.3852 5.33 5.3307 5.33h45.3414c2.9455 0 5.3307 2.386 5.3307 5.331v38.341c0 2.946 2.3852 5.331 5.3307 5.331h171.3365c2.945 0 5.331-2.385 5.331-5.331v-38.341c0-2.945 2.385-5.331 5.33-5.331h24.341c2.945 0 5.33 2.386 5.33 5.331v38.341c0 2.946 2.386 5.331 5.331 5.331h164.336c2.946 0 5.331-2.385 5.331-5.331v-87.343c0-2.946-2.385-5.331-5.331-5.331h-45.341c-2.946 0-5.331-2.385-5.331-5.331z" fill="#f2fb90" />
            </svg>
            <h1 className="text-lg font-semibold">Knox Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--kognitos-gray-400)]">{session?.user?.email}</span>
            <button onClick={() => signOut({ callbackUrl: "/admin/login" })} className="text-sm text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] transition-colors">
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        {stats && (
          <div className="mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3">
              <StatCard label="Total Sessions" value={stats.totalSessions} />
              <StatCard label="Leads Captured" value={stats.totalLeads} highlight />
              <StatCard label="Engaged Chats" value={stats.engagedSessions} />
              <StatCard label="Custom Starts" value={stats.customStarts} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <MiniStat label="Today" value={stats.sessionsToday.toString()} />
              <MiniStat label="Avg Messages" value={stats.avgMessages.toString()} />
              <MiniStat label="Conversion" value={`${stats.conversionRate}%`} highlight={stats.conversionRate > 0} />
            </div>
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1 bg-[var(--kognitos-gray-900)] rounded-lg p-1">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleFilterChange(tab.key)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    filter === tab.key
                      ? "bg-[var(--kognitos-gray-700)] text-[var(--kognitos-white)] font-medium"
                      : "text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)]"
                  }`}
                >
                  {tab.label}
                  {stats && (
                    <span className={`ml-1.5 text-xs ${filter === tab.key ? "text-[var(--kognitos-gray-300)]" : "text-[var(--kognitos-gray-600)]"}`}>
                      {stats[tab.statKey]}
                    </span>
                  )}
                </button>
              ))}
            </div>
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search emails and messages..."
                className="px-4 py-2 bg-[var(--kognitos-gray-900)] border border-[var(--kognitos-gray-700)] rounded-lg text-sm text-[var(--kognitos-white)] placeholder-[var(--kognitos-gray-600)] focus:outline-none focus:border-[var(--kognitos-yellow)] w-72"
              />
              <div className="flex items-center gap-0.5 bg-[var(--kognitos-gray-900)] rounded-lg p-0.5 border border-[var(--kognitos-gray-700)]">
                {SEARCH_SCOPES.map((sc) => (
                  <button
                    key={sc.value}
                    type="button"
                    onClick={() => setSearchScope(sc.value)}
                    className={`px-2 py-1.5 text-xs rounded-md transition-colors ${
                      searchScope === sc.value
                        ? "bg-[var(--kognitos-gray-700)] text-[var(--kognitos-white)] font-medium"
                        : "text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)]"
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
              <button type="submit" className="px-4 py-2 bg-[var(--kognitos-yellow)] text-[var(--kognitos-black)] text-sm font-medium rounded-lg hover:bg-[var(--kognitos-yellow-dim)] transition-colors">
                Search
              </button>
              {search && (
                <button type="button" onClick={handleClearSearch} className="px-3 py-2 text-sm text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] transition-colors">
                  Clear
                </button>
              )}
            </form>
          </div>

          {/* Date range + sort + export row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {DAYS_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleDaysChange(opt.value)}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                      days === opt.value
                        ? "bg-[var(--kognitos-gray-700)] text-[var(--kognitos-white)] font-medium"
                        : "text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <select
                value={sort}
                onChange={(e) => handleSortChange(e.target.value as SortOption)}
                className="px-3 py-1.5 text-xs bg-[var(--kognitos-gray-900)] border border-[var(--kognitos-gray-700)] rounded-lg text-[var(--kognitos-gray-300)] focus:outline-none focus:border-[var(--kognitos-yellow)]"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-sm text-[var(--kognitos-gray-400)]">
                {total} session{total !== 1 ? "s" : ""}
                {filter !== "all" && ` in ${FILTER_TABS.find((t) => t.key === filter)?.label}`}
                {search && ` matching "${search}"`}
                {days && ` (${DAYS_OPTIONS.find((d) => d.value === days)?.label})`}
              </p>
              <button
                onClick={handleExportCsv}
                disabled={sessions.length === 0}
                className="px-3 py-1.5 text-xs rounded-lg border border-[var(--kognitos-gray-700)] text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] hover:border-[var(--kognitos-gray-600)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Export CSV
              </button>
            </div>
          </div>
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
                <p className="text-[var(--kognitos-gray-400)]">
                  {search
                    ? "No sessions found matching your search."
                    : filter !== "all"
                      ? `No ${FILTER_TABS.find((t) => t.key === filter)?.label.toLowerCase()} sessions yet.`
                      : "No chat sessions yet."}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {sessions.map((s) => {
                  const displayName = s.lead_email || s.email;
                  const hasLead = !!s.lead_email;
                  const isSelected = selectedSession?.session.id === s.id;

                  return (
                    <button
                      key={s.id}
                      onClick={() => fetchSessionDetail(s.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-colors ${
                        isSelected
                          ? "bg-[var(--kognitos-gray-800)] border-[var(--kognitos-yellow)]"
                          : hasLead
                            ? "bg-[var(--kognitos-gray-900)] border-[var(--kognitos-yellow)]/40 hover:border-[var(--kognitos-yellow)]"
                            : "bg-[var(--kognitos-gray-900)] border-[var(--kognitos-gray-700)] hover:border-[var(--kognitos-gray-600)]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {displayName ? (
                              <span className={`text-sm font-medium truncate ${hasLead ? "text-[var(--kognitos-yellow)]" : "text-[var(--kognitos-white)]"}`}>
                                {displayName}
                              </span>
                            ) : (
                              <span className="text-sm text-[var(--kognitos-gray-600)] italic">Anonymous</span>
                            )}
                            {hasLead && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--kognitos-yellow)]/15 text-[var(--kognitos-yellow)] flex-shrink-0 font-medium">Lead</span>
                            )}
                            <span className="text-xs text-[var(--kognitos-gray-600)] flex-shrink-0">
                              {s.message_count} msg{s.message_count !== 1 ? "s" : ""}
                            </span>
                          </div>
                          {s.preview && (
                            <p className="text-sm text-[var(--kognitos-gray-400)] truncate">{s.preview}</p>
                          )}
                        </div>
                        <div className="flex flex-col items-end flex-shrink-0 gap-0.5">
                          <span className="text-xs text-[var(--kognitos-gray-600)] whitespace-nowrap">{formatDate(s.started_at)}</span>
                          {s.location && <span className="text-[10px] text-[var(--kognitos-gray-600)]">{s.location}</span>}
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Infinite scroll sentinel */}
                <div ref={sentinelRef} className="h-1" />

                {loadingMore && (
                  <div className="flex items-center justify-center py-4">
                    <div className="text-sm text-[var(--kognitos-gray-400)]">Loading more...</div>
                  </div>
                )}

                {!hasMore && sessions.length > 0 && (
                  <div className="flex items-center justify-center py-4">
                    <div className="text-xs text-[var(--kognitos-gray-600)]">
                      Showing all {sessions.length} of {total} session{total !== 1 ? "s" : ""}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Chat detail panel */}
          {selectedSession && (
            <div className="w-1/2 border border-[var(--kognitos-gray-700)] rounded-xl bg-[var(--kognitos-gray-900)] flex flex-col max-h-[calc(100vh-200px)] sticky top-8">
              <div className="flex items-center justify-between p-4 border-b border-[var(--kognitos-gray-700)]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-medium ${selectedSession.lead ? "text-[var(--kognitos-yellow)]" : "text-[var(--kognitos-white)]"}`}>
                      {selectedSession.lead?.email || selectedSession.session.email || "Anonymous"}
                    </h3>
                    {selectedSession.lead && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--kognitos-yellow)]/15 text-[var(--kognitos-yellow)] font-medium">
                        {selectedSession.lead.source.replace("_", " ")}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--kognitos-gray-400)] mt-0.5">
                    {formatDate(selectedSession.session.started_at)}
                    {selectedSession.session.location
                      ? ` -- ${selectedSession.session.location}`
                      : selectedSession.session.ip_address
                        ? ` -- ${selectedSession.session.ip_address}`
                        : ""}
                  </p>
                </div>
                <button onClick={handleCloseDetail} className="p-1.5 rounded-lg hover:bg-[var(--kognitos-gray-800)] text-[var(--kognitos-gray-400)] hover:text-[var(--kognitos-white)] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {loadingDetail ? (
                  <div className="flex items-center justify-center py-10">
                    <div className="text-[var(--kognitos-gray-400)] text-sm">Loading messages...</div>
                  </div>
                ) : selectedSession.messages.length === 0 ? (
                  <div className="text-center py-10 text-sm text-[var(--kognitos-gray-400)]">No messages in this session.</div>
                ) : (
                  selectedSession.messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === "user" ? "bg-[var(--kognitos-gray-800)] text-[var(--kognitos-white)] rounded-tr-md" : "bg-[var(--kognitos-gray-800)]/50 text-[var(--kognitos-gray-200)]"}`}>
                        <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                        <p className="text-[10px] text-[var(--kognitos-gray-600)] mt-1.5">
                          {new Date(msg.created_at).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
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

function StatCard({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? "border-[var(--kognitos-yellow)]/30 bg-[var(--kognitos-yellow)]/5" : "border-[var(--kognitos-gray-700)] bg-[var(--kognitos-gray-900)]"}`}>
      <p className="text-xs text-[var(--kognitos-gray-400)] mb-1">{label}</p>
      <p className={`text-2xl font-semibold ${highlight ? "text-[var(--kognitos-yellow)]" : "text-[var(--kognitos-white)]"}`}>
        {value.toLocaleString()}
      </p>
    </div>
  );
}

function MiniStat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-[var(--kognitos-gray-700)]/50 bg-[var(--kognitos-gray-900)]/50">
      <span className="text-xs text-[var(--kognitos-gray-400)]">{label}</span>
      <span className={`text-sm font-medium ${highlight ? "text-[var(--kognitos-yellow)]" : "text-[var(--kognitos-white)]"}`}>
        {value}
      </span>
    </div>
  );
}
