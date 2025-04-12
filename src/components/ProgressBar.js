// src/components/ProgressBar.js
import React from "react";
import "./ProgressBar.css";

function ProgressBar({ current, total }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {Math.round(percentage)}%
      </div>
    </div>
  );
}

export default ProgressBar;
