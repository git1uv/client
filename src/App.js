import React from 'react';
import Header from './Header';
import MyCalendar from './components/MyCalendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DatePage from './routes/DatePage';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<MyCalendar />} />
                    <Route path="/date/:date" element={<DatePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

