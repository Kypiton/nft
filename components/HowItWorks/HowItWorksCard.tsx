import styles from './HowItWorks.module.scss';
import Image from 'next/image';
import { FC } from 'react';
import { IHowItWorks } from '../../types/howItWorks.interface';

const HowItWorksCard: FC<IHowItWorks> = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src={image} width={250} height={250} alt={title} className={styles.planet} />
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default HowItWorksCard;
