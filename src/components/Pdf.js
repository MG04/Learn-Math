import React, { useState} from "react";

function Pdf(props) {
  const [shown, setShown] = useState(false);
  const [triggerMessage, setTriggerMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const localCheck =
  JSON.parse(localStorage.getItem(`checkbox ${props.id}`)) === "true";
  
  const [isChecked, setIsChecked] = useState(localCheck);
  
  const handleOnChange = (e) => {
    setIsChecked(e.target.checked);
    
    if (e.target.checked) {
      props.handleScoreOnChecked(); // Add 5 points
      setTriggerMessage(true);
      setShowAlert(true);
      localStorage.setItem(`checkbox ${props.id}`, JSON.stringify("true"));
    } else {
      props.handleScoreOnUnchecked(); // Subtract 5 points
      setTriggerMessage(true);
      setShowAlert(false);
      localStorage.removeItem(`checkbox ${props.id}`);
    }
  };
  
  
  const toggle = () => {
    setShown((prevState) => !prevState);
  };
  
  return (
    <div className="pdf--container--style shadow container">
    {triggerMessage ? (
      showAlert ? (
        <div
        className="alert alert-success alert-dismissible shadow pdf--alert fixed-top  "
        role="alert"
        >
        <div className="alert--text">Πήρες 5 πόντους!</div>
        <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        />
        </div>
        ) : (
          <div
          className="alert alert-danger alert-dismissible shadow pdf--alert fixed-top"
          role="alert"
          >
          <div className="alert--text">Σου αφαιρέθηκαν 5 πόντοι!</div>
          <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          />
          </div>
          )
          ) : (
            ""
            )}
            <h1 className="h1--style center">Ενότητα {props.id}</h1>
            
            <button onClick={toggle} className="shadow-sm button--style">
            Ενότητα {props.id}
            </button>
            {shown && (
              <object data={props.pdf} type="application/pdf" className="pdf">
              {" "}
              alt : <a href={props.pdf}>class pdf</a>{" "}
              </object>
              )}
              {!shown && <p className="p--style">{props.info}</p>}
              
              <div className="form-check center">
              <input
              className="pdfChecked form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              value={props.id}
              checked={isChecked}
              onChange={handleOnChange}
              />
              <label
              className="form-check-label input--label"
              htmlFor="flexCheckDefault"
              >
              Διάβασα την ενότητα!
              </label>
              </div>
              </div>
              );
            }
            
            export default Pdf;
            
            