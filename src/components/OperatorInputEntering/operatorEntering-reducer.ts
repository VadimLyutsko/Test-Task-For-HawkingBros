import {Dispatch} from 'redux'

const initialState = {
    operatorEntering: '',
}
type InitialStateType = typeof initialState

export const operatorEnteringReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'EnterOperator':
            return {...state, operatorEntering: action.operatorEntering}
        default:
            return state
    }
}
// actions
export const setOperaEnteringAC = (operatorEntering: string) =>
    ({type: 'EnterOperator', operatorEntering} as const)


// thunks

// export const initializeAppTC = (operator:string) => (dispatch: Dispatch) => {
//     // ниже диспатчим что-либо (например для прелоадера)
//     dispatch(setOperaEnteringAC(operator))
//     // dispatch(setAppStatusAC('loading'))
//
//     // ниже делаем запросы при необходимости (сохраняем куда-то на бэк) и всевозможные манипуляции
//
//     // authAPI.me().then(res => {
//     //     debugger
//     //     if (res.data.resultCode === Result_Code.Ok) {
//     //         dispatch(setIsLoggedInAC(true));
//     //         dispatch(setIsInitializedAC(true))
//     //         dispatch(setAppStatusAC('succeeded'))
//     //     } else {
//     //         dispatch(setIsInitializedAC(true))
//     //         handleServerAppError(res.data, dispatch);
//     //     }
//     // }).catch(err => {
//     //     handleServerNetworkError(err, dispatch)
//     // })
// }


// types
type ActionsType =
    | ReturnType<typeof setOperaEnteringAC>
//  | или что-то еще
