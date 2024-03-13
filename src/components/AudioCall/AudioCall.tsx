/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/03/2024 20:35:44
*/
import React, { FC, useEffect, useRef, useState } from 'react';
import './AudioCall.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser, getSender } from '../../redux/selectors/selectors';
import { defaultImage } from '../../helpers/utils';
import { makeSound, stopSound } from '../../api/api-audio';
import Peer from 'peerjs';
// import { connectToPeer } from '../../api/api-peerjs';
import { socket } from '../../api/api-socket';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';


interface AudioCallProps {
  newPeer: Peer | null
  received?: boolean
}


const AudioCall: FC<AudioCallProps> = ({ newPeer, received }) => {

  const { senderId } = useParams()
  const sender = useSelector(getSender)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [answer, setAnswer] = useState<string>('')
  const currentUser = useSelector(getCurrentUser)
  const [callerStream, setCallerStream] = useState<MediaStream>();
  const [callDuration, setCallDuration] = useState<number>(0);
  const [callEnded, setCallEnded] = useState<boolean>(false)
  const [callAccepted, setCallAccepted] = useState<boolean>(false)
  const callData = useSelector((state: any) => state.storage.callData)
  const dispach = useDispatch()


  useEffect(() => {
    const runLocalData = async () => {
      try {
        // console.log({ name: sender.name });
        navigator.mediaDevices.getUserMedia({ video: false, audio: true })
          .then((currentStream) => {
            setCallerStream(currentStream)
            makeSound('audio-call');
            if (!received) {
              // send call 
              let callUserData = {
                to: sender._id,
                called: sender,
                offer: currentUser._id,
              }
              socket.emit("call-user", callUserData)
            } else {
              // receive call
            }
            socket.on("call-rejected", () => {
              console.log('call-rejected');
              setCallEnded(true);
              if (callDuration === 0) {
                setAnswer('Refusé !')
              } else {
                setAnswer('Coupé !')

              }

              stopSound();
              dispach({
                type: ADD_TO_STORAGE,
                unique: true,
                key: 'newCall',
                payload: false
              })

              // Obtenez le flux du microphone

              // Arrêtez le flux du microphone
              currentStream?.getAudioTracks().forEach(track => {
                track.stop();
              });

              // Assurez-vous de supprimer les références au flux
              currentStream?.getTracks().forEach(track => {
                track.stop();
              });
            })


            socket.on('call-accepted', (data) => {
              const call = newPeer?.call(data.socket, currentStream);
              call?.on('stream', (userStream) => {
                console.log({ userStream });

                // Mettez à jour l'interface utilisateur pour afficher le flux audio de l'appelant
              });



            });

            newPeer?.on('call', (call) => {
              call.answer(currentStream);
              call.on('stream', (userStream) => {
                console.log({ userStream });
                setCallerStream(userStream)
                if (audioRef.current) {
                  audioRef.current.srcObject = userStream
                }
                setAnswer('Communication en cours !')
                stopSound();

                // Mettez à jour l'interface utilisateur pour afficher le flux audio de l'appelant
              });
            })


          })
        return () => {
          stopSound();
        };
      } catch (error) {
        console.error('Erreur lors de la lecture audio :', error);
      }
    };
    runLocalData()
  }, [senderId])

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (callerStream) {
      timer = setInterval(() => {
        setCallDuration((prevDuration) => prevDuration + 1);
      }, 1000);
      if (callEnded) {
        clearInterval(timer)
      }
    }
    return () => clearInterval(timer);
  }, [callerStream, callEnded]);

  // Fonction pour rejeter un appel
  const rejectCall = () => {

    setCallEnded(true);
    stopSound();
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
    stopSound();

    const call = newPeer?.call(callData.offer, callerStream!);

    call?.on('stream', (userStream) => {
      setCallerStream(userStream);
      if (audioRef.current) {
        audioRef.current.srcObject = userStream
      }

      // Mettez à jour l'interface utilisateur pour afficher le flux audio de l'appelant
    });

    // Envoyer une réponse à l'appelant
    socket.emit('make-answer', {
      answer: call?.metadata,
      to: callData.offer,
    });


  };




  return (
    <div className="AudioCall page-content border f-center">
      <div className="AudioCallBox text-center gap-2 align-items-center">
        <div className="user-picture p-3">
          <img src={sender.imageUrl || defaultImage}
            width={100}
            height={100}
            className='rounded-circle shadow-lg' alt="" />
        </div>
        <div className="user-details d-flex">
          <div className="username">{sender.name}</div>
          {
            !received ?
              <small className="">Appel en cours ...</small>
              :
              <>
                <small className="">Appel entrant ...</small>
                <div className="callAction d-flex gap-2 justify-content-center">
                  {
                    ! callAccepted &&
                    <button onClick={answerCall} className="icon  btn btn-success rounded-circle">
                      <i className="fa fa-phone"></i>
                    </button>
                  }
                  <button onClick={rejectCall} className="icon end btn bg-danger rounded-circle">
                    <i className="fa fa-phone"></i>
                  </button>
                </div>
              </>
          }
          {
            callDuration !== 0 &&
            <small className="">
              {`${Math.floor(callDuration / 60) < 10 ? '0' : ''}${Math.floor(callDuration / 60)}:${callDuration % 60}`}
            </small>
          }


          {callAccepted && <small className="">Communication en cours</small>}
          {answer && <small className="">{answer}</small>}


          {!callEnded && callerStream && (
            <audio autoPlay ref={audioRef} ></audio>

          )}
        </div>
      </div>
    </div>
  );
}

export default AudioCall;