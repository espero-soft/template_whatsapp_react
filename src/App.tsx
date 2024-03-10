import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inbox from './components/Inbox/Inbox';
import MessageList from './components/MessageList/MessageList';
import Login from './components/Login/Login';
import Contacts from './components/Contacts/Contacts';
import Profil from './components/Profil/Profil';
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

const App: React.FC = () => {

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
        <Route path="/audio-call" element={
          <>
          <AudioCall />
          <CallFooter/>
          </>
          
          } />
        <Route path="/video-call" element={
          <>
          <VideoCall />
          <CallFooter/>
          </>
          
          } />
        <Route path="/forgot-password" element={
          <>
          <Header />
          <ForgotPassword />
          </>
          
          } />
        <Route path="/message" element={
          <PrivateRoute>
            <Header />
            <MessageList />
            <MessageBox />
          </PrivateRoute>} />
        <Route path="/contacts" element={<PrivateRoute><Header /> <Contacts /></PrivateRoute>} />
        <Route path="/profil" element={<PrivateRoute><Header /> <Profil /></PrivateRoute>} />
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
      <NotificationComponent />
    </BrowserRouter>
  )
}

export default App
