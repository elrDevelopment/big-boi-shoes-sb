import React from "react";
import "./styles/style.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StoreFront from "./pages/store-front"


export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StoreFront />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
