import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../pages/Movies";
import MovieDetails from "./../pages/MovieDetails";
import ContactUs from "./../pages/ContactUs";
import NotFound from "../pages/NotFound";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Movies />}></Route>
      <Route path="/moviedetails/:id" element={<MovieDetails />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Router;
