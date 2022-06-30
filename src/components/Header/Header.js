import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from './header_logo.png';

function Header() {
    let [menuShow, togglemenu]=React.useState(false)
    return (
        <>
            <div className={s.header}>
                <div className="container">
                    <div className={menuShow?s.header_wrapper+" "+s.active:s.header_wrapper}>
                            <NavLink onClick={()=>togglemenu(false)} to="/home" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>HOME</NavLink>
                            <NavLink onClick={()=>togglemenu(false)} to="/about" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>ABOUT</NavLink>
                            <NavLink onClick={()=>togglemenu(false)} to="/book" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>BOOKING</NavLink>
                        <div className={s.header_logo}>
                            <img src={logo} alt=""/>
                        </div>
                        <NavLink onClick={()=>togglemenu(false)} to="/menu" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>MENU</NavLink>
                        <NavLink onClick={()=>togglemenu(false)} to="/events" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>EVENTS</NavLink>
                        <NavLink onClick={()=>togglemenu(false)} to="/specialties" className={navData=>navData.isActive?s.header_menu_link+" "+s.active:s.header_menu_link}>SPECIALTIES</NavLink>
                    </div>
                </div>
            </div>
            <div className={s.header_media}>
                <div className={s.gamburger_media_inner} onClick={()=>togglemenu(true)}>
                    <span className={s.header_child+" "+s.child1}></span>
                    <span className={s.header_child+" "+s.child2}></span>
                    <span className={s.header_child+" "+s.child3}></span>
                </div>
            </div>
            {menuShow&&<div onClick={()=>togglemenu(false)} className={s.window}></div>}
        </>
    )
}

export default Header;