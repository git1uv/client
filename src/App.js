import React from 'react';
import Header from './Header';
import MyCalendar from './components/MyCalendar';
import { Route, Routes, useLocation } from 'react-router-dom';
import DatePage from './routes/DatePage';
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import SettingName from './routes/SettingName';

function App() {
  const location = useLocation();
  const noHeaderRoutes = ['/login', '/signup', '/signup/nickname', '/'];

  const isShowHeader = !noHeaderRoutes.includes(location.pathname);

  console.log(window.innerWidth)
  console.log(window.innerHeight)
  return (
    <div>
        {isShowHeader && <Header />}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signup/nickname" element={<SettingName />}/>
          <Route path="/calendar" element={<MyCalendar />} />
          <Route path="/date/:date" element={<DatePage />} />
        </Routes>
    </div>
  );
}

export default App;

