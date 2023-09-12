import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import styles from './ConnectWallet.module.scss';

const work_sans = Work_Sans({ subsets: ['latin'] });

const ConnectWallet = () => {
  return (
    <div className={`${styles.container} ${work_sans.className}`}>
      <Image
        src={'/ConnectWallet.png'}
        priority={true}
        width={610}
        height={642}
        alt={'Connect Wallet'}
        className={styles.connectImg}
      />
      <div className={styles.block}>
        <h1 className={styles.title}>Connect wallet</h1>
        <p className={styles.description}>
          Choose a wallet you want to connect. There are several wallet providers.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <Image
              src={'/metamask.svg'}
              priority={true}
              width={40}
              height={41}
              alt={'Metamask'}
              className={styles.icon}
            />
            <p className={styles.text}>Metamask</p>
          </button>
          <button className={styles.button}>
            <Image
              src={'/WalletConnect.svg'}
              priority={true}
              width={40}
              height={41}
              alt={'Metamask'}
              className={styles.icon}
            />
            <p className={styles.text}>Wallet Connect</p>
          </button>
          <button className={styles.button}>
            <Image
              src={'/Coinbase.svg'}
              priority={true}
              width={40}
              height={41}
              alt={'Metamask'}
              className={styles.icon}
            />
            <p className={styles.text}>Coinbase</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
