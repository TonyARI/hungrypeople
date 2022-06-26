import { combineReducers, createStore } from "redux";
import galeryReducer from "./galery-reducer";
import { menuReducer } from "./Menu-reducer";


let reducers=combineReducers({
    Galery: galeryReducer,
    Menu: menuReducer
})

let store=createStore(reducers);
export default store; 