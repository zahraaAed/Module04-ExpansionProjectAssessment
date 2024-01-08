import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ProductDetail from "./componenets/productDetail.js";
import RegistrationForm from "./pages/Registration.js";
import SigninForm from "./pages/Login.js";
import Add from "./pages/AdminDashboard.js";
import Handeledit from "./componenets/HandelEdit.js";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/productDetail/:productId" element={<ProductDetail/>}/>
          <Route path="/" element={<RegistrationForm/>}/>
          <Route path="/login" element={<SigninForm/>}/>
          <Route path="/admin" element={<Add/>}/>
          <Route path="/Edit/:productId" element={<Handeledit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
