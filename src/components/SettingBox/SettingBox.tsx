/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:47:03
*/
import React, { FC, useEffect } from 'react';
import './SettingBox.css';
import { Link } from 'react-router-dom';


interface SettingBoxProps {
  onHide: () =>void
}


const SettingBox: FC<SettingBoxProps> = ({onHide}) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="SettingBox" onMouseLeave={onHide}>
      <div className="setting-box position-absolute card shadow-lg">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/contacts">
              Contacts
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/profil">
              Profil
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default SettingBox;