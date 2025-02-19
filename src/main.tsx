import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import "./index.css";
import CurrentText from "./pages/app/currentText/page.tsx";
import AppHome from "./pages/app/index.tsx";
import LayoutApp from "./pages/app/layout.tsx";
import NewText from "./pages/app/new/NewText.tsx";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<h1>404</h1>} />
      // App
      <Route element={<LayoutApp />}>
        <Route index path="/app" element={<AppHome />} />
        <Route path="/app/new" element={<NewText />} />
        <Route path={`/app/:id`} element={<CurrentText />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
