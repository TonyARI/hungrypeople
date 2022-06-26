import Menu from "./Menu";
import { connect } from "react-redux";
import { menuListAC} from "../redux/Menu-reducer";

let mapStateToProps=(state)=>({
    Menu: state.Menu
})

let mapDispatchToProps=(dispatch)=>({
    menuList: (id)=>{
        dispatch(menuListAC(id))
    }
})

let menuContainer=connect(mapStateToProps,mapDispatchToProps)(Menu);
export default menuContainer