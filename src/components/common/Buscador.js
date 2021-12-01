import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaCards from "./ListaCards";

const Buscador = () => {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");
  const [arreglo, setArreglo] = useState([]);
  const URL =
  'https://newsapi.org/v2/top-headlines?country='+ pais +'&category='+ categoria +'&apiKey=1315b9c7933e46c0beb8bf0d3d31ab1e';

  const consultarAPI = async () => {
    try{
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
      setArreglo(dato.articles);
      console.log(URL);
      console.log(arreglo);
    }catch(error){
      console.log(error);
    }
  };



  return (
    <>
    <section className="container mb-5">
      <article className="row d-flex align-items-end justify-content-center">
        <h4 className="display-6 fs-4 mt-4 col-sm-12 col-md-4">
          Buscador de categorias:
        </h4>
        <Form.Select
          className="col-sm-12 col-md-6 w-50 h-75"
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccione una categoria:</option>
          <option value="general">General</option>
          <option value="ciencia">Ciencia</option>
          <option value="entretenimiento">Entretenimiento</option>
          <option value="negocios">Negocios</option>
          <option value="salud">Salud</option>
          <option value="deportes">Deportes</option>
          <option value="tecnologia">Tecnologia</option>
        </Form.Select>
      </article>
      <article className="row d-flex align-items-end justify-content-center">
        <h4 className="display-6 fs-4 mt-4 col-sm-12 col-md-4">
          Selecione el Pais:
        </h4>
        <Form.Select
          className="col-sm-12 col-md-6 w-50 h-75"
          onChange={(e) => setPais(e.target.value)}
        >
          <option value="">Seleccione el pais:</option>
          <option value="ar">Argentina</option>
          <option value="br">Brasil</option>
          <option value="ch">China</option>
          <option value="fr">Francia</option>
          <option value="gr">Alemania</option>
          <option value="us">Estados unidos</option>
        </Form.Select>
        
      </article>
      <div className='text-end my-4'>

      <Button variant='dark' onClick={consultarAPI}>Buscar</Button>
      </div>
    </section>
      <article className='d-flex mt-5 justify-content-center'>
        <ListaCards arreglo={arreglo}></ListaCards>
      </article>
    </>
  );
};

export default Buscador;
