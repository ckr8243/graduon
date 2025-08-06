import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsHouseFill, BsMortarboardFill, BsCardChecklist, BsPersonFill } from 'react-icons/bs';
import './BottomNav.css';

function BottomNav() {
  return (
    <nav className="bottom-nav d-flex justify-content-around align-items-center">
      <NavLink to="/home" className="nav-item">
        <BsHouseFill size={20} />
        <div>홈</div>
      </NavLink>

      <NavLink to="/credit/input" className="nav-item">
        <BsMortarboardFill size={20} />
        <div>학점관리</div>
      </NavLink>

      <NavLink to="#" className="nav-item" onClick={(e) => e.preventDefault()}>
        <BsCardChecklist size={20} />
        <div>과목관리</div>
      </NavLink>

      <NavLink to="#" className="nav-item" onClick={(e) => e.preventDefault()}>
        <BsPersonFill size={20} />
        <div>MY</div>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
