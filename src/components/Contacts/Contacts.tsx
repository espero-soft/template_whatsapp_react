/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:50:04
*/
import React, { FC, useEffect } from 'react';
import './Contacts.css';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';


interface ContactsProps {
 
}


const Contacts : FC<ContactsProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <>
          <Header/>
          <ContactList/>
      </>
  );
}

export default Contacts;