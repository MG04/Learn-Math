import { useState } from "react";
import React from "react";

function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shown, setShown] = useState(false);
  const [tempScore, setTempScore] = useState(0);
  const [isCorrectShow, setIsCorrectShow] = useState(false);
  const [triggerMessage, setTriggerMessage] = useState(false);

  const handleAnswerButtonClick = (Correct) => {
    if (Correct === true) {
      props.handleScore();
      setTempScore((prevScore) => prevScore + 1);
      setIsCorrectShow(true);
      setTriggerMessage(true);
    } else {
      setIsCorrectShow(false);
      setTriggerMessage(true);
    }

    if (currentQuestion + 1 < props.class.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowScore(true);
      alert(`Ολοκλήρωσες το quiz του κεφαλαίου ${props.id}!`);
      props.handleQuizesTaken();
    }
  };

  const handleShownClick = () => {
    setShown((prevShown) => !prevShown);
    setTriggerMessage(false);
  };
  return (
    <div className="quiz--container container">
      <div className="button--container">
        <button
          onClick={handleShownClick}
          className="button--style quiz--button shadow-sm"
        >
          Ενότητα {props.id}
        </button>
      </div>
      {triggerMessage ? (
        isCorrectShow ? (
          <div className="center">
            <div
              className="alert alert-success alert-dismissible shadow-sm"
              role="alert"
            >
              <div>Η απάντηση σου ήταν σωστή!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
          </div>
        ) : (
          <div className="center">
            <div
              className="alert alert-danger alert-dismissible shadow-sm"
              role="alert"
            >
              <div>Η απάντηση σου ήταν λάθος!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
          </div>
        )
      ) : (
        <div />
      )}
      {shown ? (
        showScore ? (
          <div className="score--section  quiz--container--questions container shadow">
            <h2>
              Απάντησες {tempScore} από τις {props.class.length} ερωτήσεις σωστά!
            </h2>
          </div>
        ) : (
          <div className=" quiz--container--questions container shadow">
            <h1 className="center classNum">Ενότητα {props.id}</h1>
            <div className="question--section">
              <h2 className="center">Ερώτηση {props.class[currentQuestion].id}</h2>
              <p className="center">
                {props.class[currentQuestion].questionText}
              </p>
            </div>
            <div className=" d-grid gap-2">
              {props.class[currentQuestion].answers.map((answer) => (
                <button
                  key={answer.id}
                  className="center btn btn-lg"
                  onClick={() => handleAnswerButtonClick(answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className=" quiz--container--after" />
      )}
    </div>
  );
}

export default Quiz;
