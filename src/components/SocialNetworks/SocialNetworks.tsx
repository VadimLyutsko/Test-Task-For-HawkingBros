import React from 'react';
import styles from './SocialNetworks.module.css'
import SocialNetwork from './socialNetwork/SocialNetwork';

export const SocialNetworks = () => {

    let socialNetworksArr = [
        {
            id: '1',
            link: '',
            image: 'https://i.pinimg.com/originals/a0/6e/c2/a06ec2e6f2e0c543747c5589bf9adbab.jpg',
            price: '20 ₽',
        }, {
            id: '2',
            link: 'https://hawkingbros.com/',
            image: 'https://i.pinimg.com/originals/a0/6e/c2/a06ec2e6f2e0c543747c5589bf9adbab.jpg',
            price: '20 ₽',
        }, {
            id: '3',
            link: '',
            image: 'https://i.pinimg.com/originals/a0/6e/c2/a06ec2e6f2e0c543747c5589bf9adbab.jpg',
            price: '20 ₽',
        }, {
            id: '4',
            link: 'https://hawkingbros.com/',
            image: 'https://i.pinimg.com/originals/a0/6e/c2/a06ec2e6f2e0c543747c5589bf9adbab.jpg',
            price: '60 ₽',
        }, {
            id: '5',
            link: '',
            image: 'https://i.pinimg.com/originals/a0/6e/c2/a06ec2e6f2e0c543747c5589bf9adbab.jpg',
            price: '60 ₽',
        }
    ]

    const networks = socialNetworksArr.map(social => {
        return (
            <div key={social.id}>
                <SocialNetwork price={social.price}
                               image={social.image}
                               link={social.link}
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

