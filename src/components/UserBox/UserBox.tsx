/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 17:29:04
*/
import React, { FC, useEffect } from 'react';
import './UserBox.css';
import { Link } from 'react-router-dom';


interface UserBoxProps {

}


const UserBox: FC<UserBoxProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <Link to='/profil'>
    <div className="UserBox d-flex gap-2 align-items-center">
      <div className="user-picture">
        <img src="/user.jpg" width={40} className='rounded-circle shadow-lg' alt="" />
      </div>
      <div className="user-details d-flex">
        <div className="username">AKPOLI Espero</div>
        <small className="online">En ligne</small>
      </div>
    
    </div>
    </Link>
  );
}

export default UserBox;