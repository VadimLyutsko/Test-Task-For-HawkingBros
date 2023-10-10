import React from 'react';
import {Header} from '../components/Header/Header';
import {Form} from '../components/Form/Form';
import styles from './App.module.css'


function App() {


    return (
        <div className={styles.containerApp}>
            <Header title={'Настройте тариф'}/>
            <Form/>
        </div>
    );
}

export default App;
