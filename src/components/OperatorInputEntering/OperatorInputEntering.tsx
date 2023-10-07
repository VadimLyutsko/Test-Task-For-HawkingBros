import React, {useEffect} from 'react';
import styles from './OperatorInputEntering.module.css'
import SuperSelect from '../SuperComponents/SuperSelect/SuperSelect';
import {setOperaEnteringAC} from './operatorEntering-reducer';
import {useAppDispatch} from '../../app/store';

const operators = [
    {id: 1, value: 'Оператор №1'},
    {id: 2, value: 'Оператор №2'},
    {id: 3, value: 'Оператор №3'},
];


export const OperatorInputEntering = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setOperaEnteringAC('Оператор №1'))
    }, [])

    const change = (operator: string) => {
        dispatch(setOperaEnteringAC(operator))
    };


    return (
        <div className={styles.operatorInputEnteringContainer}>

            <h2>Оператор</h2>

            <SuperSelect
                id={'hw12-select-theme'}
                className={styles.select}
                onChangeOption={change}
                options={operators}/>

        </div>
    );
};

