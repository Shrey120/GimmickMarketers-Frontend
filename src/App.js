import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./shared/Header";

function App() {
  return (
    <div className='bg-gradient-to-br from-stone-800 via-slate-900 to-black'>
      <div className='p-6 '>
        <Header />
      </div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
