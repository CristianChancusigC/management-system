import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManagementPage from "./pages/ManagementPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import HomePage from "./pages/HomePgae";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NoFoundPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
