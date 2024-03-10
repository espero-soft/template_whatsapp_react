/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 21:14:13
*/
import React, { FC, useEffect } from 'react';
import './Profil.css';
import ProfilContent from '../ProfilContent/ProfilContent';


interface ProfilProps {
 
}


const Profil : FC<ProfilProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <>
          <ProfilContent/>
      </>
  );
}

export default Profil;