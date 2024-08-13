import React, { useState, useEffect } from 'react';
import WebHeader from './components/Header/WebHeader';
import AppHeader from './components/Header/AppHeader';
import MyCalendar from './routes/MyCalendar';
import {Route, Routes, useLocation } from 'react-router-dom';
import DatePage from './routes/DatePage';
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import SettingName from './routes/SettingName'
import Chatbot from './routes/Chatbot/Chatbot'; 
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
import './assets/font/font.css'; 
import GlobalStyle from './GlobalStyle';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 430);
  const hideHeaderPaths = ['/login', '/signup', '/signup/nickname', '/term', '/'];
  const mobileHideHeaderPaths = [
    '/settings', '/ask', '/developer', 
    '/faq', '/namechange', '/pwchange', 
    '/simterinformation'
  ];  
  const hideHeader = hideHeaderPaths.includes(location.pathname) || (isMobileView && mobileHideHeaderPaths.includes(location.pathname));
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 430);
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
          <AppHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> :
          <WebHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )}
              <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signup/nickname" element={<SettingName/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/calendar" element={<MyCalendar />} />
                <Route path="/date/:date" element={<DatePage />} />
                <Route path="/chatbot" element={<Chatbot />} />
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
              </Routes>
          </div>
        </>
  );
}

export default App;

