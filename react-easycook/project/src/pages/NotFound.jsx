import React, { useState, ChangeEvent, FC } from 'react'
import logo from '../images/easycook1-nobg.png'

export default function NotFound(){


  const [error, seterror] = useState("404 Not Found");
  const [errorMessage, setErrorMessage] = useState("Não foi possível encontrar o caminho especificado.")

  return (
    <div id='login-page'>
      <div className='login-forms'>
        <img src={logo} alt="Easy Cook logo" className='blend-mode imagem-centralizada' />
        <h1>{error}</h1>
        <h2 style={{textAlign: "justify"}}>{errorMessage}</h2>
      </div>
    </div>
  )

}