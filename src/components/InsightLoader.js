import React, { useEffect, useMemo, useState } from "react";

const INSIGHTS = [
  "Idempotency turns retries into safety: same request, same result, no double charges.",
  "Prefer timeouts everywhere. A request without a deadline is a resource leak waiting to happen.",
  "Backpressure beats brute force. Let queues absorb bursts, not your database.",
  "Know your tail latency. P99 is what users notice, not your average.",
  "Use structured logs. Strings are for humans; fields are for searching incidents.",
  "Cache invalidation is hard. Prefer short TTL and versioned keys over heroic eviction logic.",
  "CAP is not a slogan. Decide which failures you tolerate and document system behavior.",
  "Linux basics win incidents: check disk, CPU, memory, and sockets before guessing.",
  "Java performance is often IO. Avoid blocking calls in hot paths and watch thread pools.",
  "Indexes speed reads but slow writes. Measure the tradeoff and choose intentionally."
];

function pickInsight() {
  return INSIGHTS[Math.floor(Math.random() * INSIGHTS.length)];
}

function InsightLoader({ phase = "loading", label = "Fetching", insight }) {
  const fixedInsight = useMemo(() => insight || pickInsight(), [insight]);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (phase !== "success") {
      setExiting(false);
      return;
    }

    const timeoutId = window.setTimeout(() => setExiting(true), 520);
    return () => window.clearTimeout(timeoutId);
  }, [phase]);

  return (
    <div
      className={[
        "insight-stage",
        "insight-loader",
        phase === "success" ? "insight-loader--success" : "",
        exiting ? "insight-loader--exiting" : ""
      ].join(" ")}
      role="status"
      aria-live="polite"
    >
      <div className="insight-card">
        <div className="insight-card-top">
          <div className="insight-orb" aria-hidden="true">
            <span className="brand-mark brand-mark--mini">M</span>
          </div>
          <div className="insight-meta">
            <span className="insight-label">{label}</span>
            <p className="insight-text">{fixedInsight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightLoader;
