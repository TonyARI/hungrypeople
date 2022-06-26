import s from "./Menu.module.css";
import React from "react";


function Menu(props) {
    let items=Object.keys(props.Menu.foods);
    let textMenu=Object.values(props.Menu.foods);
    let textMenuInput;
    let textMenuInputs=[]
    textMenu.map((item)=>{
        if(props.Menu.active===item.id) {
            textMenuInput=item;
            return
        }
    })
    for(let i=0; i<21; i++) {
        textMenuInputs.push(<div className={s.menu_inner}>
                                 <div className={s.menu_item}>{textMenuInput.text} . . . . {textMenuInput.price} USD</div>
                                  <p className={s.menu_bottomText}>Integer ullamcorper neque eu purus euismod</p>
                             </div>
                           );
    }

     return (
         <section className={s.menu} id="menu">
         <div className="container">
             <div className={s.header}>
                 <h1 className={s.header_title+" "+"yellow_strip"}>
                     DELICIOUS MENU
                 </h1>
                 <h2 className={s.header_suptitle}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                 </h2>
             </div>
             <div className={s.list}>
                   {items.map(item=><div key={item.id} onClick={()=>props.menuList(items.indexOf(item)+1)} className={items.indexOf(item)===props.Menu.active-1?s.list_item+" "+s.list_active:s.list_item}>{item}</div>)}
             </div>
             <div className={s.menu_items}>
                 {textMenuInputs}
             </div>
         </div>
     </section>
    )

}



export default Menu;