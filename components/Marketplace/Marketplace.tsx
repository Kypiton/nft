import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import styles from './Marketplace.module.scss';
import { marketplaces } from '../../mock/data';
import Item from './Item';
import { useState, useEffect } from 'react';

const work_sans = Work_Sans({ subsets: ['latin'] });

const Marketplace = () => {
  const [items, setItems] = useState(marketplaces);
  const [searchInput, setSearchInput] = useState('');
  const [activeTab, setActiveTab] = useState('NFTs');

  const filteredMarketplaces = marketplaces.filter(marketplace => {
    return marketplace.nftName.toLowerCase().includes(searchInput.toLowerCase());
  });

  const switchToNFTs = () => {
    setActiveTab('NFTs');
  };

  const switchToCollections = () => {
    setActiveTab('Collections');
  };

  const changeArrToZero = () => {
    setItems([]);
  };

  useEffect(() => {
    changeArrToZero();
  }, []);

  return (
    <div className={`${styles.container} ${work_sans.className}`}>
      <h2 className={styles.title}>Browse Marketplace</h2>
      <p className={styles.description}>
        Browse through more than 50k NFTs on the NFT Marketplace.
      </p>
      <div className={styles.inputBlock}>
        <input
          type='text'
          className={styles.input}
          placeholder={'Search your favourite NFTs'}
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
        />
        <Image
          src={'/MagnifyingGlass.svg'}
          alt={'MagnifyingGlass'}
          width={24}
          height={24}
          className={styles.glass}
        />
      </div>
      <div className={styles.categories}>
        <div
          className={`${styles.category} ${activeTab === 'NFTs' ? styles.activeCategory : ''}`}
          onClick={switchToNFTs}
        >
          <p className={`${styles.nftsText} ${activeTab === 'NFTs' ? styles.activeText : ''}`}>
            NFTs
          </p>
          <div
            className={`${styles.nftsNumber} ${activeTab === 'NFTs' ? styles.activeNumber : ''}`}
          >
            {filteredMarketplaces.length}
          </div>
        </div>
        <div
          className={`${styles.category} ${
            activeTab === 'Collections' ? styles.activeCategory : ''
          }`}
          onClick={switchToCollections}
        >
          <p
            className={`${styles.nftsText} ${activeTab === 'Collections' ? styles.activeText : ''}`}
          >
            Collections
          </p>
          <div
            className={`${styles.nftsNumber} ${
              activeTab === 'Collections' ? styles.activeNumber : ''
            }`}
          >
            {items.length}
          </div>
        </div>
      </div>
      <div className={styles.nftCards}>
        {!filteredMarketplaces.length ? (
          <h2 className={styles.noNft}>There are no NFTs products.</h2>
        ) : activeTab === 'NFTs' ? (
          filteredMarketplaces.map(marketplace => <Item key={marketplace.id} {...marketplace} />)
        ) : (
          <h2 className={styles.noNft} style={{ marginTop: 20 }}>
            There are no NFTs products.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
