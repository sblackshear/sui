import Head from 'next/head';

import Footer from '../footer/Footer';
import Link from '../link/Link';
import PageHeadline from '../page-headline/PageHeadline';
import TopNavHeader from '../top-nav-header/TopNavHeader';

import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    const nextSectionHref = '/#ecosystem';
    const nextSectionHrefExternal = false;
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
            <main className={styles.main}>
                <PageHeadline
                    nextSectionHref={nextSectionHref}
                    nextSectionHrefExternal={nextSectionHrefExternal}
                >
                    <div>
                        We are devel| bringing digital asset ownership to
                        billions of people.
                    </div>
                    <Link
                        variant="btn"
                        to={nextSectionHref}
                        external={nextSectionHrefExternal}
                    >
                        Learn More
                    </Link>
                    <Link
                        variant="btn"
                        btnStyle="secondary"
                        to="/#about-us"
                        external={false}
                    >
                        About Us
                    </Link>
                </PageHeadline>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
