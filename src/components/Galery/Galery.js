import React from "react";
import s from "./Galery.module.css"

function Galery(props) {
    let translate=props.galery.translate;
    let RightArrow=React.createRef();
    let LeftArrow=React.createRef();
    let lastImage=React.createRef();
    let firstImage=React.createRef();
    
 
    let transformRight=()=>{
        if(lastImage.current.getBoundingClientRect().x<document.body.clientWidth) {
            props.galeryTransformRight(translate-(lastImage.current.clientWidth-(document.body.clientWidth-lastImage.current.getBoundingClientRect().x)));
            if(RightArrow.current!==null) RightArrow.current.style.display="none";
            arrowController();
            return
        }
        props.galeryTransformRight(translate-360);
        arrowController();
    }

    let transformLeft=()=>{
        if(firstImage.current.getBoundingClientRect().x+firstImage.current.clientWidth>0) {
            let tranformSize=translate+(firstImage.current.clientWidth-(firstImage.current.getBoundingClientRect().x+firstImage.current.clientWidth))
            props.galeryTransformLeft(tranformSize);
            if(LeftArrow.current!==null) LeftArrow.current.style.display="none";
            arrowController();
            return;
        }
        props.galeryTransformLeft(translate+360);
        arrowController();
    }
    let hideArrow=()=>{
        if(RightArrow.current!==null){
            RightArrow.current.style.display="none";
        }  
        if(LeftArrow.current!==null){
            LeftArrow.current.style.display="none";
        }   
    }
    let arrowController=()=>{
        if(!props.galery.galeryShow) {
             let flag1=(lastImage.current.getBoundingClientRect().x>document.body.clientWidth-lastImage.current.clientWidth);
            props.toggleRightArrow(flag1);
            let flag2=firstImage.current.getBoundingClientRect().x<0
            props.toggleLeftArrow(flag2);
            if(RightArrow.current!==null) RightArrow.current.style.display="block";
            if(LeftArrow.current!==null) LeftArrow.current.style.display="block"; 
        }
    }

    
    return (<div className={s.picture} onMouseOver={arrowController} onMouseOut={hideArrow}>
            {props.galery.items.map(item=><img key={item.id} ref={item.id===1?firstImage:lastImage} onClick={()=>{props.toggleActivePicture(item.photos, item.id, true); hideArrow(); document.body.style.overflow="hidden"}} className={s.picture_img} style={{transform: `translate(${props.galery.translate}px)`}} src={item.photos}/>)} 
            {props.galery.showLeftArrow && <div className={s.picture_arrow+" "+s.left} ref={LeftArrow}  onClick={transformLeft} ></div> }
            {props.galery.showRightArrow &&<div className={s.picture_arrow+" "+s.right} ref={RightArrow} onClick={transformRight}></div>}
            {props.galery.galeryShow && 
            <div className={s.poopap}>
                <div className={s.poopap_inner}>
                    {props.galery.idActivePicture>1&&<div className={s.picture_arrow+" "+s.left} onClick={()=>props.galery.items.map((item)=>{
                        if(item.id-props.galery.idActivePicture===-1){
                            props.toggleActivePicture(item.photos, item.id, true);
                            return;
                        }
                    })}  style={{zIndex: 3, display: "block"}} ></div>}
                        <img src={props.galery.galeryActivePicture} className={s.poopap_img}/>
                    {props.galery.idActivePicture<props.galery.items.length && <div className={s.picture_arrow+" "+s.right} onClick={()=>props.galery.items.map((item)=>{
                        if(item.id-props.galery.idActivePicture===1){
                            props.toggleActivePicture(item.photos, item.id, true);
                            return;
                        }
                    })} style={{zIndex: 3, display: "block"}}></div>}
                      <div className={s.closeInner} onClick={()=>{props.toggleActivePicture(null, null, false); document.body.style.overflow="scroll"}}>
                        <span className={s.close}></span>
                        <span className={s.close2}></span> 
                      </div>
                </div>
            </div>}
        </div>)
    
}

export default Galery;