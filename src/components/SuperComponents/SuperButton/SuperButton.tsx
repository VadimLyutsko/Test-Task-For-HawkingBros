import React from 'react';
import styles from './SuperButton.module.css'

type SuperButtonPropsType = {
    phoneEntering?: string
    operatorEntering?: string
    service?: string
}


export const SuperButton: React.FC<SuperButtonPropsType> = ({operatorEntering, phoneEntering, service}) => {

    const submitJsonObj = {
        'operator': operatorEntering,
        'phone': phoneEntering ,
        'service': service,
    }
    const buttonHandler = () => {
        alert(JSON.stringify(submitJsonObj))
    }

    return (
        <div>
            <button className={styles.superButtonContainer} onClick={buttonHandler}>
                <span>480 ₽</span> в месяц
            </button>
        </div>
    );
};

