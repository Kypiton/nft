import Layout from "./layout";
import Head from 'next/head';
import Marketplace from "../../components/Marketplace/Marketplace";

const marketplace = () => {
    return (
        <Layout>
            <Head>
                <title>Marketplace</title>
                <meta name="description" content="Marketplace" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Marketplace />
        </Layout>
    )
}

export default marketplace;

