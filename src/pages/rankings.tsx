import Rankings from '../../components/Rankings/Rankings';
import Layout from "./layout";
import Head from 'next/head';

const rankings = () => {
    return (
        <Layout>
            <Head>
                <title>Rankings</title>
                <meta name="description" content="Rankings" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Rankings />
        </Layout>
    )
}

export default rankings
