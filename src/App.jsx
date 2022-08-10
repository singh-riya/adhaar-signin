import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AdhaarWithOTP from "./components/AdhaarWithOTP";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Signin from "./components/Signin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Signin />} />
        <Route path='/verify' element={<AdhaarWithOTP />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      {/* <div>
        <Header />
        <Signin />
        <Footer />
      </div> */}
    </Router>
  );
};

export default App;
