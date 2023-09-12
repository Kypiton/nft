import Head from 'next/head'
import Hero from '../../components/Hero/Hero';
import Trending from '../../components/Trending/Trending';
import TopRated from '../../components/TopRated/TopRated';
import Browse from '../../components/Browse/Browse';
import MoreNFTs from '../../components/MoreNFTs/MoreNFTs';
import NFTInfo from '../../components/NFTInfo/NFTInfo';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import SubscribeWidget from '../../components/SubscribeWidget/SubscribeWidget';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="HomePage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Trending />
      <TopRated />
      <Browse />
      <MoreNFTs />
      <NFTInfo />
      <HowItWorks />
      <SubscribeWidget />
    </Layout>
  )
}
