import React from 'react';
import {PhoneNumberEntering} from '../PhoneNumberEntering/PhoneNumberEntering';
import {OperatorInputEntering} from '../OperatorInputEntering/OperatorInputEntering';
import {ChoiceServices} from '../ChoiceServices/ChoiceServices';
import {SocialNetworks} from '../SocialNetworks/SocialNetworks';
import {SuperButton} from '../SuperComponents/SuperButton/SuperButton';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {FormikProps, useFormik} from 'formik';
import {phoneTC} from '../../store/phoneEntering-reducer';
import {SliderInputEntering} from '../SliderInputEntering/SliderInputEntering';

type FormikErrorType = {
    phone?: string
}

type MyValues = {
    phone: string;
}

// export type FormType = ReturnType<typeof useFormik>

export const Form: React.FC = () => {

    const dispatch = useAppDispatch()
    const operatorEntering = useAppSelector(store => store.operatorEntering.operatorEntering)
    const phoneEntering = useAppSelector(store => store.phoneEntering.phoneNumber)
    const service = useAppSelector(store => store.service.service)
    const priceObj = useAppSelector(store => store.finalPrice)
    const textArrForButton = ['₽', 'в месяц', '+', '2600']
    const optionsForOperators = [
        {id: 1, value: 'Оператор №1'},
        {id: 2, value: 'Оператор №2'},
        {id: 3, value: 'Оператор №3'},
    ];

    const formik: FormikProps<MyValues> = useFormik<MyValues>
    ({
        initialValues: {
            phone: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}

            if (!values.phone) {
                errors.phone = 'Required'  //Как вариант...
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


    return (
        <div>
            <PhoneNumberEntering title={'Телефон'} formik={formik}/>
            <OperatorInputEntering title={'Оператор'} options={optionsForOperators}/>
            <SliderInputEntering title={'Минуты (не готов)'}/>
            <SliderInputEntering title={'Интернет (не готов)'}/> <ChoiceServices/>
            <SocialNetworks/>
            <SuperButton operatorEntering={operatorEntering}
                         textArrForButton={textArrForButton}
                         disabled={phoneEntering === ''}
                         phoneEntering={phoneEntering}
                         priceObj={priceObj}
                         service={service}/>
        </div>
    );
};

