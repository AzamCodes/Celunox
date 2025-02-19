<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HalalBusiness from "./components/HalalBusiness";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/halal-business" element={<HalalBusiness />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HalalBusiness from "./components/HalalBusiness";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/halal-business" element={<HalalBusiness />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> 982f3be9f052ba6f8bb0a82dc09fb0cb7cc77b0c
