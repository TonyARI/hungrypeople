import aboutImg from "../image/about-img1.png";
import s from "./About.module.css";
import sc from "../commonStyles.module.css";
import teamImg from "../image/team-img.png";

function About() {
     return (
        <>
            <section className={s.about} id="about">
                <div className="container">
                    <div className={sc.inner}>
                        <div className={sc.text_content}>
                            <h1 className={sc.title+" yellow_strip"}>
                                About us
                            </h1>
                            <h2 className={sc.suptitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                            </h2>
                            <p className={sc.text}>
                                Integer ullamcorper neque eu puruseuismod, ac faucibus mauris posuere.Morbi non ultrices ligula. Seddictum, enim sed ullamcorperfeugiat, dui odio vehicula eros, asollicitudin lorem quam nec sem.Mauris tincidunt feugiat diamconvallis pharetra. Nulla facilisissemper laoreet.
                            </p>  
                        </div>
                        <div className={sc.img_inner}>
                           <img className={sc.img} src={aboutImg} alt=""/> 
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.team} id="team">
            <div className="container">
                <div className={sc.white_uppercase_title}> 
                    <h1 className={sc.white_uppercase_title_text}>Our team</h1>
                </div>
                <div className={sc.inner}>
                    <div className={sc.img_inner_left}>
                        <img className={sc.img} style={{boxShadow: "none"}} src={teamImg} alt=""/>
                    </div>
                    <div className={sc.text_content_right}>
                        <h2 className={sc.title+" yellow_strip"} style={{color: "#FFFFFF"}}>MASTER CHEF</h2>
                        <h3 className={sc.suptitle} style={{color: "#FFFFFF"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h3>
                        <p className={sc.text} style={{color: "#FFFFFF"}}>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
                    </div>
                </div>
            </div>
            </section>
</>
    ) 
}

export default About;