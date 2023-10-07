import React from 'react';
import styles from './Header.module.css'

type HeaderPropsType = {
    title:string
}

export const Header:React.FC<HeaderPropsType> = ({title}) => {


    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};

