const SET_INTERNET='SET-INTERNET'

const initialState = {
    internetAmount: 5,
}
type InitialStateType = typeof initialState

export const internetReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INTERNET:
            return {...state, internetAmount: action.internetAmount}
        default:
            return state
    }
}
// actions
export const setInternetAC = (internetAmount: number) =>
    ({type: SET_INTERNET, internetAmount} as const)

// types
type ActionsType =
    | ReturnType<typeof setInternetAC>
//  | или что-то еще
