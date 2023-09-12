import { Work_Sans } from 'next/font/google';
import { rankings } from '../../mock/data';
import RankingItem from './RankingItem';
import styles from './Rankings.module.scss';
import { useState } from 'react';

const work_sans = Work_Sans({ subsets: ['latin'] });

const Rankings = () => {
  const [activeTime, setActiveTime] = useState<string>('Today');

  const handleTimeClick = (time: string) => {
    setActiveTime(time);
  };

  const filteredRankings = (() => {
    switch (activeTime) {
      case 'Today':
        return rankings.filter(ranking => ranking.id <= 5);
      case 'This Week':
        return rankings.filter(ranking => ranking.id <= 10);
      case 'This Month':
        return rankings.filter(ranking => ranking.id <= 15);
      default:
        return rankings;
    }
  })();

  return (
    <div className={`${styles.container} ${work_sans.className}`}>
      <h2 className={styles.title}>Top Creators</h2>
      <p className={styles.description}>
        Check out top ranking NFT artists on the NFT Marketplace.
      </p>
      <div className={styles.times}>
        <div
          className={`${styles.timesBlock} ${activeTime === 'Today' ? styles.activeLine : ''}`}
          onClick={() => setActiveTime('Today')}
        >
          <p className={`${styles.timesText} ${activeTime === 'Today' ? styles.activeWord : ''}`}>
            Today
          </p>
        </div>
        <div
          className={`${styles.timesBlock} ${activeTime === 'This Week' ? styles.activeLine : ''}`}
          onClick={() => handleTimeClick('This Week')}
        >
          <p
            className={`${styles.timesText} ${activeTime === 'This Week' ? styles.activeWord : ''}`}
          >
            This Week
          </p>
        </div>
        <div
          className={`${styles.timesBlock} ${activeTime === 'This Month' ? styles.activeLine : ''}`}
          onClick={() => handleTimeClick('This Month')}
        >
          <p
            className={`${styles.timesText} ${
              activeTime === 'This Month' ? styles.activeWord : ''
            }`}
          >
            This Month
          </p>
        </div>
        <div
          className={`${styles.timesBlock} ${activeTime === 'All Time' ? styles.activeLine : ''}`}
          onClick={() => handleTimeClick('All Time')}
        >
          <p
            className={`${styles.timesText} ${activeTime === 'All Time' ? styles.activeWord : ''}`}
          >
            All Time
          </p>
        </div>
      </div>
      <div className={styles.tableHeader}>
        <div className={styles.artistBlock}>
          <p className={styles.sharp}>#</p>
          <p className={styles.artist}>Artist</p>
        </div>
        <div className={styles.aboutNft}>
          <p className={styles.change}>Change</p>
          <p className={styles.nftSold}>NFTs Sold</p>
          <p className={styles.volume}>Volume</p>
        </div>
      </div>
      <div className={styles.tableItems}>
        {filteredRankings.map(ranking => (
          <RankingItem key={ranking.id} {...ranking} />
        ))}
      </div>
    </div>
  );
};

export default Rankings;
