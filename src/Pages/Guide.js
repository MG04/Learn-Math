import React from "react";
import firstPng from "../pngs/1.png";
import secondPng from "../pngs/2.png";
import thirdPng from "../pngs/3.png";
import fourthPng from "../pngs/4.png";
import fifthPng from "../pngs/5.png";
import arrowLeft from "../arrow-left.svg";
import arrowRight from "../arrow-right.svg";

function Guide() {
  return (
    <div className="container-fluid guide--page">
      <section className="section--style section--red justify-content-center shadow">
        <strong className="center">Εχγειρίδιο</strong>
        <p className="center">Βήματα λειτουργίας της εφαρμογής!</p>
      </section>
      <div className="container d-flex flex-column guide--steps--container">
        <p className="d-flex align-self-start">
          Άνοιξε τις διαφάνειες κάθε ενότητας πατώντας το κουμπί
        </p>
        <img
          className="guide--png shadow-sm d-flex align-self-start"
          src={firstPng}
          alt="arrow"
        />
        <img
          className="guide--arrow d-flex align-self-center"
          src={arrowRight}
          alt="arrow"
        />
      </div>
      <div className="container d-flex flex-column guide--steps--container">
        <p className="d-flex align-self-end">
          Όταν τελειώσεις το διάβασμα, τσέκαρε το κουτάκι για να πάρεις 5
          πόντους!
        </p>
        <img
          className="guide--png shadow-sm d-flex align-self-end"
          src={secondPng}
          alt="arrow"
        />
        <img
          className="guide--arrow d-flex align-self-center"
          src={arrowLeft}
          alt="arrow"
        />
      </div>
      <div className="container d-flex flex-column guide--steps--container">
        <p className="d-flex align-self-start">
          Μετά πήγαινε στην σελίδα των Quiz για να δοκιμάσεις τις γνώσεις σου
          και να κερδίσεις πόντους! Μπορείς να επαναλάβεις τα Quiz όσες φορές
          θέλεις. Πρόσεχε όμως, αν κάνεις πολλά quiz ίσως αλλάξει ο τελικός
          βαθμός σου!
        </p>
        <img
          className="guide--png shadow-sm d-flex align-self-start"
          src={thirdPng}
          alt="arrow"
        />
        <img
          className="guide--arrow d-flex align-self-center d-flex align-self-center"
          src={arrowRight}
          alt="arrow"
        />
      </div>
      <div className="container d-flex flex-column guide--steps--container">
        <p className="d-flex align-self-end">
          Στην σελίδα &#34;Προφίλ&#34;, συμπλήρωσε το όνομα και το επίθετο σου.
        </p>
        <img
          className="guide--png shadow-sm d-flex align-self-end"
          src={fourthPng}
          alt="arrow"
        />
        <img
          className="guide--arrow d-flex align-self-center"
          src={arrowLeft}
          alt="arrow"
        />
      </div>
      <div className="container d-flex flex-column guide--steps--container">
        <p className="d-flex align-self-start">
          Τώρα μπορείς να δεις τα στατιστικά σου κάθε φορά που μπαίνεις στο προφίλ σου!
        </p>
        <img
          className="guide--png shadow-sm d-flex align-self-start"
          src={fifthPng}
          alt="arrow"
        />
      </div>
    </div>
  );
}

export default Guide;
