import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

function Menu() {
  const className = ({isActive}) => 'menu__item' + (isActive ?' menu__item-active' : '')
  return (
    <menu className="menu">
      <NavLink className={className} to="/">Главная</NavLink>
      <NavLink className={className} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={className} to="/timeattack">Time Attack</NavLink>
      <NavLink className={className} to="/forza">Forza karting</NavLink>
    </menu>
  );
}
export default Menu;
