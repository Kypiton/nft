import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import { howItWorks } from '../../mock/data';
import styles from './HowItWorks.module.scss';
import HowItWorksCard from './HowItWorksCard';

const work_sans = Work_Sans({ subsets: ['latin'] });

const HowItWorks = () => {
    return (
        <div className={`${styles.container} ${work_sans.className}`}>
            <h2 className={styles.title}>How it works</h2>
            <p className={styles.description}>Find out how to get started</p>
            <div className={styles.cards}>
                {howItWorks.map(el => (
                    <HowItWorksCard key={el.id} {...el} />
                ))}
            </div>
        </div>
    )
}

export default HowItWorks;
