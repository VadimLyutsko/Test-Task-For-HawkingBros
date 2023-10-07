import React from 'react';
import styles from './SocialNetwork.module.css';

type SocialNetworkPropsType = {
    id: string
    link: string
    image: string
    price: string
}

const SocialNetwork: React.FC<SocialNetworkPropsType> = ({id, link, price, image}) => {

    const finalSocialClassName = link !== '' ? styles.container + ' ' + styles.social  : styles.container + ' ' + styles.unavailableSocial

    return (
        <div className={finalSocialClassName}>
            <a target="_blank" href={link}>
                <img src={image} alt=""/>
                <span>{price}</span>
            </a>
        </div>
    );
};

export default SocialNetwork;
