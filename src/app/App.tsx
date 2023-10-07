import React from 'react';
import styles from './App.module.css'
import {Header} from '../components/Header/Header';
import {PhoneNumberEntering} from '../components/PhoneNumberEntering/PhoneNumberEntering';
import {OperatorInputEntering} from '../components/OperatorInputEntering/OperatorInputEntering';
import {SliderInputEntering} from '../components/SliderInputEntering/SliderInputEntering';
import {ChoiceServices} from '../components/ChoiceServices/ChoiceServices';
import {SocialNetworks} from '../components/SocialNetworks/SocialNetworks';
import {SuperButton} from '../components/SuperComponents/SuperButton/SuperButton';
import {useAppSelector} from './store';


function App() {

    const operatorEntering = useAppSelector(store => store.operatorEntering.operatorEntering)
    const phoneEntering = useAppSelector(store => store.phoneEntering.phoneNumber)
    const service = useAppSelector(store => store.service.service)

    return (
        <div className={styles.containerApp}>
            <Header title={'Настройте тариф'}/>
            <PhoneNumberEntering/>
            <OperatorInputEntering/>
            <SliderInputEntering/>
            <SliderInputEntering/>
            <ChoiceServices/>
            <SocialNetworks/>
            <SuperButton service={service} phoneEntering={phoneEntering} operatorEntering={operatorEntering}/>
        </div>
    );
}

export default App;
