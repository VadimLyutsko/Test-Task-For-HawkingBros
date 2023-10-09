const initialState = {
    operatorEntering: '',
}

const SET_OPERATOR = 'SET-OPERATOR'

type InitialStateType = typeof initialState

export const operatorEnteringReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_OPERATOR:
            return {...state, operatorEntering: action.operatorEntering}
        default:
            return state
    }
}
// actions
export const setOperaEnteringAC = (operatorEntering: string) =>
    ({type: SET_OPERATOR, operatorEntering} as const)


type ActionsType =
    | ReturnType<typeof setOperaEnteringAC>
//  | или что-то еще
