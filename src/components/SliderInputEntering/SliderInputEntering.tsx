import React from 'react';
import styles from './SliderInputEntering.module.css'
import {Slider} from '@mui/material';

export const SliderInputEntering = () => {

    const marks = [
        {
            value: 0,
            label: 'Что-то',
        },
        {
            value: 20,
            label: 'Что-то',
        },
        {
            value: 37,
            label: 'Что-то',
        },
        {
            value: 100,
            label: 'Что-то',
        },
    ];

    function valuetext(value: number) {
        return `${value}°C`;
    }

    const sliderHandler = (e: Event) => {
        console.log(typeof e)
    }


    return (
        <div className={styles.sliderInputEnteringContainer}>
            <h2>Минуты</h2>
            {/*<div className={styles.inputRange}><input name='operator' list="values"  type="range"/></div>*/}
            {/*<datalist id="values">*/}
            {/*    <option value="0" label="very cold!"></option>*/}
            {/*    <option value="25" label="cool"></option>*/}
            {/*    <option value="50" label="medium"></option>*/}
            {/*    <option value="75" label="getting warm!"></option>*/}
            {/*    <option value="100" label="hot!"></option>*/}
            {/*</datalist>*/}

            <Slider
                sx={{
                    '& .MuiSlider-thumb': {
                        color: "#7A5CFA",
                    },
                    '& .MuiSlider-track': {
                        color: "#7A5CFA"
                    },
                    '& .MuiSlider-rail': {
                        color: "#acc4e4"
                    },
                    '& .MuiSlider-active': {
                        color: "yellow",
                    },


                }}

                // aria-label=""
                // disabled={false}
                marks={marks}
                defaultValue={10}
                getAriaValueText={valuetext}
                step={5}
                max={35}
                min={5}
                valueLabelDisplay="auto"
                onChange={(e)=>{sliderHandler(e)}}
            />
        </div>
    );
};





const ImageThumb = (props: any) => {
    return (
        <span {...props}>
      <img
          src="https://i.pinimg.com/736x/cc/5b/48/cc5b483b8d5d5c36f26fa7db10e854f3.jpg"
          alt="loading"
          style={{ borderRadius: 20 }}
      />
    </span>
    );
};


