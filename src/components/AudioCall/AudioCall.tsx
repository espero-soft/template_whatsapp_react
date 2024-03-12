/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 20:35:44
*/
import React, { FC, useEffect, useState } from 'react';
import './AudioCall.css';
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  getCurrentUser, getSender } from '../../redux/selectors/selectors';
import { defaultImage } from '../../helpers/utils';
import { makeSound, stopSound } from '../../api/api-audio';
import Peer from 'peerjs';
// import { connectToPeer } from '../../api/api-peerjs';
import { socket } from '../../api/api-socket';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';


interface AudioCallProps {
  newPeer: Peer|null
}


const AudioCall: FC<AudioCallProps> = ({newPeer}) => {

  const {senderId} = useParams()
  const sender = useSelector(getSender)
  const [answer, setAnswer] = useState<string>('')
  const currentUser = useSelector(getCurrentUser)
  const dispach = useDispatch()
  

  useEffect(() => {
    const runLocalData = async () => {
      try {
        // console.log({ name: sender.name });
        navigator.mediaDevices.getUserMedia({ video: false, audio: true })
      .then((currentStream) => {
        console.log({currentStream});
        
        makeSound('audio-call');
        socket.emit("call-user", {
          to: sender._id,
          called: sender,
          offer: currentUser._id,
        })
        socket.on("call-rejected", ()=>{
          console.log('call-rejected');
          setAnswer('Refusé !')
          setTimeout(()=>{
            window.history.back();
          }, 2000)
          stopSound();
          dispach({
            type: ADD_TO_STORAGE,
            unique: true,
            key: 'newCall',
            payload: false
          })
        })
      
        newPeer?.on('call', (call)=>{
          call.answer(currentStream);
          call.on('stream', (userStream) => {
            console.log({userStream});
            
            // Mettez à jour l'interface utilisateur pour afficher le flux audio de l'appelant
          });
        })
        

      })
        
        // if(newPeer){
        //   connectToPeer(newPeer, sender._id)
        // }
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
    <div className="AudioCall page-content border f-center">
      <div className="AudioCallBox text-center gap-2 align-items-center">
        <div className="user-picture p-3">
          <img src={sender.imageUrl || defaultImage} width={100} className='rounded-circle shadow-lg' alt="" />
        </div>
        <div className="user-details d-flex">
          <div className="username">{sender.name}</div>
          <small className="">Appel en cours ...</small>
          <small className="">03:00</small>
          {
            answer && <small className="">{answer}</small>
          }
        </div>
      </div>
    </div>
  );
}

export default AudioCall;