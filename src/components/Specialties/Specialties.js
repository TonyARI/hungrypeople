import sc from "../commonStyles.module.css";
import s from './Specialties.module.css'
import specImg from '../image/speciaties.png';


function Specialties() {
    let sliderList=(count, event)=>{
        let items=document.querySelectorAll(".Specialties_inner__jc5n5");
        let sliderItems=document.querySelectorAll(".Specialties_slider_item__YWx-l");
        for(let item of sliderItems) {
            item.style.background="#998C88";
            if(item===event.target) {
                item.style.background="white";
            }
        }
        for(let item of items) {
            item.style.transform=`translate(${count}%)`;
        }
    }
    return (
        <section className={s.team} id="team">
            <div className="container">
                <div className={sc.white_uppercase_title }> 
                    <h1 className={sc.white_uppercase_title_text}>specialties</h1>
                </div>
                <div className={s.localWraper}>
                    <Specialties />
                    <Specialties />
                    <Specialties />
                </div>
                <div className={s.slider}>
                    <div className={s.slider_item} style={{background: "white"}} onClick={(e)=>sliderList(0, e)}></div>
                    <div className={s.slider_item} onClick={(e)=>sliderList(-100, e)}></div>
                    <div className={s.slider_item} onClick={(e)=>sliderList(-200, e)}></div>
                </div>
            </div>
    </section>
    )
    function Specialties() {
        return (
                <div className={s.inner} >
                    <div className={sc.img_inner_left}>
                        <img className={sc.img} style={{boxShadow: "none"}} src={specImg} alt=""/>
                    </div>
                    <div className={sc.text_content_right}>
                        <h2 className={sc.title+" yellow_strip"} style={{color: "#FFFFFF"}}>CHOCOLATE PANCAKES</h2>
                        <h3 className={sc.suptitle} style={{color: "#FFFFFF"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h3>
                        <p className={sc.text} style={{color: "#FFFFFF"}}>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
                    </div>
                </div>
        )
    }
}

export default Specialties;