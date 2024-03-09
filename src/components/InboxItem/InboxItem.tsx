/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:03:54
*/
import React, { FC, useEffect } from 'react';
import './InboxItem.css';
import { Link } from 'react-router-dom';


interface InboxItemProps {

}


const InboxItem: FC<InboxItemProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="InboxItem">
      <Link to="/message" className="d-flex gap-2">
        <div className="Inbox-Picture">
          <img src="/user.jpg" width={50} className='rounded-circle shadow-lg' alt="" />
        </div>
        <div className="Inbox-Details">
          <div className="author">
            <strong>AKPOLI Espero</strong>
          </div>
          <div className="last-message d-flex justify-content-between">
            <div className='message'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore aliquid recusandae odit facilis repudiandae deserunt eveniet ratione nam nemo quis? Perspiciatis vel maxime ab praesentium deleniti, fugit dicta voluptatibus.
            </div>
            <div className="time text-bold">07:00</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default InboxItem;