/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:03:54
*/
import React, { FC, useEffect } from 'react';
import './InboxItem.css';
import { Link } from 'react-router-dom';


interface InboxItemProps {
  inbox: {
    name: string 
    message: string 
    time: string 
    imageUrl: string
  }
}


const InboxItem: FC<InboxItemProps> = ({inbox}) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  const {name, message, time, imageUrl} = inbox

  return (
    <div className="InboxItem">
      <Link to="/message" className="d-flex gap-2">
        <div className="Inbox-Picture">
          <img src={imageUrl} width={50} className='rounded-circle shadow-lg' alt="" />
        </div>
        <div className="Inbox-Details">
          <div className="author">
            <strong>{name}</strong>
          </div>
          <div className="last-message d-flex justify-content-between">
            <div className='message'>
              {message}
            </div>
            <div className="time text-bold">{time}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default InboxItem;