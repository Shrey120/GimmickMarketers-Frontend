import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import BrandRegistration from "./pages/BrandsRegister";

function App() {
  return (
    <div className='bg-gradient-to-br from-stone-800 via-slate-900 to-black'>
      {/* Toastify Notifications */}
      <ToastContainer position='top-center' />

      <div className='p-6'>
        <Header />
      </div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/brandsRegister'
            element={<BrandRegistration />}
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
