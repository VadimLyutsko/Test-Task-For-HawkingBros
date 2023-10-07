import React, {useState} from 'react';
import styles from './PhoneNumberEntering.module.css'
import SuperInputText from '../SuperComponents/SuperInput/SuperInputText';
import {useAppDispatch} from '../../app/store';
import {phoneTC} from './phoneEntering-reducer';

export const PhoneNumberEntering = () => {

    const dispatch = useAppDispatch()
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setErrorOnEnter = () => {
        let valueFromInput = stateForAllInputs.trim()
        setError(
            valueFromInput
                // .length === 11 ??? (или другие условия валидации)
                ? ''
                : 'Error message informing me of a problem'
        )
        setValue('')
        valueFromInput && dispatch(phoneTC(valueFromInput))  // Проверка, чтобы не диспатчить лишний раз
    }


    return (
        <div className={styles.phoneNumberEnteringContainer}>

            <h2>Телефон</h2>

            <SuperInputText
                placeholder={'+7 (____) ___-__-__'}
                customClassName={'customClassName'}
                id={'hw4-super-input-with-error'}
                value={stateForAllInputs}
                onChangeText={setValue}
                onEnter={() => {
                    setErrorOnEnter()
                }}
                error={error}/>
        </div>
    );
};

