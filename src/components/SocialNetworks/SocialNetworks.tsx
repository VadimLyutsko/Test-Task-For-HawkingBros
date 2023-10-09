import React from 'react';
import styles from './SocialNetworks.module.css'
import SocialNetwork from './socialNetwork/SocialNetwork';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {setNetworkAC} from '../../store/social-reduser/socialNetworks-reducer';
import {setAddPriceAC, setDecreasePriceAC} from '../../store/price-reducer';

export const SocialNetworks = () => {
    const dispatch = useAppDispatch()
    const socialNetworksArr = useAppSelector(store => store.networks)
    const networkHandler = (id: string, clicked: boolean, variablePrice: number) => {
        dispatch(setNetworkAC(id, clicked))
        clicked && dispatch(setAddPriceAC(variablePrice))
        !clicked && dispatch(setDecreasePriceAC(variablePrice))
    }


    const networks = socialNetworksArr.map(social => {
        return (
            <div key={social.id}>
                <SocialNetwork clickedImage={social.clickedImage}
                               networkHandler={networkHandler}
                               currency={social.currency}
                               clicked={social.clicked}
                               price={social.price}
                               image={social.image}
                               id={social.id}/>
            </div>
        )
    })


    return (
        <div className={styles.socialNetworksContainer}>
            <h2>Соцсети</h2>
            <div className={styles.socialsContainer}>
                {networks}
            </div>
        </div>
    );
};

