import { Work_Sans } from 'next/font/google';

import styles from './Trending.module.scss';
import { trendingCard } from '../../mock/data';
import TrendingCard from './TrendingCard';


const work_sans = Work_Sans({ subsets: ['latin'] });

const Trending = () => {
    return (
        <div className={`${styles.container} ${work_sans.className}`}>
            <h2 className={styles.trendingTitle}>Trending Collection</h2>
            <p className={styles.description}>Checkout our weekly updated trending collection.</p>
            <div className={styles.collectionCards}>
                {trendingCard.map(card => (
                    <TrendingCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Trending;
