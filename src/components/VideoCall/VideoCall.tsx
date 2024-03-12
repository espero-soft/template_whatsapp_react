/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 20:35:44
*/
import React, { FC, useEffect } from 'react';
import './VideoCall.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOwner, getSender } from '../../redux/selectors/selectors';
import { makeSound, stopSound } from '../../api/api-audio';
import { defaultImage } from '../../helpers/utils';
import Peer from 'peerjs';


interface VideoCallProps {
  newPeer: Peer|null
}


const VideoCall : FC<VideoCallProps> = ({newPeer}) =>{

  const {senderId} = useParams()

  const sender = useSelector(getSender)

  const ownership = useSelector(getOwner)


  console.log({newPeer});
  
 

  useEffect(() => {
    const runLocalData = async () => {
      try {
        console.log({ name: sender.name });
        makeSound('video-call');

        // Nettoyez les ressources lors du démontage du composant
        return () => {
          stopSound();
        };
      } catch (error) {
        console.error('Erreur lors de la lecture audio :', error);
      }
    };
    runLocalData()
  },[senderId])

  return (
    <div className="VideoCall page-content border f-center" style={{backgroundImage: `url('${sender.imageUrl || defaultImage}')`}}>
    <div className="VideoCallBox text-center gap-2 align-items-center">
      {/* <div className="user-picture p-3">
        <img src="/avatar/2.png" width={100} className='rounded-circle shadow-lg' alt="" />
      </div> */}
      {/* <div className="user-details d-flex">
        <div className="username">AKPOLI Espero</div>
        <small className="">Appel en cours ...</small>
        <small className="">03:00</small>
      </div> */}
       <div className="Video-small" draggable={true} style={{backgroundImage: `url('${ownership?.profile?.picture || defaultImage}')`}}>

       </div>

    </div>
  </div>
  );
}

export default VideoCall;