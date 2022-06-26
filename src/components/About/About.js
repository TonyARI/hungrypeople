import aboutImg from "../image/about-img1.png";
import s from "./About.module.css";
import teamImg from "../image/team-img.png";

function About() {
     return (
        <>
            <section className={s.about} id="about">
                <div className="container">
                    <div className={s.inner}>
                        <div className={s.text_content}>
                            <h1 className={s.title+" yellow_strip"}>
                                About us
                            </h1>
                            <h2 className={s.suptitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                            </h2>
                            <p className={s.text}>
                                Integer ullamcorper neque eu puruseuismod, ac faucibus mauris posuere.Morbi non ultrices ligula. Seddictum, enim sed ullamcorperfeugiat, dui odio vehicula eros, asollicitudin lorem quam nec sem.Mauris tincidunt feugiat diamconvallis pharetra. Nulla facilisissemper laoreet.
                            </p>  
                        </div>
                        <div className={s.img_inner}>
                            <img className={s.img} src={aboutImg} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.team} id="team">
            <div className="container">
                <div className={s.team_title}> 
                    <h1 className={s.team_title_text}>Our team</h1>
                </div>
                <div className={s.inner}>
                    <div className={s.img_inner_left}>
                        <img className={s.img} style={{boxShadow: "none"}} src={teamImg} alt=""/>
                    </div>
                    <div className={s.text_content_right}>
                        <h2 className={s.title+" yellow_strip"} style={{color: "#FFFFFF"}}>MASTER CHEF</h2>
                        <h3 className={s.suptitle} style={{color: "#FFFFFF"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h3>
                        <p className={s.text} style={{color: "#FFFFFF"}}>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
                    </div>
                </div>
            </div>
            </section>
</>
    ) 
}

export default About;