/*
  Author: Mudey Formation
  Website: https://mudey.fr/
  App Name: E-commerce with React.Js
  Created At: 09/03/2024 15:03:54
*/
import React, { FC, useEffect } from 'react';
import './InboxItem.css';
import { Chat } from '../../models/Chat';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../../redux/selectors/selectors';
import { defaultImage } from '../../helpers/utils';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import ContactItem from '../ContactItem/ContactItem';

interface InboxItemProps {
  chat: Chat;
}

const InboxItem: FC<InboxItemProps> = ({ chat }) => {
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Vous pouvez ajouter du code logique ici si nécessaire
  }, [currentUser]);



  const participantOtherThanCurrentUser = chat.participants.find((p) => p._id !== currentUser._id);
  const ownership = chat.participants.find((p) => p._id === currentUser._id);
  const user = participantOtherThanCurrentUser || chat.participants[0];
  const contact = {
    _id: user?._id!,
    name: user?.fullname!,
    status: 'En ligne',
    imageUrl: user?.profile?.picture || defaultImage,
  }
  
  dispatch({
    type: ADD_TO_STORAGE,
    unique: true,
    key: 'ownership',
    payload: ownership,
  });


  return (
    <ContactItem contact={contact} />
  );
};

export default InboxItem;
