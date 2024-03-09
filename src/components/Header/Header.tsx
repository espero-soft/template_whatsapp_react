/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 14:46:04
*/
import React, { FC, useEffect, useState } from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import UserBox from '../UserBox/UserBox';
import SettingBox from '../SettingBox/SettingBox';


interface HeaderProps {

}


const Header: FC<HeaderProps> = () => {

  const location = useLocation()
  const [setting, setSetting] = useState<boolean>(false)

  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })
  console.log(location);


  const handleGoBackClick = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Traitez le cas où il n'y a pas de page précédente
      // Peut-être rediriger vers la page d'accueil, ou effectuer une autre action.
      console.warn("Aucune page précédente sur le même domaine.");
    }
  };

  return (
    <div className="Header">
      <Navbar className='p-1 shadow-lg bg-primary' bg="" expand="lg" >
        <Navbar.Brand className='p-0' style={{ color: 'white' }}>
          {
            location.pathname === "/" ?
              <div className="HomeBox d-flex gap-2 align-items-center">
                <strong>WhatsApp</strong>
              </div>
              :
              location.pathname === "/message" ?
                <UserBox />
                :
                location.pathname === "/login" ?
                  <div className="HomeBox d-flex gap-2 align-items-center">
                    <strong>Login</strong>
                  </div>
                  :
                location.pathname === "/profil" ?
                  <div className="HomeBox d-flex gap-2 align-items-center">
                    <strong>Profil</strong>
                  </div>
                  :
                location.pathname === "/contacts" ?
                  <div className="HomeBox d-flex gap-2 align-items-center">
                    <strong>Contacts</strong>
                  </div>
                  :
                  null
          }
        </Navbar.Brand>

        {
          location.pathname !== "/" &&
          <button onClick={handleGoBackClick} className='btn' style={{ color: 'white' }}>
            <i className="fa fa-arrow-left"></i>
          </button>
        }
        {
          location.pathname === "/" &&
          <div className="position-relative setting">
            <button onClick={()=>setSetting(!setting)} className='btn' style={{ color: 'white' }}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
            { setting && <SettingBox
            onHide={()=>setSetting(false)}
            /> }
          </div>
        }

      </Navbar>
    </div>
  );
}

export default Header;