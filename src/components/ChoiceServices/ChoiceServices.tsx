import React, {useState} from 'react';
import styles from './ChoiceServices.module.css'
import SuperCheckbox from '../SuperComponents/SuperCheckbox/SuperCheckbox';
import {useAppDispatch} from '../../app/store';
import {serviceTC} from './choiceServices-reducer';

export const ChoiceServices = () => {

    const dispatch = useAppDispatch()

    const [redeemCheckboxes, setRedeem] = useState<boolean>(false)
    const [rentCheckboxes, setRent] = useState<boolean>(false)

    const checkHandler = (id: string) => {
        id === 'Аренда' && setRedeem(false)
        id === 'Выкупить' && setRent(false)
        dispatch(serviceTC(id))
    }


    return (
        <div className={styles.choiceServicesContainer}>
            <h2>Wi-Fi роутер</h2>

            <div className={styles.services}>

                <div className={styles.service}>
                    <SuperCheckbox
                        onChange={() => checkHandler('Аренда')}
                        checked={rentCheckboxes}
                        onChangeChecked={setRent}
                        id={'rent'}/>

                    <span>Аренда <b>99</b> ₽/мес.</span>
                </div>

                <div className={styles.service}>
                    <SuperCheckbox
                        onChange={() => checkHandler('Выкупить')}
                        checked={redeemCheckboxes}
                        onChangeChecked={setRedeem}
                        id={'redeem'}/>

                    <span>Выкупить <b>2 600</b> ₽</span>
                </div>

            </div>
        </div>
    );
};

