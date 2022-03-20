import cl from 'classnames';
import Head from 'next/head';
import { useParallax } from 'react-scroll-parallax';

import ActionBox from '../action-box/ActionBox';
import Footer from '../footer/Footer';
import InvestorBadge from '../investor-badge/InvestorBadge';
import { allInvestors } from '../investor-badge/investors';
import LatestNews from '../latest-news/Container';
import Link from '../link/Link';
import PageHeadline from '../page-headline/PageHeadline';
import ProductCard from '../product-card/ProductCard';
import Section from '../section/Section';
import TeamMembersSection from '../team-members/TeamMembersSection';
import TopNavHeader from '../top-nav-header/TopNavHeader';
import TypingWords from '../typing-words/TypingWords';

import type { NextPage } from 'next';
import type { RefObject } from 'react';

import st from '../styles/pages/Home.module.scss';

const HIGHLIGHTED_INVESTORS = allInvestors.filter((i) => i.highlight);
const REST_INVESTORS = allInvestors.filter((i) => !i.highlight);
const WORDS = [
    'developers',
    'designers',
    'marketers',
    'connectors',
    'engineers',
    'economists',
];
const NEXT_SECTION_HREF = '/#ecosystem';
const NEXT_SECTION_HREF_EXTERNAL = false;

const Home: NextPage = () => {
    const optionsTop: Parameters<typeof useParallax>[0] = {
        easing: 'easeInOut',
        translateY: [-10, -60],
    };
    const { ref: topRef } = useParallax(optionsTop);
    const optionsBottom: Parameters<typeof useParallax>[0] = {
        easing: 'easeInOut',
        translateY: [50, -50],
    };
    const { ref: leftBottomRef } = useParallax(optionsBottom);
    const { ref: rightBottomRef } = useParallax(optionsBottom);
    return (
        <div className="page-container">
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
            <main className="page-main">
                <PageHeadline
                    nextSectionHref={NEXT_SECTION_HREF}
                    nextSectionHrefExternal={NEXT_SECTION_HREF_EXTERNAL}
                >
                    <div>
                        We are{' '}
                        <TypingWords words={WORDS} className="color-primary" />{' '}
                        bringing digital asset ownership to billions of people.
                    </div>
                    <Link
                        variant="btn"
                        to={NEXT_SECTION_HREF}
                        external={NEXT_SECTION_HREF_EXTERNAL}
                    >
                        Learn More
                    </Link>
                    <Link
                        variant="btn"
                        btnStyle="secondary"
                        to="/about-us"
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
                    <div className="grid col-2 gap-medium">
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
                <TeamMembersSection limit={8} forceLink={true} />
                <div className={st.boxes}>
                    <div
                        ref={topRef as RefObject<HTMLDivElement>}
                        className={st['cube-top']}
                    />
                    <div
                        ref={leftBottomRef as RefObject<HTMLDivElement>}
                        className={st['cube-bottom']}
                    />
                    <div
                        ref={rightBottomRef as RefObject<HTMLDivElement>}
                        className={st['cube-bottom-small']}
                    />
                    <Section
                        id="investors"
                        label="Investors"
                        title="Meet Our Backers"
                        description="Backed by top firms and visionaries"
                        variant="secondary"
                    >
                        <div className="grid col-2 gap-small">
                            {HIGHLIGHTED_INVESTORS.map((i) => (
                                <InvestorBadge key={i.href} {...i} />
                            ))}
                        </div>
                        <div
                            className={cl(
                                'grid',
                                'col-4',
                                'gap-small',
                                st.investors
                            )}
                        >
                            {REST_INVESTORS.map((i) => (
                                <InvestorBadge key={i.href} {...i} />
                            ))}
                        </div>
                    </Section>
                </div>
                <Section
                    id="community"
                    label="Community"
                    title="Latest news"
                    description="Stay informed on Mysten Labs and our recent developments"
                    variant="transparent"
                >
                    <LatestNews />
                </Section>
                <ActionBox />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
