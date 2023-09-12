import { FC } from "react";
import { ICreators } from "../../types/creators.interface";
import Image from 'next/image';
import styles from './TopRated.module.scss';

const Creator:FC<ICreators> = ({ id, artistImg, name }) => {
    return (
        <div className={styles.artistCard}>
           <Image src={artistImg} width={120} height={120} alt={name} className={styles.artistImg} />
            <p className={styles.artistName}>{name}</p>
            <p className={styles.sales}>
                <span className={styles.salesText1}>Total Sales: </span>
                <span className={styles.salesText2}>34.53 ETH</span>
            </p>
            <div className={styles.artistId}>{id}</div> 
        </div>
    )
}

export default Creator;
