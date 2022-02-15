import React from "react";
import "../../App.css";
import CardsNot from "./CardsNot";
const ListaCards = (props) => {
  return (
    <>
      <section className="row justify-content-center">
        {props.arreglo.length === 0 ? (
          <h5 className="display-6 fs-3 ">No hay noticias de ese tema</h5>
        ) : (
          props.arreglo.map((articulo, index) => (
            <CardsNot key={index} articulo={articulo}></CardsNot>
          ))
        )}
      </section>
    </>
  );
};

export default ListaCards;
