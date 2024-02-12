import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const App: FC<{}> = () => {
  return <p>Popup</p>;
};

const root = document.createElement("div");
document.body.appendChild(root);

createRoot(root).render(<App />);
