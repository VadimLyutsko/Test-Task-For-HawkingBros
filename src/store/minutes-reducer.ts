const SET_MINUTES='SET-MINUTES'

const initialState = {
    minutesAmount: 200,
}
type InitialStateType = typeof initialState

export const minutesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_MINUTES:
            return {...state, minutesAmount: action.minutesAmount}
        default:
            return state
    }
}
// actions
export const setMinutesAC = (minutesAmount: number) =>
    ({type: SET_MINUTES, minutesAmount} as const)

// types
type ActionsType =
    | ReturnType<typeof setMinutesAC>
//  | или что-то еще
