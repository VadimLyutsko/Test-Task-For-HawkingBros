import React from 'react';
import styles from './App.module.css'
import {Header} from '../components/Header/Header';
import {Form} from '../components/Form/Form';


function App() {

    return (
        <div className={styles.containerApp}>
            <Header title={'Настройте тариф'}/>
            <Form/>
        </div>
    );
}

export default App;
