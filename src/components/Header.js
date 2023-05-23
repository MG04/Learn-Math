import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home.js";
import Profile from "../Pages/Profile";
import Classes from "../Pages/Classes";

const Header = () => {
  return (
    <Router>
      <nav class="navbar  fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
          <a href="#" class="navbar-brand mb-0 h1">
            Εφαρμογή Μαθηματικών
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
          <div
            class="collapse navbar-collapse justify-content-center customnav"
            id="navbarNav"
          >
            <ul class="navbar-nav ">
              <li class="nav-item active">
                <a href="#" class="nav-link active">Προφίλ</a>
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item active">
                <a href="#" class="nav-link active">Μαθήματα</a>
                <Link to="/Profile">Home</Link>
              </li>
              <li class="nav-item active">
                <a href="#" class="nav-link active">Οδηγός</a>
                <Link to="/Classes">Classes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Classes" element={<Classes />} />
      </Routes>
    </Router>
  );
};

export default Header;
