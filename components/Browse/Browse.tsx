import { Work_Sans } from 'next/font/google';
import styles from './Browse.module.scss';
import Image from 'next/image';
import { browse } from '../../mock/data';

const work_sans = Work_Sans({ subsets: ['latin'] });

const Browse = () => {
    return (
        <div className={`${styles.container} ${work_sans.className}`}>
            <h2 className={styles.title}>Browse Categories</h2>
            <div className={styles.browseCards}>
                
                {browse.map(item => (
                    <div className={styles.browseCard} key={item.id}>
                        <Image src={item.bluredImg} width={240} height={240} alt={item.name} className={styles.browseBlured} />
                        <Image src={item.icon} width={100} height={100} alt={item.name} className={styles.browseIcon} />
                        <div className={styles.browseName}>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Browse;
