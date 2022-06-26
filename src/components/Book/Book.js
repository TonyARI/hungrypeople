import bookImg from '../image/book-img.png';
import s from "./Book.module.css"

export function Book() {
    return(
        <section className={s.book}>
            <div className="container">
                <div className={s.inner}>
                    <Form/>
                    <div className={s.book_img}>
                        <img className={s.book_image} src={bookImg} alt=""/>
                    </div>
                </div>
                <div className={s.footer}>
                    <p className={s.footer_text}>
                        Mon - Fri: <span className={s.footer_text_bold}>8PM - 10PM, </span> Sat - Sun: <span className={s.footer_text_bold}>PM - 3AM, </span>8 Phone: <span className={s.footer_text_bold}>+40 729 131 637/+40 726 458 782</span>
                    </p>
                </div>
            </div>
        </section>
    )
}


export let Form=()=>{
    return(
        <form action="phile.php">
        <div className={s.form_inner}>
        <h1 className={s.title+" "+ "yellow_strip"}>Book a table</h1>
            <div className={s.left_inputs}>
                <input type="text" className={s.left_item} placeholder="Name" name="name"/>
                <input type="text" className={s.left_item} placeholder="Email" name="email"/>
            </div>
            <div className={s.left_inputs}>
                <input type="text" className={s.left_item} placeholder="Phone" name="phone"/>
                <select className={s.left_item+" "+s.select} name="people" id="">
                    <option value="">People</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">More 5</option>
                </select>
            </div>
            <div className={s.left_inputs}>
                <input type="text" className={s.left_item} placeholder="Date (mm/dd)" name="data" />
                <select className={s.left_item+" "+s.select} name="" id="">
                <option value="">Time</option>
                <option value="">Morning</option>
                <option value="">Day</option>
                <option value="">Evening</option>
                <option value="">Night</option>
                </select>
            </div>
            <div>
                <button type="submit" className={s.btn}>Book now</button>
            </div>
        </div>
    </form>
    )
}