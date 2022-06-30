import React from "react";
import Poopap from "../Poopap/Poopap";
import s from './MainPage.module.css';
import sc from "../About/About.module.css";
import { NavLink } from "react-router-dom";


function MainPage() {
    const [modalActive, setModalActive]=React.useState(false)
    let down=()=>{
        window.scrollTo(0, 10000);
    }
    return(
        <div className={s.mainPage}>
            <Poopap active={modalActive} setactive={setModalActive}>
                <h1 className={sc.title+" yellow_strip"}>Welcome to us</h1>
                <p className={s.poopap_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis voluptatem asperiores explicabo! Id, illum eaque quod enim velit voluptates eligendi fugiat repellat reprehenderit ab laborum quia animi alias eveniet? Integer ullamcorper neque eu puruseuismod, ac faucibus mauris posuere.Morbi non ultrices ligula. Seddictum, enim sed ullamcorperfeugiat, dui odio vehicula eros, asollicitudin lorem quam nec sem.Mauris tincidunt feugiat diamconvallis pharetra. Nulla facilisissemper laoreet.
                </p>
            </Poopap>
            <div className="container">
                <div>
                    <div className={s.content_inner}>
                        <span className={s.timeOfWork}>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</span>
                        <div className={s.content_center}>
                            <div className={s.titles}>
                                <h2 className={s.content_suptitle}>RESTAURANT</h2>
                                <h1 className={s.content_title}>hungry people</h1>
                            </div>
                            <NavLink to="/book" className={s.content_btn_left}>Book table</NavLink>
                            <a className={s.content_btn_right} onClick={(e)=>{e.preventDefault(); setModalActive(true)}} href="">EXPLORE</a>
                        </div>
                        <div className={s.content_messages}>
                            <a target="_blank" rel="noopener" href="https://ru-ru.facebook.com/" class={s.content_messages_link}><i  className="fab fa-facebook-f"></i></a>
                            <a target="_blank" href="https://twitter.com/?lang=ru" class={s.content_messages_link}><i className="fab fa-twitter"></i></a>
                            <a target="_blank" href="https://www.instagram.com/" class={s.content_messages_link}><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className={s.content_button_inner} >
                        <button className={s.content_button_down} onClick={down}  title="Вниз!" type="button"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage