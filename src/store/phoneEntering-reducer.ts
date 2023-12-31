import {Dispatch} from 'redux'

const PHONE_NUMBER='SET-PHONE-NUMBER'

const initialState = {
    phoneNumber: '',
}
type InitialStateType = typeof initialState

export const phoneEnteringReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case PHONE_NUMBER:
            return {...state, phoneNumber: action.phoneNumber}
        default:
            return state
    }
}
// actions
export const setPhoneNumberAC = (phoneNumber: string) =>
    ({type: PHONE_NUMBER, phoneNumber} as const)


// thunks

export const phoneTC = (number:string) => (dispatch: Dispatch) => {
    // ниже диспатчим что-либо (например для прелоадера)
    dispatch(setPhoneNumberAC(number))
    // dispatch(setAppStatusAC('loading'))

    // ниже делаем запросы при необходимости (сохраняем куда-то на бэк) и всевозможные манипуляции

}


// types
type ActionsType =
    | ReturnType<typeof setPhoneNumberAC>
//  | или что-то еще
