/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:03:54
*/
import React, { FC, useEffect } from 'react';
import './InboxItem.css';
import { useNavigate } from 'react-router-dom';
import { Chat } from '../../models/Chat';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/selectors/selectors';
import { defaultImage } from '../../helpers/utils';
import moment from 'moment';
import { User } from '../../models/User';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';


interface InboxItemProps {
  chat: Chat
}


const InboxItem: FC<InboxItemProps> = ({ chat }) => {

  const currentUser = useSelector(getCurrentUser)

  const navigate = useNavigate()
  const dispach = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  }, [currentUser])

  const handleGoToMessage = async (user: User) => {
    const contact = {
      _id: user._id,
      name: user.fullname,
      status: "En ligne",
      imageUrl: user.profile.picture,
    }

    dispach({
      type: ADD_TO_STORAGE,
      unique: true,
      key: 'sender',
      payload: contact
    })
    navigate('/message/' + chat._id)

  }

  let user = chat.participants.find(p => p._id !== currentUser._id)

  
  console.log({ user, p:chat.participants });


  if (!user) {
    user = chat.participants[0]
  }

  return (
    <div className="InboxItem">
      <div onClick={() => handleGoToMessage(user!)} className="d-flex gap-2">
        <div className="Inbox-Picture">
          <img src={user.profile.picture || defaultImage} 
          width={40} 
          height={40}
          className='rounded-circle shadow-lg' alt="" />
        </div>
        <div className="Inbox-Details">
          <div className="author">
            <strong>{user.fullname}</strong>
          </div>
          <div className="last-lastMessage d-flex justify-content-between">
            <div className='lastMessage'>
              {chat?.lastMessage?.content}
            </div>
            <div className="time text-bold">{moment(chat.created_at).fromNow()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxItem;