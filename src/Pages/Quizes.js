import React from "react";
import quizData from "../quizData.js";
import Quiz from "../components/Quiz";
import Points from "../components/Points";
import arrow from "../arrow-2.svg";

function Quizes(props) {
  const quizes = quizData.map((item) => (
    <Quiz
      key={item.id}
      {...item}
      score={props.score}
      handleScore={props.handleScore}
      quizesTaken={props.quizesTaken}
      handleQuizesTaken={props.handleQuizesTaken}
    />
  ));

  return (
    <div className="container-fluid  quiz--page">
      <section className="section--style justify-content-center shadow container-fluid">
        <strong className="center">Ώρα για Quiz</strong>
        <p className="center">
          {" "}
          Πόσο καλά έκανες εξάσκηση;
          <br /> Κάνε quiz για τις ενότητες που έχεις διαβάσει, και κέρδισε πόντους!
        </p>
        <div className="row d-flex align-items-center">
          <div className="col-6 d-flex justify-content-end">
            <span className="arrow arrow--span">Οι πόντοι σου!</span>
            <img className="arrow" src={arrow} alt="arrow" />
          </div>
          <div className="col-5 d-flex ">
            <Points score={props.score} quizesTaken={props.quizesTaken} />
          </div>
        </div>
      </section>
      <div className="container">{quizes}</div>
    </div>
  );
}

export default Quizes;
