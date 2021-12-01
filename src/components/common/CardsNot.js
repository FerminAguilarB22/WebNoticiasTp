import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardsNot = (props) => {
  return (
    <div className="col-sm-12 col-md-5 my-5">
      <Card.Img
        variant="top"
        className="img-fluid"
        src={props.articulo.urlToImage}
      />
      <Card.Body>
        <Card.Title>{props.articulo.author}</Card.Title>
        <section>
          <h6>{props.articulo.title}</h6>
          <p>{props.articulo.description}</p>
          <p className="text-end">Fuente: "{props.articulo.source.name}"</p>
        </section>
        <div className='text-end'>
          <Link to="/error" className="btn btn-dark  mt-4">
            Leer mas
          </Link>
        </div>
      </Card.Body>
    </div>
  );
};

export default CardsNot;
