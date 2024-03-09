/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 15:26:58
*/
import React, { FC, useEffect } from 'react';
import './MessageList.css';
import MessageItem from '../MessageItem/MessageItem';
import Header from '../Header/Header';
import MessageBox from '../MessageBox/MessageBox';


interface MessageListProps {

}


const MessageList: FC<MessageListProps> = () => {


  const messages = [
    {
      "id": 1,
      "owner": true,
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolorem distinctio molestiae? Quod id praesentium fuga, ut numquam ullam, cupiditate in sequi eveniet, laboriosam quibusdam ipsum labore nisi similique voluptatem.",
      "timestamp": "2024-01-01T10:00:00"
    },
    {
      "id": 2,
      "owner": false,
      "content": "Another message content here.",
      "timestamp": "2024-01-02T12:30:00"
    },
    {
      "id": 3,
      "owner": true,
      "content": "Yet another message content.",
      "timestamp": "2024-01-03T15:45:00"
    },
    {
      "id": 4,
      "owner": false,
      "content": "Adding a new message.",
      "timestamp": "2024-01-04T18:20:00"
    },
    {
      "id": 5,
      "owner": true,
      "content": "One more message for good measure.",
      "timestamp": "2024-01-05T21:05:00"
    },
    {
      "id": 6,
      "owner": false,
      "content": "Last message in the list.",
      "timestamp": "2024-01-06T23:50:00"
    },
    {
      "id": 7,
      "owner": true,
      "content": "A new message to display.",
      "timestamp": "2024-01-07T02:15:00"
    },
    {
      "id": 8,
      "owner": false,
      "content": "Yet another message from a different sender.",
      "timestamp": "2024-01-08T04:40:00"
    },
    {
      "id": 9,
      "owner": true,
      "content": "Adding more data to the message list.",
      "timestamp": "2024-01-09T07:25:00"
    },
    {
      "id": 10,
      "owner": false,
      "content": "Last message for now.",
      "timestamp": "2024-01-10T09:50:00"
    }
  ]

  useEffect(() => {
    // window.scrollTo(0,0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <>
      <Header />
      <div className="MessageList page-content-sm p-1" style={{ backgroundImage: `url('/bg.png')` }}>
        {
          messages.map((message) => {
            return <MessageItem
              key={message.id}
              owner={message.owner}
              message={message}
            />
          })
        }
      </div>
      <MessageBox/>
    </>
  );
}

export default MessageList;