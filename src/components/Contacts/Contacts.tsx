/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:50:04
*/
import React, { FC, useEffect, useState } from 'react';
import './Contacts.css';
import { getDatas } from '../../api/api-entity';
import { User } from '../../models/User';
import ContactItem from '../ContactItem/ContactItem';
import { defaultImage } from '../../helpers/utils';


interface ContactsProps {
 
}


const Contacts : FC<ContactsProps> = () =>{

  const [users, setUsers] = useState<Partial<User>[]|null>(null)

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
        const data = await getDatas('user')
        if(data.isSuccess){
          setUsers(data.results?.map((item: Partial<User>) =>{
            return {
              _id: item._id,
              name: item.fullname,
              status: 'En ligne',
              imageUrl: item?.profile?.picture || defaultImage,
            }
          }))
        }
      }
      runLocalData()
    },[])

  return (
    <div className="ContactList page-content">
    {
      users?.map((user: any)=> (<ContactItem key={user._id} contact={user} />))
    }
  </div>
  );
}

export default Contacts;