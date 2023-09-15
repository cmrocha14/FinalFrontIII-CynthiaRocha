
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parámetro dinámico de la URL deberán hacer un fetch a un usuario en específico
  const { dentistState, dentistDispatch } = useContext(ContextGlobal);
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dentistDispatch({ type: 'SET_DENTIST', payload: data }));
  }, [dentistDispatch, url]);

  const dentist = dentistState?.dentist;

  return (
    <>
      <h1>Detalle dentista {dentist.id}</h1>
      {/* Aquí deberán renderizar la información en detalle de un usuario en específico */}
      <div className="card">
        <img src={`https://via.placeholder.com/150/FF5733/FFFFFF?text=${dentist.name}`} alt={dentist.name} />
        <div className="card-info">
          <h2>Nombre: {dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Tel: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </div>
      </div>
      {/* Deberán mostrar el nombre, email, teléfono y sitio web por cada usuario en específico */}
    </>
  );
};

export default Detail;
