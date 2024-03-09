/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 18:57:21
*/
import React, { FC, useEffect } from 'react';
import './MessageBox.css';


interface MessageBoxProps {
 
}


const MessageBox : FC<MessageBoxProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="MessageBox d-flex gap-2 align-items-center shadow-lg  p-1">
          <div className="icon">
          <i className="fa-regular fa-face-smile-wink"></i>
          </div>
          <div className="message-input">
            <input type="text" name="message" className='form-control rounded-pill shadow-lg'
            placeholder='Tapez text ...'
            />
          </div>
          <div className="icon">
          <i className="fa-regular fa-paper-plane"></i>
          </div>
      </div>
  );
}

export default MessageBox;