import React from "react";

function FetchErrorCard({
  title = "Fetch failed.",
  message = "Networks fail. Engineers adapt. Try the direct link below.",
  href,
  hrefLabel = "Open link"
}) {
  return (
    <div className="insight-stage">
      <div className="insight-card insight-card--error" role="alert">
        <div className="insight-card-top">
          <div className="insight-orb insight-orb--error" aria-hidden="true">
            <span className="brand-mark brand-mark--mini">M</span>
          </div>
          <div className="insight-meta">
            <span className="insight-label insight-label--error">Error</span>
            <h2 className="insight-title">{title}</h2>
            <p className="insight-text">{message}</p>
            {href ? (
              <a className="insight-link" href={href} target="_blank" rel="noreferrer">
                {hrefLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchErrorCard;
