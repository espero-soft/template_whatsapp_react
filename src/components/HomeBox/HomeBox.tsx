/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 17:57:17
*/
import React, { FC, useEffect } from 'react';
import './HomeBox.css';


interface HomeBoxProps {
 
}


const HomeBox : FC<HomeBoxProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="HomeBox d-flex gap-2 align-items-center">
    <strong>WhatsApp</strong>
  </div>
  );
}

export default HomeBox;