/* Libraries */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import Home from "./components/home";
import Shop from "./components/shop";
import About from "./components/about";
import ItemPreview from "./components/itemPreview";
import Navigation from "./components/navigation";

/* CSS */
import "./styles/general.css"
import "./styles/navigation.css"
import "./styles/home.css"
import "./styles/footer.css"
import "./styles/EX89.css"
import "./styles/itemPreview.css"
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ItemPreview />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
