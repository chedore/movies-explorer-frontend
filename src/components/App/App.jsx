import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <Routes>
        <Route path="/" />
        <Route path="/signin" />
        <Route path="/signup" />
        <Route path="/profile" />
        <Route path="/saved-movies" />
        <Route path="/movies" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
