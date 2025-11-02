import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
   // path adjust if needed

export default function ChartPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("kundliData");
    if (!stored) return navigate("/");
    setData(JSON.parse(stored));
  }, [navigate]);

  if (!data) return null;
  const houses = data.bhava_chart_info || [];

  return (
    <div className="chart-page">
      <header className="header-bar">
        <button className="back-btn" onClick={() => navigate("/")}>← Back</button>
        <h2 className="title">🪐 Kundli Chart</h2>
      </header>

      <div className="chart-center">
        <div className="chart">
          <svg viewBox="0 0 200 200" className="chart-lines">
            <rect x="2" y="2" width="196" height="196" stroke="#000" strokeWidth="2" fill="#fff" />
            <line x1="0" y1="100" x2="100" y2="0" stroke="#000" strokeWidth="2" />
            <line x1="100" y1="0" x2="200" y2="100" stroke="#000" strokeWidth="2" />
            <line x1="200" y1="100" x2="100" y2="200" stroke="#000" strokeWidth="2" />
            <line x1="100" y1="200" x2="0" y2="100" stroke="#000" strokeWidth="2" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="#000" strokeWidth="2" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="#000" strokeWidth="2" />
          </svg>

          {houses.map((h, i) => (
            <div key={i} className={`house house-${i + 1}`}>
              <div className="house-num">{i + 1}</div>
              <div className="planets">{h[4]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
