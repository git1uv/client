import React, { useState, useEffect } from 'react';
import WebHeader from './components/Header/WebHeader';
import AppHeader from './components/Header/AppHeader';
import MyCalendar from './routes/MyCalendar';
import {Route, Routes, useLocation } from 'react-router-dom';
import DatePage from './routes/DatePage';
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import SettingName from './routes/SettingName'
import KakaoRedirect from './routes/KakaoRedirect'
import GoogleRedirect from './routes/GoogleRedirect'
import ChatbotPage from './routes/Chatbot/ChatbotPage'; 
import Trash from './routes/Trash'; 
import TrashPaper from './routes/TrashPaper';
import Letter from './routes/Letter'; 
import PencilHolder from './routes/PencilHolder'; 
import Settings from './routes/Set/Settings'; 
import Main from './routes/Main'; 
import Ask from './routes/Set/Ask'; 
import Developer from './routes/Set/Developer'; 
import FAQ from './routes/Set/FAQ'; 
import NameChange from './routes/Set/NameChange'; 
import PwChange from './routes/Set/PwChange'; 
import SimterInformation from './routes/Set/SimterInformation'; 
import GlobalStyle from './GlobalStyle';
import TestPage from './routes/Chatbot/TestPage';
import TestContent from './components/Test/TestContent/TestContent';
import TestResult from './routes/Chatbot/TestResultPage';
import ChatbotChoice from './components/Chatbot/ChatbotChoice/ChatbotChoice';
import ChatbotResultPage from './routes/Chatbot/ChatbotResultPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Onboarding from './routes/Onboarding';
import PublicRoute from './routes/publicRoute';
import PrivateRoute from './routes/privateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const isMain = location.pathname === '/main';
  const hideHeaderPaths = ['/login', '/signup', '/signup/nickname', '/term', '/', '/oauth'];
  const mobileHideHeaderPaths = [
    '/settings', '/ask', '/developer', 
    '/faq', '/namechange', '/pwchange', 
    '/simterinformation', '/chatbot', '/oauth'
  ];  
  const hideHeader = hideHeaderPaths.includes(location.pathname) || (isMobileView && mobileHideHeaderPaths.includes(location.pathname));
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
  <GlobalStyle />
    <div>
      {!hideHeader && (
        isMobileView ? 
        <AppHeader isMain={isMain} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> :
        <WebHeader isMain={isMain} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Onboarding/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signup/nickname" element={<SettingName/>}/>
            <Route path="/oauth" element={<KakaoRedirect />}/>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/main" element={<Main/>}/>
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/date/:date" element={<DatePage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/chatbot/choice" element={<ChatbotChoice />} />
            <Route path="/chatbot/:counselingLogId" element={<ChatbotResultPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/test/content" element={<TestContent />} />
            <Route path="/test/result" element={<TestResult />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/trashpaper" element={<TrashPaper />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/pencilholder" element={<PencilHolder />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ask" element={<Ask />}/>
            <Route path="/developer" element={<Developer />}/>
            <Route path="/faq" element={<FAQ />}/>
            <Route path="/namechange" element={<NameChange />}/>
            <Route path="/pwchange" element={<PwChange />}/>
            <Route path="/simterinformation" element={<SimterInformation />}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

