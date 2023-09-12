import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

const work_sans = Work_Sans({ subsets: ['latin'] });

const Footer = () => {
    return (
        <div className={`${styles.container} ${work_sans.className}`}>
            <div className={styles.threeColumns}>
                <div className={styles.firstColumn}>
                    <Link href={'/'} className={styles.logoBlock}>
                        <Image src={'/nav/Storefront.svg'} width={32} height={32} alt={'Logo'} className={styles.logo} />
                        <p className={styles.logoText}>NFT Marketplace</p>
                    </Link>
                    <p className={styles.description1}>NFT marketplace UI created with Anima for Figma.</p>
                    <p className={styles.description2}>Join our community</p>
                    <div className={styles.socialIcons}>
                        <Image src={'/socialNetworks/DiscordLogo.svg'} width={32} height={32} alt={'Discord'} className={styles.socialIcon} />
                        <Image src={'/socialNetworks/YoutubeLogo.svg'} width={32} height={32} alt={'Discord'} className={styles.socialIcon} />
                        <Image src={'/socialNetworks/TwitterLogo.svg'} width={32} height={32} alt={'Discord'} className={styles.socialIcon} />
                        <Image src={'/socialNetworks/InstagramLogo.svg'} width={32} height={32} alt={'Discord'} className={styles.socialIcon} />
                    </div>
                </div>
                <div className={styles.secondColumn}>
                    <p className={styles.secondTilte}>Explore</p>
                    <p className={styles.secondDescr}>
                        <Link href={'/marketplace'}>Marketplace</Link>
                    </p>
                    <p className={styles.secondDescr}>
                        <Link href={'/rankings'}>Rankings</Link>
                    </p>
                    <p className={styles.secondDescr}>
                        <Link href={'/wallet'}>Connect a wallet</Link>
                    </p>
                </div>
                <div className={styles.thirdColumn}>
                    <p className={styles.thirdTitle}>Join our weekly digest</p>
                    <p className={styles.thirdDescr}>Get exclusive promotions & updates straight to your inbox.</p>
                    <form className={styles.subscribeForm}>
                        <input type="text" placeholder='Enter your email here' className={styles.input} />
                        <button className={styles.btnWidget}>
                            <Image src={'/EnvelopeSimple.svg'} width={20} height={20} alt={'Envelope'} className={styles.envelope} />
                            <p>Subscribe</p>
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.hr}></div>
            <p className={styles.copyright}>&copy; NFT Market. Use this template freely.</p>
        </div>
    )
}

export default Footer;
