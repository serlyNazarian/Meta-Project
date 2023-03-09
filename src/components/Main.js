import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import ErrorPage from "./ErrorPage";
import Homepage from "./pages/Homepage";
import Nav from "./Nav";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
