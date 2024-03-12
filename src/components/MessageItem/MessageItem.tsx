/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:39:23
*/
import React, { FC, useEffect } from 'react';
import './MessageItem.css';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/selectors/selectors';


interface MessageItemProps {
 message: any
}


const MessageItem : FC<MessageItemProps> = ({ message}) =>{

  const currentUser = useSelector(getCurrentUser)


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
      }
      runLocalData()
    })

    const owner = currentUser._id !== message.sender

  return (
      <div className={"MessageItem p-1 shadow-lg rounded "+(owner ? 'owner' : '')}>
          <div className="message">
          {message.content}
          </div>
          <div className="metadata d-flex">
          <small>envoyé le {moment(message.created_at).fromNow()}</small>
          </div>
      </div>
  );
}

export default MessageItem;