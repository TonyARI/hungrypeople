import bookImg from '../image/book-img.png';
import s from "./Book.module.css";
import React from 'react';
import Poopap from "../Poopap/Poopap";


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
    const [values, setvalue]=React.useState({ data: {name: "", email: "", phone: "", people: "", date: "", time: ""}, showWarning: false, checkValues: false, sucessfullyBooking: false })
    const [modalActive2, setModalActive2]=React.useState(false)
    let changeValue=(e)=>{
        switch(e.target.name){
            case "name":{
                setvalue({...values, data: {...values.data, name: e.target.value}})
                break
            }
            case "email":{
                setvalue({...values, data: {...values.data, email: e.target.value}})
                break
            }
            case "phone":{
                setvalue({...values, data: {...values.data, phone: e.target.value}})
                break
            }
            case "people":{
                setvalue({...values, data: {...values.data, people: e.target.value}})
                break
            }
            case "data":{
                setvalue({...values, data: {...values.data, date: e.target.value}})
                break
            }
            case "time":{
                setvalue({...values, data: {...values.data, time: e.target.value}})
                break
            }
        }
    }
    let submitData=()=>{
        for(let item of Object.values(values.data)) {
            if(!item) {
                setvalue({...values, showWarning: true})
                setTimeout(()=>{setvalue({...values, showWarning: false})}, 3000)
                return
            }
        }
        setvalue({...values, data: {...values.data}, checkValues: true})
        setModalActive2(true);
    }

    let bookTable=()=>{
        setvalue({...values, data: {...values.data, name: "", email: "", phone: "", people: "", date: "", time: "" }, checkValues: false, sucessfullyBooking: true})
        setModalActive2(false);
        setTimeout(()=>setvalue({...values, data: {...values.data, name: "", email: "", phone: "", people: "", date: "", time: "" }, checkValues: false, sucessfullyBooking: false}), 3000)
    }

    let cancel=()=>{
        setvalue({...values, checkValues: false})
    }
  
    return(
    <>
    {values.showWarning&&<div className={s.warning}>Все поля формы должны быть заполнены!</div>}
    {values.sucessfullyBooking&&<div className={s.success}>The table was booked successfully!</div>}
    <form action="phile.php">
        
                <Poopap active={modalActive2} setactive={setModalActive2}>
                <div className={s.checkValues}>
                    <h3 className={s.check_data}>Check the data</h3>
                    <p>Name: {values.data.name} </p>
                    <p>Email: {values.data.email}</p>
                    <p>Phone: {values.data.phone}</p>
                    <p>Count of people: {values.data.people}</p>
                    <p>date: {values.data.date}</p>
                    <p>time: {values.data.time}</p>
                    <button onClick={(e)=>{e.preventDefault(); bookTable()}} className={s.check_book}>Book table</button>
                    <button onClick={cancel} className={s.check_cancel}>Cancel</button>
                </div>
                </Poopap>
            
            
        <div className={s.form_inner}>
            <h1 className={s.title+" "+ "yellow_strip"}>Book a table</h1>
            <div className={s.left_inputs}>
                <input type="text" className={s.left_item} onChange={(e)=>changeValue(e)} value={values.data.name} placeholder="Name" name="name"/>
                <input type="text" className={s.left_item} onChange={(e)=>changeValue(e)} value={values.data.email} placeholder="Email" name="email"/>
            </div>
            <div className={s.left_inputs}>
                <input type="text" value={values.data.phone} onChange={(e)=>changeValue(e)} className={s.left_item} placeholder="Phone" name="phone"/>
                <select value={values.data.people} className={s.left_item+" "+s.select} onChange={(e)=>changeValue(e)} name="people" id="">
                    <option value="People">People</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="More 5">More 5</option>
                </select>
            </div>
            <div className={s.left_inputs}>
                <input value={values.data.date} onChange={(e)=>changeValue(e)} type="text" className={s.left_item} placeholder="Date (mm/dd)" name="data" />
                <select value={values.data.time} onChange={(e)=>changeValue(e)} className={s.left_item+" "+s.select} name="time" id="">
                    <option value="Time">Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Day">Day</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                </select>
            </div>
            <div>
                <button type="button" onClick={submitData} className={s.btn}>Book now</button>
            </div>
        </div>
    </form>
    </>
    )
}