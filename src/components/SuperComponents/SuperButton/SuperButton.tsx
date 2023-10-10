import React from 'react';
import styles from './SuperButton.module.css'


type SuperButtonPropsType = {
    textArrForButton: string[]
    operatorEntering?: string
    phoneEntering?: string
    disabled?: boolean
    priceObj: PriceObj
    service?: string
    internet: number
    minutes: number
}

type PriceObj = {
    price: number
    redeemPrice: number
    redeem: boolean
    rent: boolean
    rentPrice: number
}


export const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                                operatorEntering,
                                                                textArrForButton,
                                                                phoneEntering,
                                                                priceObj,
                                                                internet,
                                                                service,
                                                                disabled,
                                                                minutes
                                                            }) => {

    const submitJsonObj = {
        'operator': operatorEntering,
        'phoneNumber': phoneEntering,
        'BuyOutOrLease': service,
        'price': priceObj.price,
        'internet': internet,
        'minutes': minutes
    }
    const buttonHandler = () => {
        alert(JSON.stringify(submitJsonObj))
    }

    const finalClassNameDisable = disabled ? styles.superButtonContainerRentDisable : styles.superButtonContainerRent
    const finalClassName = disabled ? styles.superButtonContainerDisable : styles.superButtonContainer


    return (
        <div className={styles.container}>
            {
                //Костыль, правильнее замапить, чтобы сохранить универсальность компонента
                priceObj.redeem ?
                    <button disabled={disabled} className={finalClassNameDisable} onClick={buttonHandler}>
                        <span> {`${priceObj.price}  ${textArrForButton[0]}`}</span> {textArrForButton[1]} {textArrForButton[2]}
                        <b>{textArrForButton[3]}</b> {textArrForButton[0]}
                    </button> :
                    <button disabled={disabled} className={finalClassName} onClick={buttonHandler}>
                        <span> {`${priceObj.price}  ${textArrForButton[0]}`}</span>{textArrForButton[1]}
                    </button>
            }
        </div>
    );
};

