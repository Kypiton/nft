import Image from 'next/image';
import Link from 'next/link';
import { Work_Sans } from 'next/font/google';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './Header.module.scss';
import { useState } from 'react';

const work_sans = Work_Sans({ subsets: ['latin'] });

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`${styles.container} ${work_sans.className}`}>
      <header className={styles.header}>
        <Link href={'/'} className={styles.left}>
          <Image
            src={'/nav/Storefront.svg'}
            width={32}
            height={32}
            alt={'Logo'}
            className={styles.logo}
          />
          <p className={styles.logoText}>NFT Marketplace</p>
        </Link>
        <div className={styles.right}>
          <nav>
            <ul className={styles.ul}>
              <Link href={'/marketplace'} className={styles.list}>
                Marketplace
              </Link>
              <Link href={'/rankings'} className={styles.list}>
                Rankings
              </Link>
              <Link href={'/wallet'} className={styles.list}>
                Connect a wallet
              </Link>
              <Link href={'/signup'} className={`${styles.list} ${styles.signUp}`}>
                <Image
                  src={'/nav/User.svg'}
                  width={20}
                  height={20}
                  alt={'User'}
                  className={styles.user}
                />
                <p className={styles.signUpBtn}>Sign Up</p>
              </Link>
            </ul>
          </nav>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <RxHamburgerMenu />
        </div>
        {active && (
          <>
            <div className={styles.overlay} onClick={toggleMenu}></div>
            <div className={styles.mobileMenu}>
              <ul className={styles.mobileMenuList}>
                <li className={styles.mobileMenuItem}>
                  <Link href='/marketplace'>Marketplace</Link>
                </li>
                <li className={styles.mobileMenuItem}>
                  <Link href='/rankings'>Rankings</Link>
                </li>
                <li className={styles.mobileMenuItem}>
                  <Link href='/wallet'>Connect a wallet</Link>
                </li>
                <li className={`${styles.mobileMenuItem}`}>
                  <Link href='/signup'>Sign Up</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
