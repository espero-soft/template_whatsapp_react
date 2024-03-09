/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:39:23
*/
import React, { FC, useEffect } from 'react';
import './MessageItem.css';


interface MessageItemProps {
 owner: boolean
 message: any
}


const MessageItem : FC<MessageItemProps> = ({owner, message}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className={"MessageItem p-1 shadow-lg rounded "+(owner ? 'owner' : '')}>
          <div className="message">
          {message.content}
          </div>
          <div className="metadata d-flex">
          <small>envoyé le {new Date(message.timestamp).toLocaleString()}</small>
          </div>
      </div>
  );
}

export default MessageItem;