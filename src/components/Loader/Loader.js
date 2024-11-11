import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-bar-container">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="loader-bar" style={{ animationDelay: `${index * 0.1}s` }} />
        ))}
      </div>
      <p className="loader-text">Fetching...</p>
    </div>
  );
};

export default Loader;
