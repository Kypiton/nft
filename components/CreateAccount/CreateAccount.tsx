import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import styles from './CreateAccount.module.scss';

const work_sans = Work_Sans({ subsets: ['latin'] });

const CreateAccount = () => {
  return (
    <div className={`${styles.container} ${work_sans.className}`}>
      <Image
        src={'/signUpImg.png'}
        priority={true}
        width={610}
        height={691}
        alt={'Create Account Image'}
        className={styles.signUpImg}
      />
      <div className={styles.signupBlock}>
        <h1 className={styles.title}>Create account</h1>
        <p className={styles.description}>
          Welcome! Enter your details and start creating, collecting and selling NFTs.
        </p>
        <form className={styles.signupForm}>
          <Image
            src={'/nav/UserGrey.svg'}
            width={20}
            height={20}
            alt={'User'}
            className={styles.iconUser}
          />
          <input className={styles.formInput} placeholder={'Username'} type='text' />
          <Image
            src={'/EnvelopeGrey.svg'}
            width={20}
            height={20}
            alt={'Envelope'}
            className={styles.envelopeIcon}
          />
          <input className={styles.formInput} placeholder={'Email Address'} type='text' />
          <Image
            src={'/LockKey.svg'}
            width={20}
            height={20}
            alt={'Lock Key'}
            className={styles.lockKey1}
          />
          <input className={styles.formInput} placeholder={'Password'} type='text' />
          <Image
            src={'/LockKey.svg'}
            width={20}
            height={20}
            alt={'Lock Key'}
            className={styles.lockKey2}
          />
          <input className={styles.formInput} placeholder={'Confirm Password'} type='text' />
          <button className={styles.signupBtn}>Create account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
