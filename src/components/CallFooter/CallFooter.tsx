/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 20:56:00
*/
import React, { FC, useEffect } from 'react';
import './CallFooter.css';
import { Link, useLocation } from 'react-router-dom';


interface CallFooterProps {

}


const CallFooter: FC<CallFooterProps> = () => {

  const location = useLocation()


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  const handleGoBackClick = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Traitez le cas où il n'y a pas de page précédente
      // Peut-être rediriger vers la page d'accueil, ou effectuer une autre action.
      console.warn("Aucune page précédente sur le même domaine.");
    }
  };


  return (
    <div className="CallFooter d-flex justify-content-center gap-2 align-items-center p-2 shadow-lg">

      <button className="icon end btn bg-danger rounded-circle">
        <i className="fa fa-volume-high"></i>
      </button>
      {
        location.pathname === '/video-call' ?
          <Link to={'/audio-call'}>
            <button className="icon end btn bg-danger rounded-circle">
              <i className="fa fa-video-slash"></i>
            </button>
          </Link>
          :
          <Link to={'/video-call'}>
            <button className="icon end btn bg-danger rounded-circle">
              <i className="fa fa-video"></i>
            </button>
          </Link>
      }
      <button className="icon end btn bg-danger rounded-circle">
        <i className="fa fa-microphone-slash"></i>
      </button>

      <button onClick={handleGoBackClick} className="icon end btn bg-danger rounded-circle">
        <i className="fa fa-phone"></i>
      </button>

    </div>
  );
}

export default CallFooter;