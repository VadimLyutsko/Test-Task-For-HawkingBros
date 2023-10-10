import React from 'react';
import styles from './SocialNetwork.module.css';

type SocialNetworkPropsType = {
    networkHandler: (id: string, clicked: boolean, additionalPrice: number) => void
    clickedImage: string
    clicked: boolean
    currency: string
    image: string
    price: string
    id: string
}

const SocialNetwork: React.FC<SocialNetworkPropsType> = ({
                                                             id,
                                                             currency,
                                                             clicked,
                                                             networkHandler,
                                                             price,
                                                             image,
                                                             clickedImage
                                                         }) => {

    const finalSocialClassName = clicked ?
        styles.container + ' ' + styles.social :
        styles.container + ' ' + styles.unavailableSocial


    const networkClickHandler = () => {
        networkHandler(id, !clicked, Number(price))
        console.log(price)
    }

    return (
        <div
            className={finalSocialClassName}
            onClick={networkClickHandler}>
            <img src={!clicked ? image : clickedImage} alt=""/>
            <span>{`${price} ${currency}`}</span>
        </div>
    );
};

export default SocialNetwork;
