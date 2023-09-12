import Image from 'next/image';
import { FC } from 'react';
import { INFTCard } from '../../types/nftCard.interface';
import styles from './Marketplace.module.scss';

const Item:FC<INFTCard> = ({ nftImg, nftName, artistImg, artistName }) => {
    return (
        <div className={styles.nftCard}>
            <Image src={nftImg} width={330} height={296} alt={nftName} className={styles.nftImage} />
            <div className={styles.nftInfo}>
                <p className={styles.nftTitle}>{nftName}</p>
                <div className={styles.nftSubtitle}>
                    <Image src={artistImg} width={24} height={24} alt={artistName} className={styles.artist} />
                    <p className={styles.artistName}>{artistName}</p>
                </div>
                <div className={styles.nftTitlePrice}>
                    <p className={styles.nftNaming}>Price</p>
                    <p className={styles.nftNaming}>Highest Bid</p>
                </div>
                <div className={styles.nftPrice}>
                    <p>1.63 ETH</p>
                    <p>0.33 wETH</p>
                </div>
            </div>
        </div>
    )
}

export default Item;
