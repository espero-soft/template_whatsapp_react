/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 20:57:17
*/
import React, { FC, useEffect } from 'react';
import './ContactList.css';
import ContactItem from '../ContactItem/ContactItem';


interface ContactListProps {
 
}


const ContactList : FC<ContactListProps> = () =>{

  const contactData = [
    {
      id: 1,
      name: 'AKPOLI Espero',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=1',
    },
    {
      id: 2,
      name: 'John Doe',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=2',
    },
    {
      id: 3,
      name: 'Jane Smith',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=3',
    },
    {
      id: 4,
      name: 'Bob Brown',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=4',
    },
    {
      id: 5,
      name: 'Eva White',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=5',
    },
    {
      id: 6,
      name: 'David Johnson',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=6',
    },
    {
      id: 7,
      name: 'Sophie Miller',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=7',
    },
    {
      id: 8,
      name: 'Chris Taylor',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=8',
    },
    {
      id: 9,
      name: 'Olivia Davis',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=9',
    },
    {
      id: 10,
      name: 'Michael Johnson',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=10',
    },
    // Ajout de 10 données supplémentaires
    {
      id: 11,
      name: 'Alice Brown',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=11',
    },
    {
      id: 12,
      name: 'Charlie Smith',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=12',
    },
    {
      id: 13,
      name: 'Emma White',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=13',
    },
    {
      id: 14,
      name: 'Frank Taylor',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=14',
    },
    {
      id: 15,
      name: 'Grace Davis',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=15',
    },
    {
      id: 16,
      name: 'Harry Miller',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=16',
    },
    {
      id: 17,
      name: 'Isabella Johnson',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=17',
    },
    {
      id: 18,
      name: 'Jack White',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=18',
    },
    {
      id: 19,
      name: 'Katie Smith',
      status: 'En ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=19',
    },
    {
      id: 20,
      name: 'Leo Davis',
      status: 'Hors ligne',
      imageUrl: 'https://i.pravatar.cc/50?img=20',
    },
  ];

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ContactList page-content">
        {
          contactData.map((contact)=> (<ContactItem key={contact.id} contact={contact} />))
        }
      </div>
  );
}

export default ContactList;