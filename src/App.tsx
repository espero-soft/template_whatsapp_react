import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inbox from './components/Inbox/Inbox';
import MessageList from './components/MessageList/MessageList';
import Login from './components/Login/Login';
import Contacts from './components/Contacts/Contacts';
import Profil from './components/Profil/Profil';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      {/* <div className="container-fluid p-0"> */}
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/login" element={<Login />} />
          <Route path="/message" element={<MessageList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
