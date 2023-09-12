import Image from 'next/image';
import { Work_Sans } from 'next/font/google';

import styles from './Hero.module.scss';
import { heroInfo } from '../../mock/data';
import Info from './Info';

const work_sans = Work_Sans({ subsets: ['latin'] });

const Hero = () => {
    return (
        <div className={`${styles.container} ${work_sans.className}`}>
            <div className={styles.left}>
                <h1 className={styles.mainText}>Discover digital art & Collect NFTs</h1>
                <p className={styles.description}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <button className={styles.startBtn}>
                    <Image src={'/RocketLaunch.svg'} width={20} height={20} alt={'Rocket Launch'} className={styles.rocket} />
                    <p className={styles.btnStartText}>Get Started</p>
                </button>
                <div className={styles.info}>
                    {heroInfo.map(info => (
                        <Info key={info.id} {...info} />
                    ))}
                </div>
            </div>
            <div className={styles.right}>
                <Image src={'/hero.png'} priority={true} width={510} height={401} alt={'Hero Image'} className={styles.heroImg} />
                <div className={styles.underHeroImg}>
                    <p className={styles.underHeroText}>Space Walking</p>
                    <div className={styles.artistCard}>
                        <Image src={'/artists/animakid.png'} width={24} height={24} alt={'Avatar Image'} className={styles.avatar} />
                        <p className={styles.artistName}>Animakid</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
