import React from "react";

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <h1>나만의 포트폴리오</h1>
      <nav>
        <button onClick={() => setCurrentPage("home")}>홈</button>
        <button onClick={() => setCurrentPage("about")}>소개</button>
        <button onClick={() => setCurrentPage("projects")}>프로젝트</button>
        <button onClick={() => setCurrentPage("contact")}>연락처</button>
        <button onClick={() => setCurrentPage("calculate")}>계산기</button>
      </nav>
    </header>
  );
};

export default Header;
