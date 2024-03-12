/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:57:17
*/
import React, { FC, useEffect } from 'react';
import './ContactList.css';


interface ContactListProps {
 
}


const ContactList : FC<ContactListProps> = () =>{

  
    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ContactList page-content">
       
      </div>
  );
}

export default ContactList;