/* eslint-disable no-unused-vars */
import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Querés más información?</h2>
      <p>Suscribite para recibir todas nuestras novedades</p>
      <Form/>
    </div>
  )
}

export default Contact