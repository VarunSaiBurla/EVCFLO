import Header from "./components/header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from "./pages/home-page";
import CompanyPage from "./pages/company-page";
import InsightsPage from "./pages/insights-page";
import SupportPage from "./pages/support-page";
import DashboardPage from "./pages/dashboard-page";
import ResearchPage from "./pages/research-page";
import ApiPage from "./pages/api-page";



function App() {

  return (
    <>
      <Router>
      <Header></Header>

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/business-dashboard" element={<DashboardPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/evcflo-api" element={<ApiPage />} />
        <Route path="/*" element={<ApiPage />} />



      </Routes>

    </Router>
    </>
    
    
  )
}

export default App
