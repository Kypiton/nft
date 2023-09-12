import CreateAccount from "../../components/CreateAccount/CreateAccount";
import Layout from "./layout";
import Head from 'next/head';

const Signup = () => {
    return (
        <Layout>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Sign Up" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CreateAccount />
        </Layout>
    )
}

export default Signup;
