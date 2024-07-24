import React from 'react';
import Header from './Header';
import MyCalendar from './components/MyCalendar';
import { Route, Routes } from 'react-router-dom';
import DatePage from './routes/DatePage';
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import SettingName from './routes/SettingName';

function App() {
  return (
    <div>
        <Header />
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

