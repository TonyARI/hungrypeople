import React from "react";
import s from './MainPage.module.css';

function MainPage() {
    let down=()=>{
        window.scrollTo(0, 10000);
    }
    return(
        <div className={s.mainPage}>
            <div className="container">
                <div>
                    <div className={s.content_inner}>
                        <span className={s.timeOfWork}>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</span>
                        <div className={s.content_center}>
                            <h2 className={s.content_suptitle}>RESTAURANT</h2>
                            <h1 className={s.content_title}>hungry people</h1>
                            <a className={s.content_btn_left} href="">BOOK TABLE</a>
                            <a className={s.content_btn_right} href="">EXPLORE</a>
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