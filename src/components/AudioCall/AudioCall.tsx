/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 20:35:44
*/
import React, { FC, useEffect } from 'react';
import './AudioCall.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  getSender } from '../../redux/selectors/selectors';
import { defaultImage } from '../../helpers/utils';
import { makeSound, stopSound } from '../../api/api-audio';
import Peer from 'peerjs';
import { connectToPeer } from '../../api/api-peerjs';


interface AudioCallProps {
  newPeer: Peer|null
}


const AudioCall: FC<AudioCallProps> = ({newPeer}) => {

  const {senderId} = useParams()
  const sender = useSelector(getSender)

  

  useEffect(() => {
    const runLocalData = async () => {
      try {
        // console.log({ name: sender.name });
        makeSound('audio-call');

        if(newPeer){
          connectToPeer(newPeer, sender._id)
        }
       
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
        </div>
      </div>
    </div>
  );
}

export default AudioCall;