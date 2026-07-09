import React from "react";
import Navbar from "./navbar/Navbar";
import Login from "./navbar/Login";
import Hero from "./navbar/Hero";
import Main from "./navbar/Main";
import Review from "./navbar/Review";
import Bookings from "./navbar/Bookings";
import Destination from "./navbar/Destination";
import Video from "./navbar/video";
import Sign from "./navbar/Sign";
import Book from "./navbar/Book";
import Flight from "./navbar/Flight";
import Sus from "./navbar/Sus";
import Footer from "./navbar/Footer";
import RootLayout from "./Layout/RootLayout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Flights from "./navbar/Flights";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <>
                <Navbar />
                <Hero />
                <Main />
                <Destination />
                <Bookings />
                <Review />
                <Flights />
                <Sus />
                <Footer />
              </>
            }
          />
          <Route path="Login" element={<Login />} />
          <Route path="Video" element={<Video />} />
          <Route path="Sign" element={<Sign />} />
          <Route path="Book" element={<Book />} />
          <Route path="Flight" element={<Flight />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
