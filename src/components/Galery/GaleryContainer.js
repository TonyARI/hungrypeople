import { connect } from "react-redux";
import { galeryActivePictureAC, galeryTransformLeftAC, galeryTransformRightAC, toggleLeftArrowAC, toggleRightArrowAC} from "../redux/galery-reducer";
import Galery from "./Galery";

let mapStateToProps=(state)=>({
    galery: state.Galery
});

let mapDispatchToProps=(dispatch)=>({
    galeryTransformRight: (translate)=>{
        dispatch(galeryTransformRightAC(translate));
    },
    galeryTransformLeft: (translate)=>{
        dispatch(galeryTransformLeftAC(translate))
    },
    toggleRightArrow: (flag)=>{
        dispatch(toggleRightArrowAC(flag));
    },
    toggleLeftArrow: (flag)=>{
        dispatch(toggleLeftArrowAC(flag));
    },
    toggleActivePicture: (img, id, show)=>{
        dispatch(galeryActivePictureAC(img, id, show))
    }
});

let GaleryContainer=connect(mapStateToProps, mapDispatchToProps)(Galery);

export default GaleryContainer;