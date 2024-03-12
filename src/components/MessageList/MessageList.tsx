/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:26:58
*/
import React, { FC, useEffect, useState } from 'react';
import './MessageList.css';
import MessageItem from '../MessageItem/MessageItem';
import { useParams } from 'react-router-dom';
import { getMessage } from '../../api/api-chat';
import { Message } from '../../models/Message';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { socket } from '../../api/api-socket';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/selectors/selectors';
import { makeSound } from '../../api/api-audio';

interface MessageListProps { }

const MessageList: FC<MessageListProps> = () => {
  const { chatId } = useParams();
  const currentUser = useSelector(getCurrentUser);
  const [messages, setMessages] = useState<Message[]>([]);
  const dispatch = useDispatch();

  const updateScroll = () => {
    setTimeout(() => {
      const messageListElement = document.querySelector('.MessageList');
      if (messageListElement) {
        messageListElement.scrollTop = messageListElement.scrollHeight;
      }
    }, 100);
  };

  useEffect(() => {
    updateScroll();
    socket.emit('initUserId', currentUser._id);

    socket.on('newMessage', (message: Message) => {
      if (chatId === message.chatId) {
        console.log({message});
        setMessages((prevMessages) => [...prevMessages, message]);
        updateScroll();
        if(currentUser._id !== message.ownership){
          makeSound('success')
        }
      }
    });

    return () => {
      // Cleanup socket listeners on component unmount
      socket.off('newMessage');
    };

  }, [chatId, messages?.length]);

  useEffect(() => {
    const runLocalData = async () => {
      if (chatId) {
        const data = await getMessage(chatId);
        setMessages(data.results);
        dispatch({
          type: ADD_TO_STORAGE,
          unique: true,
          key: 'currentChatId',
          payload: chatId,
        });
      }
    };
    runLocalData();
  }, [chatId, dispatch]);



  return (
    <div className="MessageList page-content-sm p-1" style={{ backgroundImage: `url('/bg.png')` }}>
      {messages?.map((message) => (
        <MessageItem key={message._id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
