import Image from 'next/image';
import styles from './Trending.module.scss';


import { ITrending } from '../../types/trending.interface';
import { FC } from 'react';

const TrendingCard: FC<ITrending> = (props) => {
    return (
        <>
            <div className={styles.collectionCard}>
                <Image src={props.mainImg} width={330} height={330} alt={props.trendingName} className={styles.trendingMainImg} />
                <div className={styles.subMainCard}>
                    <Image src={props.subMainImg_1} width={100} height={100} alt={'Trending SubMain 1.1'} className={styles.trendingSubMainImg} />
                    <Image src={props.subMainImg_2} width={100} height={100} alt={'Trending SubMain 1.2'} className={styles.trendingSubMainImg} />
                    <div className={`${styles.trendingSubMainImg} ${styles.trendingNumber}`}>
                        <p className={styles.numNFT}>{props.numNFT}</p>
                    </div>
                </div>
                <p className={styles.trendingInfo}>{props.trendingName}</p>
                <div className={styles.artistCard}>
                    <Image src={props.artistCard.avatar} width={24} height={24} alt={'Avatar Image'} className={styles.avatar} />
                    <p className={styles.artistName}>{props.artistCard.artistName}</p>
                </div>
            </div> 
        </>
    )
}

export default TrendingCard;
