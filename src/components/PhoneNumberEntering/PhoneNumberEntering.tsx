import React, {useState} from 'react';
import styles from './PhoneNumberEntering.module.css'
import SuperInputText from '../SuperComponents/SuperInput/SuperInputText';
import {useAppDispatch} from '../../app/store';
import {phoneTC} from './phoneEntering-reducer';
import {useFormik} from 'formik';
import {TextField} from '@mui/material';

type FormikErrorType = {
    phone?:string
}

export const PhoneNumberEntering = () => {

    const dispatch = useAppDispatch()
    const [stateForAllInputs, setValue] = useState<string>('')
    // const [error, setError] = useState<string>('')

    const setErrorOnEnter = () => {
        let valueFromInput = stateForAllInputs.trim()
        // setError(
        //     valueFromInput
        //         // .length === 11 ??? (или другие условия валидации)
        //         ? ''
        //         : 'Error message informing me of a problem'
        // )
        setValue('')
        valueFromInput && dispatch(phoneTC(valueFromInput))  // Проверка, чтобы не диспатчить лишний раз
    }




    const formik = useFormik({
        initialValues: {
            phone:''
        },
        validate: values => {
            const errors: FormikErrorType = {}

            if (!values.phone) {
                errors.phone = 'Required'
            } else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(values.phone)) {
                errors.phone = 'Error message informing me of a problem'

            }
            return errors
        },
        onSubmit: values => {
            formik.resetForm()
            dispatch(phoneTC(values.phone))
        },
    })


const submitFormHandle = ()=>{
    formik.errors.phone && formik.touched.phone && formik.submitForm()
}



    return (<>
            {/*{console.log(formik)}*/}
            <form onSubmit={formik.handleSubmit}>
                <SuperInputText
                    placeholder={'+7 (____) ___-__-__'}
                    customClassName={'customClassName'}
                    id={'hw4-super-input-with-error'}
                    // value={stateForAllInputs}
                    // value={formik.values.phone}
                    onChangeText={setValue}
                    onEnter={() => {
                        submitFormHandle()
                    }}
                    error={formik.errors.phone}
                    {...formik.getFieldProps('phone')}
                />



                    {/*<TextField label="phone"*/}
                    {/*           margin="normal"*/}
                    {/*    // name={'email'}*/}
                    {/*    // onChange={formik.handleChange}*/}
                    {/*    // value={formik.values.email}*/}
                    {/*    // onBlur={formik.handleBlur}*/}
                    {/*           {...formik.getFieldProps('phone')}></TextField>*/}
                    {/*{formik.errors.phone && formik.touched.phone &&*/}
                    {/*    <div style={{color: 'red'}}> {formik.errors.phone + '2222222'}</div>}*/}



                                       {/*<Button type={'submit'} variant={'contained'} color={'primary'}>*/}
                    {/*    Login*/}
                    {/*</Button>*/}
            </form>















    {/*        <div className={styles.phoneNumberEnteringContainer}>*/}

    {/*    <h2>Телефон</h2>*/}

    {/*    <SuperInputText*/}
    {/*        placeholder={'+7 (____) ___-__-__'}*/}
    {/*        customClassName={'customClassName'}*/}
    {/*        id={'hw4-super-input-with-error'}*/}
    {/*        value={stateForAllInputs}*/}
    {/*        onChangeText={setValue}*/}
    {/*        onEnter={() => {*/}
    {/*            setErrorOnEnter()*/}
    {/*        }}*/}
    {/*        error={error}/>*/}
    {/*</div>*/}
        </>

    );
};
