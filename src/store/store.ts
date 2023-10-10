import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {phoneEnteringReducer} from './phoneEntering-reducer';
import {operatorEnteringReducer} from './operatorEntering-reducer';
import {choiceServicesReducer} from './choiceServices-reducer';
import {socialNetworksReducer} from './social-reduser/socialNetworks-reducer';
import {priceReducer} from './price-reducer';
import {minutesReducer} from './minutes-reducer';
import {internetReducer} from './internet-reducer';


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    phoneEntering: phoneEnteringReducer,
    operatorEntering: operatorEnteringReducer,
    service: choiceServicesReducer,
    networks: socialNetworksReducer,
    finalPrice: priceReducer,
    minutesAmount:minutesReducer,
    internetAmount:internetReducer

})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
