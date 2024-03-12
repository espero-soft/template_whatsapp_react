/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/03/2024 11:28:26
*/
import React, { FC, useEffect } from 'react';
import './CallReceiver.css';
import { useSelector } from 'react-redux';
import { getSender } from '../../redux/selectors/selectors';
import { defaultImage } from '../../helpers/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';


interface CallReceiverProps {

}


const CallReceiver: FC<CallReceiverProps> = () => {

  const sender = useSelector(getSender)
  const dispach = useDispatch()


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  const handleEnd = () =>{
    dispach({
      type: ADD_TO_STORAGE,
      unique: true,
      key: 'newCall',
      payload: false
    })
  }

  return (
    <div className="CallReceiver">
      <div className="AudioCallBox text-center gap-2 align-items-center">
        <div className="user-picture p-3">
          <img src={sender.imageUrl || defaultImage} width={100} className='rounded-circle shadow-lg' alt="" />
        </div>
        <div className="user-details d-flex">
          <div className="username">{sender.name}</div>
          <small className="">Appel en cours ...</small>
          <small className="">03:00</small>
        </div>
        <div className="callAction d-flex gap-2 justify-content-center">
          <button className="icon  btn btn-success rounded-circle">
            <i className="fa fa-phone"></i>
          </button>
          <button onClick={handleEnd} className="icon end btn bg-danger rounded-circle">
            <i className="fa fa-phone"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallReceiver;