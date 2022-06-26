import img1 from "../image/picture-1.png";
import img2 from "../image/picture-2.png";
import img3 from "../image/picture-3.png";
import img4 from "../image/picture-4.png";
const TRANSFORMRIGHT="TRANSFORMRIGHT";
const TRANSFORMLEFT="TRANSFORMLEFT";
const SHOWRIGHTARROW="SHOWRIGHTARROW";
const SHOWLEFTARROW="SHOWLEFTARROW";
const TOGGLEACTIVEPICTURE="TOGGLEACTIVEPICTURE";



let initialState={
   items:  [
    {id: 1, photos: img1 },
    {id: 2, photos: img2 },
    {id: 3, photos: img3 },
    {id: 4, photos: img4 },
    {id: 5, photos: img1 },
    {id: 6, photos: img2 },
    {id: 7, photos: img3 },
    {id: 8, photos: img4 },
   ],
   translate: 0,
   showRightArrow: true,
   showLeftArrow: true,
   galeryShow: false,
   galeryActivePicture: null,
   idActivePicture: null
}

function galeryReducer(state=initialState, action) {
    switch(action.type) {
        case TRANSFORMRIGHT: return {
            ...state,
            translate: action.translate
        }
        case TRANSFORMLEFT: return {
            ...state,
            translate: action.translate
        }
        case SHOWRIGHTARROW: return {
            ...state,
            showRightArrow: action.flag
        }
        case SHOWLEFTARROW: return {
            ...state,
            showLeftArrow: action.flag
        }
        case TOGGLEACTIVEPICTURE: return {
            ...state,
            galeryShow: action.show,
            galeryActivePicture: action.img,
            idActivePicture: action.id
        }
        default: return {
            ...state
        }
    }
}

export let galeryTransformRightAC=(translate)=>({type: TRANSFORMRIGHT, translate});
export let galeryTransformLeftAC=(translate)=>({type: TRANSFORMLEFT, translate});
export let toggleRightArrowAC=(flag)=>({type:SHOWRIGHTARROW, flag});
export let toggleLeftArrowAC=(flag)=>({type: SHOWLEFTARROW, flag});
export let galeryActivePictureAC=(img, id, show)=>({type: TOGGLEACTIVEPICTURE, img, id, show})
export default galeryReducer;