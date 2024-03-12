/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 18:57:21
*/
import React, { FC, useEffect, useRef } from 'react';
import './MessageBox.css';
import { Message } from '../../models/Message';
import { useSelector } from 'react-redux';
import { getCurrentChatId, getCurrentUser, getSender } from '../../redux/selectors/selectors';
import { socket } from '../../api/api-socket';


interface MessageBoxProps { }

const MessageBox: FC<MessageBoxProps> = () => {
  const messageInput = useRef<HTMLInputElement>(null);
  const currentUser = useSelector(getCurrentUser)
  const sender = useSelector(getSender)
  const currentChatId = useSelector(getCurrentChatId)

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      // Add any local data fetching logic if needed
    };
    runLocalData();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (messageInput.current) {
      const content = messageInput.current.value;
      if(content !== ""){
        // Add logic to handle the message (e.g., send it to the server)
        const newMessage: Message = {
          chatId: currentChatId,
          type: 'TEXT',
          ownership: currentUser._id,
          sender: sender._id,
          shared: false,
          content: content,
          created_at: new Date()
        }

        socket.emit("message", newMessage)
               
  
        messageInput.current.value = ''; // Clear the input after submitting

      }
    }
  };

  return (
    <div className="MessageBox d-flex gap-2 align-items-center shadow-lg p-1">
      <div className="icon">
        <i className="fa-regular fa-face-smile-wink"></i>
      </div>
      <form className="message-input" onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          className="form-control rounded-pill shadow-lg"
          placeholder="Tapez text ..."
          ref={messageInput}
        />
      </form>
      <div className="icon" onClick={handleSubmit}>
        <i className="fa-regular fa-paper-plane"></i>
      </div>
    </div>
  );
};

export default MessageBox;
