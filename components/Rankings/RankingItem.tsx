import styles from './Rankings.module.scss';
import Image from 'next/image';
import { FC } from 'react';
import { IRankings } from '../../types/rankings.interface';

const RankingItem: FC<IRankings> = ({ id, image, name }) => {
  return (
    <div className={styles.tableItem}>
      <div className={styles.left}>
        <div className={styles.artistId}>{id}</div>
        <Image src={image} width={60} height={60} alt={name} className={styles.artistImg} />
        <p className={styles.artistName}>{name}</p>
      </div>
      <div className={styles.right}>
        <p className={`${styles.rightText} ${styles.rightPercent}`}>+1.41%</p>
        <p className={`${styles.rightText} ${styles.rightPrice}`}>602</p>
        <p className={`${styles.rightText} ${styles.rightCurrency}`}>12.4 ETH</p>
      </div>
    </div>
  );
};

export default RankingItem;
