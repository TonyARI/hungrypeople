
const MENU_LIST="MENU_LIST";

let initialState={
    foods: {
        pizza: {
            id: 1, text: "PIZZA QUATRO STAGIONI", price: "56,68", 
        },
        soupe: {
            id : 2, text: "SOUP QUATRO STAGIONI", price: "59,68", 
        },
        pasta: {
            id: 3, text: "pasta QUATRO STAGIONI", price: "59,68", 
        },
        desert: {
            id: 4, text: "desert QUATRO STAGIONI", price: "71,68", 
        },
        wine: {
            id: 5, text: "wine QUATRO STAGIONI", price: "73,68", 
        },
        beer: {
            id: 6, text: "beer QUATRO STAGIONI", price: "76,68", 
        },
        drinks: {
            id: 7, text: "drinks QUATRO STAGIONI", price: "74,68"
        }
    },
    active: 1,
    transform: 0
}

export function menuReducer(state=initialState, action) {
      if(action.type===MENU_LIST) {
        return {
            ...state,
            ...state.foods,
            active: action.id
        }
    }  
    return {
        ...state
    }
}

export let menuListAC=(id)=>({type:MENU_LIST, id });


