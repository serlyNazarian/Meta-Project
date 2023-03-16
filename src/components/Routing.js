import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import ErrorPage from "./ErrorPage";
import Homepage from "./pages/Homepage";
import Nav from "./Nav";
import Confirmation from "./pages/Confirmation";


export default function Routing() {
    return (
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Homepage />} />
            <Route path="/booking" element={<BookingPage />} />
            {/* <Route path="/order" element={<Order />} /> */}
            <Route path="*" element={<ErrorPage />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
    );
}