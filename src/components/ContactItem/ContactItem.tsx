/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:57:52
*/
import React, { FC, useEffect } from 'react';
import './ContactItem.css';
import { Link } from 'react-router-dom';


interface ContactItemProps {
  contact: {
    name: string
    status: string
    imageUrl: string
  }
}


const ContactItem: FC<ContactItemProps> = ({ contact }) => {



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
  return (

    <div className="ContactItem p-1 d-flex gap-2 px-2 align-items-center">
      <div className="user-picture">
        <img src={imageUrl} width={40} className='rounded-circle shadow-lg' alt="" />
      </div>
      <Link to='/profil' className='flex-grow-1'>
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
          <Link to={"/audio-call"}>
            <button className='btn'>
              <i className="fa fa-phone"></i>
            </button>

          </Link>
        </div>
        <div className="video-call">
          <Link to={"/video-call"}>
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