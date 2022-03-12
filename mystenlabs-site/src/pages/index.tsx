import Head from 'next/head';

import Footer from '../footer/Footer';
import TopNavHeader from '../top-nav-header/TopNavHeader';

import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    MystenLabs - Creating Foundational Infrastructure For Web3.0
                </title>
                <meta
                    name="description"
                    content="Creating Foundational Infrastructure For Web3.0"
                />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <TopNavHeader />
            <main className={styles.main}></main>
            <Footer />
        </div>
    );
};

export default Home;
