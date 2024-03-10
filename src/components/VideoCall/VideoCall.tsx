/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 20:35:44
*/
import React, { FC, useEffect } from 'react';
import './VideoCall.css';


interface VideoCallProps {
 
}


const VideoCall : FC<VideoCallProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="VideoCall page-content border f-center" style={{backgroundImage: "url('/avatar/2.png')"}}>
    <div className="VideoCallBox text-center gap-2 align-items-center">
      {/* <div className="user-picture p-3">
        <img src="/avatar/2.png" width={100} className='rounded-circle shadow-lg' alt="" />
      </div> */}
      {/* <div className="user-details d-flex">
        <div className="username">AKPOLI Espero</div>
        <small className="">Appel en cours ...</small>
        <small className="">03:00</small>
      </div> */}
       <div className="Video-small" draggable={true} style={{backgroundImage: "url('/avatar/1.png')"}}>

       </div>

    </div>
  </div>
  );
}

export default VideoCall;