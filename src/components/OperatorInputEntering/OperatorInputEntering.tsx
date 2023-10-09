import React, {useEffect} from 'react';
import styles from './OperatorInputEntering.module.css'
import SuperSelect from '../SuperComponents/SuperSelect/SuperSelect';
import {setOperaEnteringAC} from '../../store/operatorEntering-reducer';
import {useAppDispatch} from '../../store/store';



type OperatorInputEnteringPropsType ={
    title:string
    options:OptionsOperatorInputPropsType
}

type OptionsOperatorInputPropsType = OptionOperatorInputPropsType[]

    type OptionOperatorInputPropsType = {
        id:number
        value:string
    }

export const OperatorInputEntering:React.FC<OperatorInputEnteringPropsType> = ({title,options}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setOperaEnteringAC('Оператор №1'))
    }, [])

    const change = (operator: string) => {
        dispatch(setOperaEnteringAC(operator))
    };


    return (
        <div className={styles.operatorInputEnteringContainer}>

            <h2>{title}</h2>

            <SuperSelect
                className={styles.select}
                id={'hw12-select-theme'}
                onChangeOption={change}
                options={options}/>
        </div>
    );
};

