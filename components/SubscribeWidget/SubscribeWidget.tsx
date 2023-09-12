import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import styles from './SubscribeWidget.module.scss';

const work_sans = Work_Sans({ subsets: ['latin'] });

const SubscribeWidget = () => {
    return (
        <div className={`${styles.container} ${work_sans.className}`}>
            <div className={styles.widgetBlock}>
                <div className={styles.left}>
                    <Image src={'/astro.png'} width={425} height={310} alt={'Astro'} className={styles.astro} />
                </div>
                <div className={styles.right}>
                    <p className={styles.astroTitle}>Join our weekly digest</p>
                    <p className={styles.astroDescription}>Get exclusive promotions & updates straight to your inbox.</p>
                    <form className={styles.subscribeForm}>
                        <input type="text" placeholder='Enter your email here' className={styles.input} />
                        <button className={styles.btnWidget}>
                            <Image src={'/EnvelopeSimple.svg'} width={20} height={20} alt={'Envelope'} className={styles.envelope} />
                            <p>Subscribe</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscribeWidget;
