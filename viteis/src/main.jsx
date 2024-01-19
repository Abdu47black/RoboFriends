import React from "react";
import ReactDOM from "react-dom/client";
import Cardlist from "/src/Cardlist.jsx";
import Abdul from "./card.jsx";
import { robots } from "/src/robots.js";
import "/src/card.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cardlist robots={robots} />
   
  </React.StrictMode>
);
