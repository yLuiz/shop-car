import React from "react";
import { useSelector } from "react-redux";

export default function Message() {

  const toggleMessageValue = useSelector(state => state.layout.showMessage);

  return (
   <>
    {
      toggleMessageValue ?  
      <div className="container mt-4">
        <div className="alert alert-success w-5" role="alert">
          Carro adicionado com sucesso!
        </div>
      </div> : null
    }
   </>
  );
}