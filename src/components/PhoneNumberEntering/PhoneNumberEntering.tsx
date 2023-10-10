import React from 'react';
import SuperInputText from '../SuperComponents/SuperInput/SuperInputText';
import styles from './PhoneNumberEntering.module.css'


type PhoneNumberEnteringPropsType = {
    // formik:FormType
    formik: any
    title:string
}

export const PhoneNumberEntering: React.FC<PhoneNumberEnteringPropsType> = ({formik,title}) => {

    const submitFormHandle = () => {
        formik.errors.phone && formik.touched.phone && formik.submitForm()
    }


    return (
        <div className={styles.phoneNumberEnteringContainer}>

            <h2>{title}</h2>

            <form name={'phoneForm'} onSubmit={formik.handleSubmit}>
                <SuperInputText
                    placeholder={'+7 (____) ___-__-__'}
                    customClassName={'customClassName'}
                    {...formik.getFieldProps('phone')}
                    id={'hw4-super-input-with-error'}
                    error={formik.errors.phone}
                    onEnter={submitFormHandle}/>
            </form>
        </div>
    );
};
