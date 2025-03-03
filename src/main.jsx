import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import HalalBusiness from "./components/HalalBusiness.jsx";
import Layout from "./components/Layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/halal-business" element={<HalalBusiness />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
