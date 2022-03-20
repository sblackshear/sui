import Head from 'next/head';

import ActionBox from '../action-box/ActionBox';
import Footer from '../footer/Footer';
import Logo from '../logo/Logo';
import PageHeadline from '../page-headline/PageHeadline';
import Section from '../section/Section';
import TeamMembersSection from '../team-members/TeamMembersSection';
import TopNavHeader from '../top-nav-header/TopNavHeader';

import type { NextPage } from 'next';

import st from '../styles/pages/AboutUs.module.scss';

const AboutUs: NextPage = () => {
    const nextSectionHref = '#company';
    const nextSectionHrefExternal = false;
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
                    nextSectionHref={nextSectionHref}
                    nextSectionHrefExternal={nextSectionHrefExternal}
                    bg="alternative"
                >
                    <div>
                        Mysten Labs was built to accelerate the adoption of
                        web3.{' '}
                        <span className="color-primary">
                            Let us build the foundations
                        </span>{' '}
                        while you create the products of tomorrow.
                    </div>
                </PageHeadline>
                <Section
                    id="company"
                    label="What we believe in"
                    title="About Mysten Labs"
                    layout="split"
                >
                    <div className={st.container}>
                        <div className={st.title}>Mission</div>
                        <div className={st.description}>
                            Web3 will enable individuals and creators to have
                            unprecedented ownership over their own data and
                            content. But the tools to get there don&apos;t exist
                            yet. Mysten is where the brightest minds solve
                            foundational problems to create tools for the
                            future. We will make web3 secure, reliable and ready
                            for mass adoption.
                        </div>
                        <div className={st.title}>Culture</div>
                        <div className={st.description}>
                            Our founding team has extensive experience in
                            building and growing high-throughput organizations.
                            Mysten will be no different — we will execute in
                            parallel on a full pipeline of projects in various
                            stages: research, development, productization, and
                            growth. In everything we do, we will apply the
                            scientific and engineering rigor required to create
                            trustworthy systems that operate in an adversarial
                            environment.
                        </div>
                    </div>
                    <div className={st.img}>
                        <Logo variant="icon" size="huge" />
                    </div>
                </Section>
                <TeamMembersSection />
                <ActionBox />
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
