import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inbox from './components/Inbox/Inbox';
import MessageList from './components/MessageList/MessageList';
import Login from './components/Login/Login';
import Contacts from './components/Contacts/Contacts';
import Profil from './components/Profil/ProfilComp';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Header from './components/Header/Header';
import VerifyCode from './components/VerifyCode/VerifyCode';
import VerifyEmail from './components/VerifyEmail/VerifyEmail';
import ResetPassword from './components/ResetPassword/ResetPassword';
import AuthSuccess from './components/AuthSuccess/AuthSuccess';
import PrivateRoute from './guard/PrivateRoute/PrivateRoute';
import NotificationComponent from './components/NotificationComponent/NotificationComponent';
import MessageBox from './components/MessageBox/MessageBox';
import AudioCall from './components/AudioCall/AudioCall';
import VideoCall from './components/VideoCall/VideoCall';
import CallFooter from './components/CallFooter/CallFooter';
import { initSocketIo, socket } from './api/api-socket';
import { useSelector } from 'react-redux';
import { getCurrentUser, getNewCall } from './redux/selectors/selectors';
import { initPeer } from './api/api-peerjs';
import Peer from 'peerjs';
import { ADD_TO_STORAGE } from './redux/actions/actionTypes';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {

  const currentUser = useSelector(getCurrentUser);
  const newCall = useSelector(getNewCall);
  const [newPeer, setNewPeer] = useState<Peer|null>(null)
  const dispach = useDispatch()

  useEffect(() => {
    initSocketIo()
    if(currentUser){
      socket.emit('initUserId', currentUser._id);
      socket.on("call-end", ()=>{
        dispach({
          type: ADD_TO_STORAGE,
          unique: true,
          key: 'newCall',
          payload: false
        })
      })
      socket.on("call-made", (data)=>{

        console.log("call-made :", {data});
        
        dispach({
          type: ADD_TO_STORAGE,
          unique: true,
          key: 'newCall',
          payload: true
        })
        dispach({
          type: ADD_TO_STORAGE,
          unique: true,
          key: 'sender',
          payload: data.called
        })
        dispach({
          type: ADD_TO_STORAGE,
          unique: true,
          key: 'callData',
          payload: data
        })
      })
      
      const newPeerData = initPeer(currentUser._id)

      console.log(newPeerData);
      
      // ===================================
      newPeerData?.on('open', (id) => {
        console.log('ID Peer ouvert :', id);
      });
    
      newPeerData?.on('connection', (connection) => {
        // Logique pour gérer une nouvelle connexion
        console.log({connection});
       
   
        
      });
    
      
      newPeerData?.on('error', (error) => {
        console.error('Erreur PeerJS :', error);
      });

      // ===================================

      setNewPeer(newPeerData)
    }

    return () => {
      socket.disconnect();
    };
  }, [currentUser]);

  return (
    <BrowserRouter>
      {/* <div className="container-fluid p-0"> */}

      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Header />
            <Inbox />

          </PrivateRoute>
        } />
        <Route path="/login" element={
          <>
            <Header />
            <Login />
          </>
        } />
        <Route path="/signin" element={
          <>
          <Header />
          <SignIn />
          </>
          
          } />
        <Route path="/signup" element={
          <>
          <Header />
          <SignUp />
          </>
          
          } />
        <Route path="/audio-call/:senderId" element={
          <>
          <AudioCall newPeer={newPeer} />
          <CallFooter/>
          </>
          
          } />
        <Route path="/video-call/:senderId" element={
          <>
          <VideoCall newPeer={newPeer} />
          <CallFooter/>
          </>
          
          } />
        <Route path="/forgot-password" element={
          <>
          <Header />
          <ForgotPassword />
          </>
          
          } />
        <Route path="/message/:chatId" element={
          <PrivateRoute>
            <Header />
            <MessageList />
            <MessageBox />
          </PrivateRoute>} />
        <Route path="/contacts" element={<PrivateRoute><Header /> <Contacts /></PrivateRoute>} />
        <Route path="/profil/:userId" element={<PrivateRoute><Header /> <Profil /></PrivateRoute>} />
        <Route
          path="/verification/:partial_token"
          element={
            <>
            <Header />
              <VerifyCode />
              {/* <Footer /> */}
            </>
          }
        />

        <Route
          path="/verification-email/:partial_token"
          element={
            <>
            <Header />
              <VerifyEmail />
              {/* <Footer /> */}
            </>
          }
        />

        <Route
          path="/reset-password/:reset_password_token"
          element={
            <>
            <Header />
              <ResetPassword />
              {/* <Footer /> */}
            </>
          }
        />

        <Route
          path="/reset-email/:partial_token"
          element={
            <>
            <Header />
              <VerifyCode />
              {/* <Footer /> */}
            </>
          }
        />

        <Route
          path="/auth/success"
          element={
            <>
            <Header />
              <AuthSuccess />
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
      {/* </div> */}
      <div className="audio-player">
        <audio></audio>
      </div>
      {
        newCall ?
        <div className='receive-call'>
          <AudioCall 
          newPeer={newPeer} 
          received={true} />
        </div>
        :
        null
      }
      <NotificationComponent />
    </BrowserRouter>
  )
}

export default App
