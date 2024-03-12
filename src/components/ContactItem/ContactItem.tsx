/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:57:52
*/
import React, { FC, useEffect } from 'react';
import './ContactItem.css';
import { Link, useNavigate } from 'react-router-dom';
import { getChat } from '../../api/api-chat';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';


interface ContactItemProps {
  contact: {
    _id: string
    name: string
    status: string
    imageUrl: string
  }
}


const ContactItem: FC<ContactItemProps> = ({ contact }) => {

  const navigate = useNavigate()
  const dispach = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  const {
    name,
    status,
    imageUrl,
  } = contact



  const handleGoToMessage = async () => {
    const data = await getChat(contact._id!)
    
    if(data.isSuccess){
      navigate('/message/'+data.result._id)
    }
  }
  const handleSaveSender = async () => {
    dispach({
      type: ADD_TO_STORAGE,
      unique: true,
      key: 'sender',
      payload: contact
    })
  }

  return (

    <div onClick={handleSaveSender} className="ContactItem p-1 d-flex gap-2 px-2 align-items-center">
      <div className="user-picture">
        <img src={imageUrl} 
        width={40} 
        height={40}
        className='rounded-circle shadow-lg' alt="" />
      </div>
      <Link to={'/profil/' + contact._id} className='flex-grow-1'>
        <div className="user-details d-flex">
          <div className="username">{name}</div>
          {
            status === "En ligne" ?
              <small className="online">{status}</small>
              :
              <small className="offline"> {status} </small>
          }
        </div>

      </Link>
      <div className="user-call d-flex gap-3">
        <div className="audio-call">

          <button className='btn' onClick={handleGoToMessage}>
            <i className="fa fa-message"></i>
          </button>

        </div>
        <div className="audio-call">
          <Link to={"/audio-call/" + contact._id}>
            <button className='btn'>
              <i className="fa fa-phone"></i>
            </button>

          </Link>
        </div>
        <div className="video-call">
          <Link to={"/video-call/" + contact._id}>
            <button className='btn'>
              <i className="fa fa-video"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default ContactItem;