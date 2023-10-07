import {Dispatch} from 'redux'

const initialState = {
    service: '',
}
type InitialStateType = typeof initialState

export const choiceServicesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'RENT':
            return {...state, service: action.rent}
        case 'REDEEM':
            return {...state, service: action.redeem}
        default:
            return state
    }
}
// actions
export const setRentAC = (rent: string) =>
    ({type: 'RENT', rent} as const)

export const setRedeemAC = (redeem: string) =>
    ({type: 'REDEEM', redeem} as const)

// thunks

export const serviceTC = (value:string) => (dispatch: Dispatch) => {
    console.log(value)
    value === 'Аренда' && dispatch(setRentAC(value))
    value === 'Выкупить' && dispatch(setRedeemAC(value))

}


// types
type ActionsType =
    | ReturnType<typeof setRentAC>
    | ReturnType<typeof setRedeemAC>
