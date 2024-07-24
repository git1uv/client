import React from 'react';
import Header from './Header';
import MyCalendar from './components/MyCalendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DatePage from './routes/DatePage';
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
      <Router>
          <div>
              <Header />
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                  <Route path="/" element={<MyCalendar />} />
                  <Route path="/date/:date" element={<DatePage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;

