/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 17:28:41
*/
import React, { FC, useEffect } from 'react';
import './UserBow.css';


interface UserBowProps {
 
}


const UserBow : FC<UserBowProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="UserBow">
          UserBow Component
      </div>
  );
}

export default UserBow;