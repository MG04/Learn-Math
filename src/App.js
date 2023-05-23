import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Classes from "./Pages/Classes";
import Quiz from "./Pages/Quizes";
import Guide from "./Pages/Guide";

function App() {
  let localScore = JSON.parse(localStorage.getItem("score"));

  if (localScore !== null) {
    localScore = parseInt(localScore);
  } else {
    localScore = 0;
  }
  const [score, setScore] = useState(localScore);
  let localQuizesNumber = JSON.parse(localStorage.getItem("quizNum"));
  if (localQuizesNumber !== null) {
    localQuizesNumber = parseInt(localQuizesNumber);
  } else {
    localQuizesNumber = 0;
  }

  const [quizesTaken, setQuizesTaken] = useState(localQuizesNumber);

  const handleScore = useCallback(() => {
    setScore((prevScore) => prevScore + 1);
  }, []);

  const handleScoreOnChecked = () => {
    setScore((prevScore) => prevScore + 5);
  };
  const handleScoreOnUnchecked = () => {
    setScore(prevScore => prevScore - 5);
  };

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const handleQuizesTaken = () => {
    setQuizesTaken((prevQuizes) => prevQuizes + 1);
  };

  useEffect(() => {
    localStorage.setItem("quizNum", JSON.stringify(quizesTaken));
  }, [quizesTaken]);

  return (
    <div className="App" >
      <Router>
        <nav className="navbar navbar--style fixed-top navbar-expand-sm navbar-light bg-light shadow">
          <div className="container">
            <Link
              className="navbar-brand mb-0 h1 home--button" to="/learn-math-app"
            >
              Εφαρμογή Μαθηματικών
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center customnav"
              id="navbarNav"
            >
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <Link className="nav-link color" to="/classes">
                    Μαθήματα
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link color" to="/quiz">
                    Quiz
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link color" to="/profile">
                    Προφίλ
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link color" to="/guide">
                    Εγχειρίδιο
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-math-app" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile score={score} quizesTaken={quizesTaken} np />}
          />
          <Route
            path="/classes"
            element={
              <Classes
                score={score}
                handleScoreOnChecked={handleScoreOnChecked}
                handleScoreOnUnchecked={handleScoreOnUnchecked}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                quizesTaken={quizesTaken}
                score={score}
                handleScore={handleScore}
                handleQuizesTaken={handleQuizesTaken}
              />
            }
          />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;


