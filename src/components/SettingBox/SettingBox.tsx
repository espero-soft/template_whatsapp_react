/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:47:03
*/
import React, { FC, useEffect } from 'react';
import './SettingBox.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthState, getCurrentUser } from '../../redux/selectors/selectors';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux/actions/actionTypes';


interface SettingBoxProps {
  onHide: () =>void
}


const SettingBox: FC<SettingBoxProps> = ({onHide}) => {


  const isAuth = useSelector(getAuthState)
  const currentUser = useSelector(getCurrentUser)

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  const handleLogout = (event: any) => {
    event.preventDefault()
    dispatch({
      type: LOGOUT,
      payload: null
    })
  }

  return (
    <div className="SettingBox" onTouchCancel={onHide}>
      <div className="setting-box position-absolute card shadow-lg">
        <ul className="list-group">
         
          <li className="list-group-item">
            <Link to="/contacts">
              Contacts
            </Link>
          </li>
          <li className="list-group-item">
            <Link to={"/profil/"+currentUser._id}>
              Profil
            </Link>
          </li>
          {
            isAuth ?
            // logout
              <li className="list-group-item" onClick={handleLogout}>
             
                  Logout
               
              </li>
            :
            <>
              <li className="list-group-item">
                <Link to="/signin">
                  Login
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/signup">
                  Register
                </Link>
              </li>
            </>
          }
        </ul>
      </div>
    </div>
  );
}

export default SettingBox;