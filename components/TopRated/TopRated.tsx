import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import styles from './TopRated.module.scss';
import { creators } from '../../mock/data';
import Creator from './Creator';

const work_sans = Work_Sans({ subsets: ['latin'] });

const TopRated = () => {
    return (
        <div className={`${styles.container} ${work_sans.className}`}>
            <div className={styles.creatorsSection}>
                <div className={styles.creatorsText}>
                    <h2 className={styles.title}>Top creators</h2>
                    <p className={styles.description}>Checkout Top Rated Creators on the NFT Marketplace</p>
                </div>
                <button className={styles.btnRocket}>
                    <Image src={'/RocketLaunch_purple.svg'} width={20} height={20} alt={'Rocket Launch'} className={styles.rocket} />
                    <p className={styles.btnText}>View Rankings</p>
                </button>
            </div>
            <div className={styles.artistCards}>
                {creators.map(creator => (
                    <Creator key={creator.id} {...creator} />
                ))}
            </div>
        </div>
    )
}

export default TopRated;
