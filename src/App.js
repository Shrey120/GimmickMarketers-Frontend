import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import BrandRegistration from "./pages/BrandsRegister";
import InfluencerRegistration from "./pages/InfluencerRegister";
import CaseStudies from "./pages/CaseStudy";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import CampaignsPage from "./pages/Campaigns";
import InfluencerPage from "./pages/Influencers";

function App() {
  return (
    <div className='bg-gradient-to-br from-stone-800 via-slate-900 to-black'>
      {/* Toastify Notifications */}
      <ToastContainer position='top-center' />

      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/brandsRegister'
            element={<BrandRegistration />}
          />
          <Route
            path='/influencerRegister'
            element={<InfluencerRegistration />}
          />
          <Route
            path='/caseStudies'
            element={<CaseStudies />}
          />
          <Route
            path='/services'
            element={<Services />}
          />
          <Route
            path='/about'
            element={<AboutUs />}
          />
          <Route
            path='/campaigns'
            element={<CampaignsPage />}
          />
          <Route
            path='/influencers'
            element={<InfluencerPage />}
          />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
