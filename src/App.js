import React from 'react';
import Header from './Header';
import MyCalendar from './components/MyCalendar';
import { Route, Routes, useLocation } from 'react-router-dom';
import DatePage from './routes/DatePage';
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import SettingName from './routes/SettingName';
import GlobalStyle from './GlobalStyles'
import Main from './routes/Main';

function App() {
  const location = useLocation();
  const noHeaderRoutes = ['/login', '/signup', '/signup/nickname', '/', '/terms'];

  const isShowHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <>
      <GlobalStyle />
      <div>
          {isShowHeader && <Header />}
          <Routes>
            {/* 추후 /main/:userId로 바꿀 예정 */}
            <Route path="/main" element={<Main/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signup/nickname" element={<SettingName />}/>
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/date/:date" element={<DatePage />} />
          </Routes>
      </div>
    </>
  );
}

export default App;

