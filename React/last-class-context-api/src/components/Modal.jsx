import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ name , setShowModal , handleSetPet}) {
    console.log('name' , name)
    const elementReference = useRef(null);


    if (!elementReference.current) {
        elementReference.current = document.createElement("div");
      }
     
      useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elementReference.current);
        return () => modalRoot.removeChild(elementReference.current);
      }, []);
     
      return createPortal(<div>
        <div>
        <h1>Would you like to adopt ? {name}</h1>
       <div className="buttons">
         <button onClick={handleSetPet}>Yes</button>
         <button onClick={() => setShowModal(false)}>No</button>
       </div>
     </div></div>, elementReference.current);
    };
     
    export default Modal;