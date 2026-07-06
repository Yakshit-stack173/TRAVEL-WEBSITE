import React from "react";
import Navbar from "./navbar/Navbar";
import Login from "./navbar/Login";
import Hero from "./navbar/Hero";
import Main from "./navbar/Main";
import RootLayout from "./Layout/RootLayout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index element={
            <>
            <Navbar />
            <Hero />
            <Main />
            </>
            } />
          <Route path="Login" element={<Login />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
