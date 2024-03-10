/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 20:35:44
*/
import React, { FC, useEffect } from 'react';
import './AudioCall.css';


interface AudioCallProps {

}


const AudioCall: FC<AudioCallProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="AudioCall page-content border f-center">
      <div className="AudioCallBox text-center gap-2 align-items-center">
        <div className="user-picture p-3">
          <img src="/user.jpg" width={100} className='rounded-circle shadow-lg' alt="" />
        </div>
        <div className="user-details d-flex">
          <div className="username">AKPOLI Espero</div>
          <small className="">Appel en cours ...</small>
          <small className="">03:00</small>
        </div>
      </div>
    </div>
  );
}

export default AudioCall;