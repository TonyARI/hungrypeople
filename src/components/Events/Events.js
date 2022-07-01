import rightImg from "../image/private_right.png";
import leftImg from "../image/private_left.png";
import s from "./Events.module.css";
import sc from "../commonStyles.module.css";

function Events() {
    return (
        <section className={s.private} id="events">
        <div className="container">
            <div className={sc.white_uppercase_title}>
                <h1 className={sc.white_uppercase_title_text}>PRIVATE EVENTS</h1>
            </div>   
            <div className={sc.inner+" "+s.inner}>
                <div className={sc.img_inner_left+" "+s.img_inner}>
                    <img className={sc.img} src={leftImg} alt=""/>
                    <span className={s.txt+" "+s.left}>weddings</span>
                </div>
                <div className={sc.img_inner+" "+s.img_inner}>
                    <img className={sc.img} src={rightImg} alt=""/>
                    <span className={s.txt+" "+s.right}>corporate pzrties</span>
                </div>
            </div>
            <div className={s.footer}>
                <p className={s.footer_text}>
                    For private events please call: <b>+40 729 131 637/+40 726 458 782</b> or use the contact form.
                </p>
            </div>
        </div>
    </section>
    )
}

export default Events;