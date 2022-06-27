import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from './header_logo.png';

function Header() {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.header_wrapper}>
                        <NavLink to="/home" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>HOME</NavLink>
                        <NavLink to="/about" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>ABOUT</NavLink>
                        <NavLink to="/book" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>BOOKING</NavLink>
                    <div className={s.header_logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <NavLink to="/menu" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>MENU</NavLink>
                    <NavLink to="/events" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>EVENTS</NavLink>
                        <a className={s.header_menu_link}>CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Header;