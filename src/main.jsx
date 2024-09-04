import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import StartView from "./views/StartView.jsx";
import QuestionsView from "./views/QuestionsView.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<StartView />} />
          <Route path="/questions" element={<QuestionsView />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
);
