import React from 'react';
import styles from './SuperButton.module.css'

type SuperButtonPropsType = {
    phoneEntering?: string
    operatorEntering?: string
    service?: string
    disabled?: boolean
    priceObj: PriceObj
    textArrForButton: string[]
}

type PriceObj = {
    price: number
    redeemPrice: number
    redeem: boolean
    rent: boolean
    rentPrice: number
}


export const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                                textArrForButton,
                                                                priceObj,
                                                                operatorEntering,
                                                                phoneEntering,
                                                                service,
                                                                disabled
                                                            }) => {

    const submitJsonObj = {
        'operator': operatorEntering,
        'phoneNumber': phoneEntering,
        'price': priceObj.price,
        'BuyOutOrLease': service
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

