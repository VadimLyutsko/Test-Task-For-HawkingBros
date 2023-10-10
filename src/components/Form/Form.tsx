import React from 'react';
import {OperatorInputEntering} from '../OperatorInputEntering/OperatorInputEntering';
import {SliderInputEntering} from '../SliderInputEntering/SliderInputEntering';
import {PhoneNumberEntering} from '../PhoneNumberEntering/PhoneNumberEntering';
import {SuperButton} from '../SuperComponents/SuperButton/SuperButton';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {ChoiceServices} from '../ChoiceServices/ChoiceServices';
import {SocialNetworks} from '../SocialNetworks/SocialNetworks';
import {setInternetAC} from '../../store/internet-reducer';
import {phoneTC} from '../../store/phoneEntering-reducer';
import {setMinutesAC} from '../../store/minutes-reducer';
import {FormikProps, useFormik} from 'formik';


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
    const internet = useAppSelector(store => store.internetAmount.internetAmount)
    const minutes = useAppSelector(store => store.minutesAmount.minutesAmount)
    const service = useAppSelector(store => store.service.service)
    const priceObj = useAppSelector(store => store.finalPrice)

    const minutesMarksForSlider = ['200', '350', '500', '650', '50']
    const internetMarksForSlider = ['5', '15', '25', '35', '5']
    const textArrForButton = ['₽', 'в месяц', '+', '2600']
    const optionsForOperators = [
        {id: 1, value: 'Оператор №1'},
        {id: 2, value: 'Оператор №2'},
        {id: 3, value: 'Оператор №3'},
    ];

    const sliderValueMinutesHandler = (value: number) => {
        dispatch(setMinutesAC(value))
    }
    const sliderValueInternetHandler = (value: number) => {
        dispatch(setInternetAC(value))
    }


    const formik: FormikProps<MyValues> = useFormik<MyValues>
    ({
        initialValues: {
            phone: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}

            if (!values.phone) {
                errors.phone = 'Обязательное поле'  //Как вариант...
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
        <>
            <PhoneNumberEntering title={'Телефон'} formik={formik}/>
            <OperatorInputEntering title={'Оператор'} options={optionsForOperators}/>
            <SliderInputEntering valueHandler={sliderValueMinutesHandler}
                                 sliderRangeMarks={minutesMarksForSlider}
                                 title={'Минуты'}
                                 value={minutes}/>
            <SliderInputEntering valueHandler={sliderValueInternetHandler}
                                 sliderRangeMarks={internetMarksForSlider}
                                 disabled={phoneEntering === ''}
                                 title={'Интернет'}
                                 value={internet}/>
            <ChoiceServices/>
            <SocialNetworks/>
            <SuperButton operatorEntering={operatorEntering}
                         textArrForButton={textArrForButton}
                         disabled={phoneEntering === ''}
                         phoneEntering={phoneEntering}
                         priceObj={priceObj}
                         internet={internet}
                         service={service}
                         minutes={minutes}/>
        </>
    );
};

