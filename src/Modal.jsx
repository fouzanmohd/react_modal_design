import React from "react";
import mainImg from "./p1.jpg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div onClick={onClose} className="overlay">
      <div onClick={stopPropagation} className="modal-container">
        <img src={mainImg} alt="img" />
        <div className="modal-right">
          <p onClick={onClose} className="close-btn">
            {" "}
            x
          </p>
          <div className="content">
            <p>Do you want to</p>
            <h1>Learn React</h1>
            <p>development online?</p>
          </div>
          <div className="btn-container">
            <button className="btn-primary">
              <span className="bold">Yes</span>, I would like to!
            </button>
            <button className="btn-outline">
              <span className="bold">No</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
