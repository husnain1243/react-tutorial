import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services"
import { Blog } from "../pages/Blog"
import { ContactUs } from "../pages/ContactUs"

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
          Home
        </Route>
        <Route path="/services" element={<Services/>}>
          Services
        </Route>
        <Route path="/blog" element={<Blog/>}>
          Blog
        </Route>
        <Route path="/contactus" element={<ContactUs/>}>
          Contact Us
        </Route>
      </Routes>
    </div>
  );
};
