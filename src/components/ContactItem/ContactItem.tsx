/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:57:52
*/
import React, { FC, useEffect } from 'react';
import './ContactItem.css';


interface ContactItemProps {

}


const ContactItem: FC<ContactItemProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="ContactItem p-1 d-flex gap-2 align-items-center">
      <div className="user-picture">
        <img src="/user.jpg" width={40} className='rounded-circle shadow-lg' alt="" />
      </div>
      <div className="user-details d-flex">
        <div className="username">AKPOLI Espero</div>
        <small className="online">En ligne</small>
      </div>
    </div>
  );
}

export default ContactItem;