import { FC } from 'react';
import { IHeroInfo } from '../../types/heroInfo.interface';
import styles from './Hero.module.scss';

const Info:FC<IHeroInfo> = ({ price, text }) => {
    return (
        <div>
            <p className={styles.infoPrice}>{price}k+</p>
            <p className={styles.infoText}>{text}</p>
        </div>
    )
}

export default Info;
