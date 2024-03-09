/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:03:54
*/
import React, { FC, useEffect } from 'react';
import './Inbox.css';
import InboxItem from '../InboxItem/InboxItem';
import Header from '../Header/Header';


interface InboxProps {
 
}


const Inbox : FC<InboxProps> = () =>{



    useEffect(() => {
      // window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <>
     <Header />
      <div className="Inbox page-content">
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
          <InboxItem/>
        
      </div>
    </>
  );
}

export default Inbox;