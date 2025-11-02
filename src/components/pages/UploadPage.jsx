import React from "react";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const navigate = useNavigate();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        localStorage.setItem("kundliData", JSON.stringify(json));
        navigate("/chart");           // 👉 JSON load hone ke baad chart page par jao
      } catch {
        alert("Invalid JSON file!");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="upload-page">
      <h1 className="upload-title">🪐 Kundli Chart Generator</h1>
      <p className="upload-desc">
        Upload your <code>.json</code> file
      </p>

      <div className="upload-btn-container">
        <label className="upload-btn">
          Choose Your' File
          <input type="file" accept=".json" onChange={handleUpload} hidden />
        </label>
      </div>
    </div>
  );
}
