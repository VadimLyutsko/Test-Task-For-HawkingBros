import {Dispatch} from 'redux'

const RENT = 'RENT'
const REDEEM = 'REDEEM'

const initialState = {
    service: 'Rent',
}
type InitialStateType = typeof initialState

export const choiceServicesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case RENT:
            return {service: action.rent}
        case REDEEM:
            return {service: action.redeem}
        default:
            return state
    }
}
// actions
export const setRentAC = (rent: string) =>
    ({type: RENT, rent} as const)

export const setRedeemAC = (redeem: string) =>
    ({type: REDEEM, redeem} as const)

// thunks
// Здесь можно и без них, для показательности...
export const serviceTC = (value: string) => (dispatch: Dispatch) => {
    value === 'Rent' && (dispatch(setRentAC(value)))
    value === 'Redeem' && (dispatch(setRedeemAC(value)))
}


// types
type ActionsType =
    | ReturnType<typeof setRentAC>
    | ReturnType<typeof setRedeemAC>
