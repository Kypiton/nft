import ConnectWallet from "../../components/ConnectWallet/ConnectWallet";
import Layout from "./layout";
import Head from 'next/head';

const Signup = () => {
    return (
        <Layout>
            <Head>
                <title>Wallet</title>
                <meta name="description" content="Connect Wallet" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ConnectWallet />
        </Layout>
    )
}

export default Signup;
