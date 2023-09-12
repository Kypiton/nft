import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import styles from './NFTInfo.module.scss';

const work_sans = Work_Sans({ subsets: ['latin'] });

const NFTInfo = () => {
  return (
    <div className={`${styles.mushroom} ${work_sans.className}`}>
      <div className={styles.left}>
        <div className={styles.artistSection}>
          <Image
            src={'/artists/shroomie.png'}
            width={24}
            height={24}
            alt={'Shroomie'}
            className={styles.artist}
          />
          <p className={styles.artistName}>Shroomie</p>
        </div>
        <h2 className={styles.NFTName}>Magic Mashrooms</h2>
        <button className={styles.nftBtn}>
          <Image
            src={'/Eye_purple.svg'}
            width={24}
            height={24}
            alt={'Shroomie'}
            className={styles.eye}
          />
          <p className={styles.textNFT}>See NFT</p>
        </button>
      </div>
      <div className={styles.right}>
        <div className={styles.auctionTimer}>
          <p className={styles.auctionText}>Auction ends in:</p>
          <div className={styles.timer}>
            <p className={styles.timerDigit}>59</p>
            <p className={styles.timerDigit}>:</p>
            <p className={styles.timerDigit}>59</p>
            <p className={styles.timerDigit}>:</p>
            <p className={styles.timerDigit}>59</p>
          </div>
          <div className={styles.timerNames}>
            <p className={styles.timerName}>Hours</p>
            <p className={styles.timerName}>Minutes</p>
            <p className={styles.timerName}>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTInfo;
