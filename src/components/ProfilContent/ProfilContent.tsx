/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 21:16:14
*/
import React, { FC, useEffect } from 'react';
import './ProfilContent.css';


interface ProfilContentProps {

}


const ProfilContent: FC<ProfilContentProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="ProfilContent page-content">
      <div className="profil-cover p-3">
        <div className="profil-picture d-flex justify-content-center ">
          <div className="position-relative">
            <img src="/user.jpg" width={150} className='rounded-circle' alt="" />

            <div className="bg-primary  rounded-circle position-absolute upload-picture bottom-0">
              <div className="icon d-flex p-1 ">
                <i className="fa-solid fa-camera"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="profil-details p-2">
        <div className="profil-details-item p-1 d-flex align-items-center gap-2">
          <div className="icon">
            <i className="fa fa-user"></i>
          </div>
          <div className="name flex-grow-1">Merci</div>
          <div className="icon">
            <i className="fa fa-pencil"></i>
          </div>
        </div>
        <div className="profil-details-item p-1 d-flex align-items-center gap-2">
          <div className="icon">
            <i className="fa fa-circle-info"></i>
          </div>
          <div className="name flex-grow-1">Info</div>
          <div className="icon">
            <i className="fa fa-pencil"></i>
          </div>
        </div>
        <div className="profil-details-item p-1 d-flex align-items-center gap-2">
          <div className="icon">
            <i className="fa fa-phone"></i>

          </div>
          <div className="name flex-grow-1">Merci</div>
          <div className="icon">
            <i className="fa fa-pencil"></i>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilContent;