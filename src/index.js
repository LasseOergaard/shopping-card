/* Libraries */
import React from "react";
import ReactDOM from "react-dom/client";
import '@fortawesome/fontawesome-free/js/all'

/* CSS */
import "./styles/general.css"
import "./styles/navigation.css"
import "./styles/home.css"
import "./styles/footer.css"
import "./styles/EX89.css"
import "./styles/itemPreview.css"
import "./styles/cart.css"
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
