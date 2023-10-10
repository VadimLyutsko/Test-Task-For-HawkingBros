import React, {memo} from 'react';
import styles from './SliderInputEntering.module.css'


type SliderInputEnteringPropsType = {
    valueHandler: (value: number) => void
    sliderRangeMarks: string[]
    disabled?: boolean
    value: number
    title: string
}

export const SliderInputEntering: React.FC<SliderInputEnteringPropsType> = memo(({
                                                                                     sliderRangeMarks,
                                                                                     valueHandler,
                                                                                     disabled,
                                                                                     value,
                                                                                     title,
                                                                                 }) => {

    const finalClassName = disabled ? styles.disableRange : styles.range


    return (
        <div className={styles.sliderInputEnteringContainer}>

            <h2>{title}</h2>

            <input value={disabled ? 5 : value}
                   className={finalClassName}
                   min={sliderRangeMarks[0]}
                   max={sliderRangeMarks[3]}
                   step={sliderRangeMarks[4]}
                   onChange={(e) => {
                       valueHandler(+e.target.value)
                   }}
                   type="range"/>

            <div className={styles.outputDivContainer}>
                {
                    sliderRangeMarks.slice(0, 4).map((mark, index) => {
                        return <div key={index} className={styles.outputDiv}>{mark}</div>
                    })
                }
            </div>
        </div>
    );
})







