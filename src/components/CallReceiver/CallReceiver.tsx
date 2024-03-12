/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/03/2024 11:28:26
*/
import React, { FC, useEffect, useState } from 'react';
import './CallReceiver.css';
import { useSelector } from 'react-redux';
import {  getSender } from '../../redux/selectors/selectors';
import { defaultImage } from '../../helpers/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { socket } from '../../api/api-socket';
import Peer from 'peerjs';


interface CallReceiverProps {
  newPeer: Peer|null
}


const CallReceiver: FC<CallReceiverProps> = ({newPeer}) => {

  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream>();
  const sender = useSelector(getSender)
  // const currentUser = useSelector(getCurrentUser)
  const callData = useSelector((state: any)=>  state.storage.callData)
  const dispach = useDispatch()

  console.log({callData});
  


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      if(newPeer){
        navigator.mediaDevices.getUserMedia({ video: false, audio: true })
        .then((currentStream) => {
          setStream(currentStream)
          // Gestion des appels rejetés
          socket.on('call-rejected', () => {
            setCallEnded(true);
            // Mettez à jour l'interface utilisateur pour informer l'utilisateur que l'appel a été rejeté
          });

          socket.on('call-accepted', (data) => {
            if(stream){
              const call = newPeer?.call(data.socket, stream);
              call?.on('stream', (userStream) => {
                console.log({userStream});
                
                // Mettez à jour l'interface utilisateur pour afficher le flux audio de l'appelant
              });
      
            }
      
          });

        })
       
    

      }

    }
    runLocalData()
  },[])


  
  // Fonction pour rejeter un appel
  const rejectCall = () => {
    
    setCallEnded(true);
    // Informer l'appelant que l'appel a été rejeté
    socket.emit('reject-call', {
      from: callData.offer,
    });
    dispach({
      type: ADD_TO_STORAGE,
      unique: true,
      key: 'newCall',
      payload: false
    })
  };

  const answerCall = () => {
    setCallAccepted(true);
   
    if(stream){
      const call = newPeer?.call(callData.offer, stream!);
  
      call?.on('stream', (userStream) => {
        console.log({userStream});
        
        // Mettez à jour l'interface utilisateur pour afficher le flux audio de l'appelant
      });

      // Envoyer une réponse à l'appelant
      socket.emit('make-answer', {
        answer: call?.metadata,
        to: callData.offer,
      });
    }

  };

  return (
    <div className="CallReceiver">
      <div className="AudioCallBox text-center gap-2 align-items-center">
        <div className="user-picture p-3">
          <img src={sender.imageUrl || defaultImage} width={100} className='rounded-circle shadow-lg' alt="" />
        </div>
        <div className="user-details d-flex">
          <div className="username">{sender.name}</div>
          <small className="">Appel en cours ...</small>
          {
            callAccepted && <p>Accepté !</p>
          }
          {
            callEnded && <p>Terminé !</p>
          }
          <small className="">03:00</small>
        </div>
        <div className="callAction d-flex gap-2 justify-content-center">
          <button onClick={answerCall} className="icon  btn btn-success rounded-circle">
            <i className="fa fa-phone"></i>
          </button>
          <button onClick={rejectCall} className="icon end btn bg-danger rounded-circle">
            <i className="fa fa-phone"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallReceiver;