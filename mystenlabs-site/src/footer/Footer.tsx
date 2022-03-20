import cl from 'classnames';
import { useRouter } from 'next/router';
import { stringifyUrl } from 'query-string';

import Link from '../link/Link';
import Logo from '../logo/Logo';

import st from './Footer.module.scss';

const SOCIAL_LINKS = [
    // TODO: links
    { icon: 'fb', link: '' },
    { icon: 'twitter', link: 'https://twitter.com/mysten_labs' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/company/mysten-labs' },
    { icon: 'github', link: 'https://github.com/MystenLabs' },
];

// TODO: links
const SUI_LINK = '#';
const MOVE_LINK = '#';

function Footer() {
    const { pathname, query } = useRouter();
    const topLink = stringifyUrl({ url: pathname, query });
    return (
        <footer className={st.footer}>
            <div className={st.container}>
                <div className={st['logo']}>
                    <div className={st.main}>
                        <Logo layout="top" />
                    </div>
                    <div className={st.secondary}>
                        Connecting the brightest minds to solve foundational
                        problems and creating tools for the decentralized
                        future.
                    </div>
                    <div className={st.social}>
                        {SOCIAL_LINKS.map((aLink) => (
                            <Link
                                external={true}
                                to={aLink.link}
                                variant="linkPlain"
                                key={aLink.icon}
                            >
                                <span className={st[aLink.icon]} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={st.ecosystem}>
                    <div className={st.main}>Ecosystem</div>
                    <Link
                        external={true}
                        to={SUI_LINK}
                        variant="link"
                        className={cl(st.secondary, st.arrow)}
                    >
                        Sui
                    </Link>
                    <Link
                        external={true}
                        to={MOVE_LINK}
                        variant="link"
                        className={cl(st.secondary, st.arrow)}
                    >
                        Move
                    </Link>
                </div>
                <div className={st.company}>
                    <div className={st.main}>Company</div>
                    <Link
                        external={false}
                        to="/about-us"
                        variant="link"
                        className={st.secondary}
                    >
                        About Us
                    </Link>
                    <Link
                        external={false}
                        to="/#community"
                        variant="link"
                        className={st.secondary}
                    >
                        Community
                    </Link>
                    <Link
                        external={false}
                        to="/legal?content=terms"
                        variant="link"
                        className={st.secondary}
                    >
                        Terms of Service
                    </Link>
                    <Link
                        external={false}
                        to="/legal?content=privacy"
                        variant="link"
                        className={st.secondary}
                    >
                        Privacy Policy
                    </Link>
                </div>
                <div className={st['top-container']}>
                    <Link external={false} variant="linkPlain" to={topLink}>
                        <span className={st['top']} />
                    </Link>
                </div>
            </div>
            <div className={st.bottom}>
                <span>© 2022. Mysten Labs. All Rights Reserved.</span>
                <Link to="/legal?content=terms" external={false} variant="link">
                    Term &amp; Conditions
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
