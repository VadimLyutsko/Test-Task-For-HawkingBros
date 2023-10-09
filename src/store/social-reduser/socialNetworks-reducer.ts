import f1 from './f-.svg'
import f2 from './f+.svg'

import i1 from './i-.svg'
import i2 from './i+.svg'

import m1 from './m-.svg'
import m2 from './m+.svg'

import o1 from './o-.svg'
import o2 from './o+.svg'

import v1 from './v-.svg'
import v2 from './v+.svg'

const isNetwork = 'SET_ADD_NETWORK'
const RESET_ALL_NETWORKS = 'RESET-ALL-NETWORKS'

const initialState = [
    {
        id: '1',
        image: f1,
        clickedImage: f2,
        price: '20',
        clicked: false,
        currency: '₽'
    }, {
        id: '2',
        image: v1,
        clickedImage: v2,
        price: '20',
        clicked: false,
        currency: '₽'

    }, {
        id: '3',
        image: o1,
        clickedImage: o2,
        price: '20',
        clicked: false,
        currency: '₽'

    }, {
        id: '4',
        image: i1,
        clickedImage: i2,
        price: '60',
        clicked: false,
        currency: '₽'

    }, {
        id: '5',
        image: m1,
        clickedImage: m2,
        price: '60',
        clicked: false,
        currency: '₽'
    }
]
type InitialStateType = typeof initialState

export const socialNetworksReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case isNetwork:
            return state.map(net => net.id === action.networkId ? {...net, clicked: action.clicked} : net)
        case RESET_ALL_NETWORKS:
            return state.map(net => ({...net, clicked: false}))
        default:
            return state
    }
}
// actions
export const setNetworkAC = (networkId: string, clicked: boolean) =>
    ({type: isNetwork, networkId, clicked} as const)

export const resetAllNetworkAC = () =>
    ({type: RESET_ALL_NETWORKS} as const)


// thunks


// types
type ActionsType =
    ReturnType<typeof setNetworkAC> |
    ReturnType<typeof resetAllNetworkAC>
