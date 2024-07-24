import React from 'react';
import './header.css';

function headerBar() {
    return (
        <header className="header">
            <div className="header_wrapper">
                <h1 className="header_start">
                    <button className="header_home">&#127969;</button>
                    <span className="header_title">심터</span>
                </h1>
                <div className="header_center">
                    <form className="header_form" onSubmit={(e) => e.preventDefault()}>
                        <button className="header-button">챗봇</button>
                        <button className="header-button">감정쓰레기통</button>
                        <button className="header-button">달력</button>
                        <button className="header-button">편지</button>
                    </form>
                </div>
                <div className="header_end">
                    <button className="header_end_button">설정</button>
                    <button className="header_end_button">로그아웃</button>
                </div>
            </div>
        </header>
    );
}

export default headerBar;
