/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 15:04:59
*/
import React, { FC, useEffect } from 'react';
import './Register.css';


interface RegisterProps {
 
}


const Register : FC<RegisterProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Register">
          Register Component
      </div>
  );
}

export default Register;