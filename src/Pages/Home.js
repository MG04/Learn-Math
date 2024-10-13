import React from "react";
import sun from "../pngs/misc-1.svg";
import phone from "../pngs/misc-58.svg";
import star from "../pngs/misc-51.svg";
import dots from "../pngs/misc-6.svg";

function Home() {
  return (
    <div className="container-fluid yellow d-flex flex-column align-items-center">
      <div className="container home--div--style d-flex justify-content-center">
        {" "}
        Καλώς ήρθες στην εφαρμογή Μαθηματικών Α&#39; Γυμνασίου!
      </div>
      <div className="container home--div--style d-flex justify-content-center orange shadow align-items-center">
        <img className="home--doodle" src={sun} alt="arrow" />
        Διάβασε κάθε ενότητα στην σελίδα των μαθημάτων!
      </div>
      <div className="container home--div--style d-flex justify-content-center green shadow align-items-center">
        Κάνε quiz και δοκίμασε τις γνώσεις σου!
        <img className="home--doodle" src={dots} alt="arrow" />
      </div>
      <div className="container home--div--style d-flex justify-content-center blue shadow align-items-center">
        <img className="home--doodle" src={star} alt="arrow" />
        Δες τα στατιστικά σου!
      </div>
      <div className="container home--div--style d-flex justify-content-center section--red shadow align-items-center">
        Αν χρειαστείς βοήθεια, πήγαινε στο εγχειρίδιο της σελίδας!
        <img className="home--doodle" src={phone} alt="arrow" />
      </div>
      <div className="footer">
        <p>
          {" "}
          ΜΑΡΙΟΣ ΓΚΟΥΡΑ - ice20390041<br></br>
        </p>
      </div>
    </div>
  );
}

export default Home;
