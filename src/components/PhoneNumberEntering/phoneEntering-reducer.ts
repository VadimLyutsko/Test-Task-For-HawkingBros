import {Dispatch} from 'redux'

const initialState = {
    phoneNumber: '',
}
type InitialStateType = typeof initialState

export const phoneEnteringReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'EnterPhoneNumber':
            return {...state, phoneNumber: action.phoneNumber}
        default:
            return state
    }
}
// actions
export const setPhoneNumberAC = (phoneNumber: string) =>
    ({type: 'EnterPhoneNumber', phoneNumber} as const)


// thunks

export const phoneTC = (number:string) => (dispatch: Dispatch) => {
    // ниже диспатчим что-либо (например для прелоадера)
    dispatch(setPhoneNumberAC(number))
    // dispatch(setAppStatusAC('loading'))

    // ниже делаем запросы при необходимости (сохраняем куда-то на бэк) и всевозможные манипуляции

    // authAPI.me().then(res => {
    //     debugger
    //     if (res.data.resultCode === Result_Code.Ok) {
    //         dispatch(setIsLoggedInAC(true));
    //         dispatch(setIsInitializedAC(true))
    //         dispatch(setAppStatusAC('succeeded'))
    //     } else {
    //         dispatch(setIsInitializedAC(true))
    //         handleServerAppError(res.data, dispatch);
    //     }
    // }).catch(err => {
    //     handleServerNetworkError(err, dispatch)
    // })
}


// types
type ActionsType =
    | ReturnType<typeof setPhoneNumberAC>
//  | или что-то еще
