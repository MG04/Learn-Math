import { useState } from "react";
import React from "react";

function Profile(props) {
  const [formData, setFormData] = useState(() => {
    const value = JSON.parse(localStorage.getItem("formData"));
    return value || "";
  });

  let localCheck = JSON.parse(localStorage.getItem("setForm"));
  if (localCheck !== null) {
    localCheck = parseInt(localCheck);
  } else {
    localCheck = true;
  }
  const [showForm, setShowForm] = useState(localCheck);

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    localStorage.setItem("setForm", JSON.stringify("false"));
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Creating handlesubmit");
  };

  const gradeCalc = () => {
    const grade = props.score / props.quizesTaken;

    if (grade <= 1.5 || props.score === 0) return "C";
    if (grade <= 3.5) return "B";
    return "A";
  };

  return (
    <div className="container-fluid profile--page">
      <section className="section--style justify-content-center shadow blue">
        <strong className="center">Προφίλ</strong>
        <p className="center"> Δες τι έχεις καταφέρει!</p>
      </section>
      <div className="container profile--container d-flex align-items-center">
        {showForm ? (
          <form className="form--style" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Όνομα
              </label>
              <input
                type="text"
                className="form-control input"
                id="firstName"
                placeholder="Βάλε το όνομα σου!"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="lastName" className="form-label">
                Επίθετο
              </label>
              <input
                type="text"
                className="form-control input"
                id="lastName"
                placeholder="Βάλε το επίθετο σου!"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-warning">
              Υποβολή
            </button>
          </form>
        ) : (
          <div className="container profile--container--content d-flex flex-column">
            <h2 className="">Προσωπικά Στοιχεία</h2>
            <div>
              <span>Όνομα : </span>
              {formData.firstName}
            </div>
            <div>
              <span>Επίθετο : </span>
              {formData.lastName}
            </div>
            <h2>Στατιστικά</h2>
            <div>
              <span>Συνολικοί πόντοι : </span>
              {props.score}
            </div>
            <div>
              <span>Quiz που έχεις ολοκληρώσει : </span>
              {props.quizesTaken}
            </div>
            <div className="red grade--div">
              <span id="grade--span">Βαθμός : </span>
              {gradeCalc()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
