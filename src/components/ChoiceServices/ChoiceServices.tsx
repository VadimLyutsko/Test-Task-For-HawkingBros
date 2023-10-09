import React, {useEffect, useState} from 'react';
import styles from './ChoiceServices.module.css'
import SuperCheckbox from '../SuperComponents/SuperCheckbox/SuperCheckbox';
import {useAppDispatch} from '../../store/store';
import {serviceTC} from '../../store/choiceServices-reducer';
import {setRedeemAC, setRentAC} from '../../store/price-reducer';
import {resetAllNetworkAC} from '../../store/social-reduser/socialNetworks-reducer';

export const ChoiceServices = () => {

    const dispatch = useAppDispatch()

    const [redeemCheckboxes, setRedeem] = useState<boolean>(false)
    const [rentCheckboxes, setRent] = useState<boolean>(true)

    useEffect(() => {
        dispatch(serviceTC('Rent'))
    }, [])

    const checkHandler = (id: string) => {
        id === 'Redeem' && dispatch(setRedeemAC(true))
        id === 'Rent' && dispatch(setRentAC(true))
        id === 'Rent' && setRedeem(false)
        id === 'Redeem' && setRent(false)

        dispatch(resetAllNetworkAC())
        dispatch(serviceTC(id))
    }

    return (
        <div className={styles.choiceServicesContainer}>

            <h2>Wi-Fi роутер</h2>

            <div className={styles.services}>
                <div className={styles.service}>
                    <SuperCheckbox
                        onChange={() => checkHandler('Rent')}
                        textForSpan={['Аренда', '₽/мес.']}
                        onChangeChecked={setRent}
                        checked={rentCheckboxes}
                        id={'rent'}
                        price={99}/>
                </div>
                <div className={styles.service}>
                    <SuperCheckbox
                        onChange={() => checkHandler('Redeem')}
                        textForSpan={['Выкупить', ' ₽']}
                        onChangeChecked={setRedeem}
                        checked={redeemCheckboxes}
                        id={'Redeem'}
                        price={2600}/>
                </div>
            </div>
        </div>
    )
        ;
};

