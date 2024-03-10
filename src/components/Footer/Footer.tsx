/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 18:41:28
*/
import React, { FC, useEffect } from 'react';
import './Footer.css';


interface FooterProps {
 
}


const Footer : FC<FooterProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Footer d-flex align-items-center p-2 shadow-lg">
         
          <button className="icon btn">
            <i className="fa fa-video"></i>
          </button>

          <button className="icon btn">
            <i className="fa fa-home"></i>
          </button>
         
          <button className="icon btn">
            <i className="fa fa-phone"></i>
          </button>
      </div>
  );
}

export default Footer;