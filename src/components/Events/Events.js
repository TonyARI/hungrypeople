import rightImg from "../image/private_right.png";
import leftImg from "../image/private_left.png";
import s from "./Events.module.css";

function Events() {
    return (
        <section className={s.private} id="events">
        <div className="container">
            <div className={s.title_inner}>
                <h1 className={s.title}>PRIVATE EVENTS</h1>
            </div>   
            <div className={s.content_inner}>
                <div className={s.left_img}>
                    <img className={s.left_img_icon} src={leftImg} alt=""/>
                    <span className={s.txt+" "+s.left}>weddings</span>
                </div>
                <div className={s.right_img}>
                    <img className={s.right_img_icon} src={rightImg} alt=""/>
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