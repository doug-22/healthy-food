import React from "react";

import "./styles.scss";


export default function Modal({id = "modal", onClose = () => {}}) {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose()
  }

  const resultRegister = JSON.parse((localStorage.getItem("DATA_REGISTER")));

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container-modal">
        <button className="modal-close" onClick={onClose}/>
        <div className="content-modal">
          <h1>😃🎊Welcome!!😃🎊</h1>
          <h3>{resultRegister.name}</h3>
        </div>
      </div>
    </div>
  );
}