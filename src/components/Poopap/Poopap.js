import s from "./Poopap.module.css";

function Poopap({active, setactive, children}) {
    return (
        <div className={active?s.window+" "+s.active:s.window} onClick={()=>{setactive(false)}}>
            <div className={active?s.content+" "+s.active:s.content} onClick={(e)=>{e.stopPropagation()}}>
                {children}
                <div className={s.closeInner} onClick={()=>{setactive(false)}}>
                    <span className={s.close}></span>
                    <span className={s.close2}></span> 
                </div>
            </div>
           
        </div>
    )
}

export default Poopap