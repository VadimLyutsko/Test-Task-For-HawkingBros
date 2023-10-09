const ADD_PRICE = 'SETT-ADD-PRICE'
const DECREASE_PRICE = 'DECREASE-PRICE'
const SET_RENT = 'SET-RENT'
const SET_REDEEM = 'SET-REDEEM'

const initialState = {
    price: 99,
    rent: true,
    redeem: false,
    rentPrice:99,
    redeemPrice:2600
}
type InitialStateType = typeof initialState

export const priceReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_PRICE:
            return {...state, price: state.price + action.additionalPrice}
        case DECREASE_PRICE:
            return {...state, price: state.price - action.decreasePrice}
        case SET_RENT:
            return {...state,price:99, rent: true, redeem:false}
        case SET_REDEEM:
            return {...state,price:0, rent: false, redeem:true}
        default:
            return state
    }
}
// actions
export const setAddPriceAC = (additionalPrice: number) =>
    ({type: ADD_PRICE, additionalPrice} as const)

export const setDecreasePriceAC = (decreasePrice: number) =>
    ({type: DECREASE_PRICE, decreasePrice} as const)

export const setRentAC = (setRent: boolean) =>
    ({type: SET_RENT, setRent} as const)

export const setRedeemAC = (setRedeem: boolean) =>
    ({type: SET_REDEEM, setRedeem} as const)

// thunks

// export const serviceTC = (value:string) => (dispatch: Dispatch) => {
//     console.log(value)
// value === 'Аренда' && dispatch(setRentAC(value))
// value === 'Выкупить' && dispatch(setRedeemAC(value))
// }


// types
type ActionsType =
    | ReturnType<typeof setAddPriceAC>
    | ReturnType<typeof setDecreasePriceAC>
    | ReturnType<typeof setRentAC>
    | ReturnType<typeof setRedeemAC>
