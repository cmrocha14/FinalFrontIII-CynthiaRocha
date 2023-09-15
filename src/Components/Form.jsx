/* eslint-disable no-unused-vars */
import { React, useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showOk, setShowOk] = useState(false)
  const [showErr, setShowErr] = useState(false)

  const isEmailValid = (email) => {
  
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return validRegex.test(email);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = name.length >= 6;
    const isEmail = isEmailValid(email);
  
    setShowOk(isNameValid && isEmail);
    setShowErr(!isNameValid || !isEmail);
  };
  
  return (
    <div>
      <form>
        <input type="text" placeholder="Nombre de usuario" onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      { showErr && <h6>Por favor verifique su información nuevamente...</h6> }
      { showOk && <h4>Gracias {name},te contactaremos cuanto antes vía mail.</h4> }
    </div>
  );
};

export default Form;
