import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import "./options.css";

const App: FC<{}> = () => {
  return <p>Options</p>;
};

const root = document.createElement("div");
document.body.appendChild(root);

createRoot(root).render(<App />);
