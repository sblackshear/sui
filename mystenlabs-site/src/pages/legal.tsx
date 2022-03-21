import cl from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';

import favIcon from '../assets/images/logo.svg';
import Footer from '../footer/Footer';
import Privacy from '../legal/Privacy';
import Terms from '../legal/Terms';
import Link from '../link/Link';
import TopNavHeader from '../top-nav-header/TopNavHeader';

import type { NextPage } from 'next';
import type { FunctionComponent } from 'react';

import st from '../styles/pages/Legal.module.scss';

type Tabs = 'terms' | 'privacy';
const tabParam = 'content';
const tabToContent: Record<Tabs, FunctionComponent> = {
    terms: Terms,
    privacy: Privacy,
};

const Legal: NextPage = () => {
    const { query, pathname } = useRouter();
    let param = query?.[tabParam];
    if (Array.isArray(param)) {
        param = param[0];
    }
    const selectedTab: Tabs =
        param && param in tabToContent ? (param as unknown as Tabs) : 'terms';
    const ContentCmp = tabToContent[selectedTab];
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
                <link rel="icon" href={favIcon.src} />
            </Head>
            <TopNavHeader />
            <main className="page-main">
                <div className={st['page-headline']}>
                    <div className={st['cube-1']} />
                    <div className={st['cube-2']} />
                    <h1 className={st.title}>Legal Information</h1>
                </div>
                <div className={st.content}>
                    <div className={st.tabs}>
                        <Link
                            to={`${pathname}?${tabParam}=terms`}
                            external={false}
                            variant="linkPlain"
                            className={cl(st.tab, {
                                [st.selected]: selectedTab === 'terms',
                            })}
                            scroll={false}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            to={`${pathname}?${tabParam}=privacy`}
                            external={false}
                            variant="linkPlain"
                            className={cl(st.tab, {
                                [st.selected]: selectedTab === 'privacy',
                            })}
                            scroll={false}
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <div className={st['tab-content']}>
                        <ContentCmp />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Legal;
