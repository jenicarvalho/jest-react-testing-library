import React, { useState } from 'react';

const Button  = () => {

  const [show, setShow ] = useState(false)

  const handleShow = () => {
    setShow(true)
  }

  return (
    <div>
      <button title="clique" onClick={handleShow}>Clique aqui</button>

      {show && <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="sky"/> }
    </div>
  );
}

export default Button;