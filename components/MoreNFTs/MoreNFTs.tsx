import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import styles from './MoreNFTs.module.scss';
import { moreNFTs } from '../../mock/data';
import NFTCard from './NFTCard';

const work_sans = Work_Sans({ subsets: ['latin'] });

const MoreNFTs = () => {
    return (
        <div className={`${styles.container} ${work_sans.className}`}>
            <div className={styles.nftsSection}>
                <div className={styles.nftsText}>
                    <h2 className={styles.title}>Discover More NFTs</h2>
                    <p className={styles.description}>Explore new trending NFTs</p>
                </div>
                <div>
                    <button className={styles.btnRocket}>
                        <Image src={'/Eye_purple.svg'} width={20} height={20} alt={'Eye Purple Icon'} className={styles.eye} />
                        <p className={styles.btnText}>See All</p>
                    </button>
                </div>
            </div>
            <div className={styles.nftsCards}>
                {moreNFTs.map(nft => (
                    <NFTCard key={nft.id} {...nft} />
                ))}
            </div>
        </div>
    )
}

export default MoreNFTs;
