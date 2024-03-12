/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:03:54
*/
import React, { FC, useEffect, useState } from 'react';
import './Inbox.css';
import InboxItem from '../InboxItem/InboxItem';
import { Link } from 'react-router-dom';
import { Chat } from '../../models/Chat';
import Loading from '../Loading/Loading';
import { getChats } from '../../api/api-chat';


interface InboxProps {

}


const Inbox: FC<InboxProps> = () => {

  const [chats, setChats] = useState<Chat[]>([])
 
  const [isLoading, setIsLoading] = useState<boolean>(true)
  // const inboxData: any[] = []
  // [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     time: '07:00',
  //     imageUrl: 'https://i.pravatar.cc/50?img=1',
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Smith',
  //     message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     time: '08:15',
  //     imageUrl: 'https://i.pravatar.cc/50?img=2',
  //   },
  //   {
  //     id: 3,
  //     name: 'Alice Johnson',
  //     message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  //     time: '10:30',
  //     imageUrl: 'https://i.pravatar.cc/50?img=3',
  //   },
  //   {
  //     id: 4,
  //     name: 'Bob Brown',
  //     message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  //     time: '12:45',
  //     imageUrl: 'https://i.pravatar.cc/50?img=4',
  //   },
  //   {
  //     id: 5,
  //     name: 'Eva White',
  //     message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     time: '15:00',
  //     imageUrl: 'https://i.pravatar.cc/50?img=5',
  //   },
  //   {
  //     id: 6,
  //     name: 'David Johnson',
  //     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     time: '17:30',
  //     imageUrl: 'https://i.pravatar.cc/50?img=6',
  //   },
  //   {
  //     id: 7,
  //     name: 'Sophie Miller',
  //     message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     time: '18:45',
  //     imageUrl: 'https://i.pravatar.cc/50?img=7',
  //   },
  //   {
  //     id: 8,
  //     name: 'Chris Taylor',
  //     message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  //     time: '20:15',
  //     imageUrl: 'https://i.pravatar.cc/50?img=8',
  //   },
  //   {
  //     id: 9,
  //     name: 'Olivia Davis',
  //     message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  //     time: '22:30',
  //     imageUrl: 'https://i.pravatar.cc/50?img=9',
  //   },
  //   {
  //     id: 10,
  //     name: 'Michael Johnson',
  //     message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     time: '23:45',
  //     imageUrl: 'https://i.pravatar.cc/50?img=10',
  //   },
  // ];


  useEffect(() => {
    // window.scrollTo(0,0)
    const runLocalData = async () => {
      const data = await getChats()
      console.log(data);
      if(data.isSuccess){
        setChats(data.results)
        setIsLoading(false)
      }
    }
    runLocalData()
  },[])

  return (
    <>
      <div className="Inbox page-content">
        {
          isLoading ?
          <Loading/>
          :
          chats.length ?
            chats.map((chat: Chat) => (<InboxItem key={chat._id} chat={chat} />))
            :
            <div className='p-2'>
              <p>
              Vous n'avez aucun chat en cours.
              </p>
            </div>
        }

        <Link to={"/contacts"} className="icon contact-link shadow-lg">
          <i className="fa fa-message"></i>
        </Link>

      </div>
    </>
  );
}

export default Inbox;