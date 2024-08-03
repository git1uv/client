import React, { useState } from 'react';
import Header from './components/Header/Header';
import MyCalendar from './routes/MyCalendar';
import {Route, Routes, useLocation } from 'react-router-dom';
import DatePage from './routes/DatePage';
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Chatbot from './routes/Chatbot'; 
import Trash from './routes/Trash'; 
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
import { isMobile } from "react-device-detect";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const hideHeaderPaths = ['/login', '/signup', '/term', '/'];
  const mobileHideHeaderPaths = [
    '/settings', '/ask', '/developer', 
    '/faq', '/namechange', '/pwchange', 
    '/simterinformation'
  ];  
  const hideHeader = hideHeaderPaths.includes(location.pathname) || (isMobile && mobileHideHeaderPaths.includes(location.pathname));
  return (
    <>
      <GlobalStyle />
          <div>
              {!hideHeader && (
              <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)}
              <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/calendar" element={<MyCalendar />} />
                <Route path="/date/:date" element={<DatePage />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/trash" element={<Trash />} />
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

