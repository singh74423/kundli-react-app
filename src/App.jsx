import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "../src/components/pages/UploadPage";
import ChartPage  from "./components/pages/ChartPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
