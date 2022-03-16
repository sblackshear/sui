import Head from 'next/head';

import Footer from '../footer/Footer';
import Link from '../link/Link';
import PageHeadline from '../page-headline/PageHeadline';
import ProductCard from '../product-card/ProductCard';
import Section from '../section/Section';
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
                <Section
                    id="ecosystem"
                    label="Ecosystem"
                    title="What we're building"
                    description="Mysten Labs is built to accelerate the adoption of web3. Let us build the foundation of web3. You will create the products of tomorrow."
                >
                    <div className="grid col-2">
                        <ProductCard
                            icon="sui"
                            iconBg="blue-pattern"
                            title="Sui"
                            description="Sui is a decentralized, proof of stake blockchain with horizontally scalable throughput and storage."
                            href="https://sui.io" // TODO: is this correct?
                            external={true}
                        />
                        <ProductCard
                            icon="move"
                            iconBg="linear-gradient-1"
                            title="Move"
                            description="Move is an open-source programming language for building smart contracts."
                            href="https://sui.io" // TODO: link to move
                            external={true}
                        />
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
