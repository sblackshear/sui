import cl from 'classnames';
import { useCallback, useState } from 'react';

import Button from '../button/Button';
import Link from '../link/Link';
import Logo from '../logo/Logo';

import st from './TopNavHeader.module.scss';

function makeLink(label: string, to: string, external: boolean = true) {
    return { label, to, external };
}

const LINKS = [
    makeLink('Ecosystem', '/#ecosystem', false),
    makeLink('About Us', '/about-us', false),
    makeLink('Community', '/#community', false),
    makeLink('Careers', 'https://jobs.lever.co/mystenlabs'),
];

const DISCORD_LINK = 'https://discord.gg/Tcfn7UdmAc';

function TopNavHeader() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const onHandleMenuClick = useCallback(() => {
        setMenuOpen((state) => !state);
    }, []);
    return (
        <header
            className={cl(st['top-nav-header'], {
                [st['menu-open']]: isMenuOpen,
            })}
        >
            <Button
                variant="linkPlain"
                className={st.menu}
                as="span"
                onClick={onHandleMenuClick}
            >
                <span className={cl(st.line, st['line-1'])} />
                <span className={cl(st.line, st['line-2'])} />
                <span className={cl(st.line, st['line-3'])} />
            </Button>
            <span className={st.divider} />
            <nav className={st.main}>
                <ol className={st['nav-list']}>
                    <li className={st['nav-item']}>
                        <Link to="/" external={false} variant="linkPlain">
                            <Logo logoTxtClassName={st['logo-txt']} />
                        </Link>
                    </li>
                    <div className={cl(st['inline-nav'], st['nav-item'])}>
                        <ol
                            className={cl(
                                st['nav-list'],
                                st['nav-item'],
                                st['extend']
                            )}
                        >
                            {LINKS.map((aLink) => (
                                <li key={aLink.to} className={st['nav-item']}>
                                    <Link {...aLink} />
                                </li>
                            ))}
                        </ol>
                    </div>
                    <li className={cl(st['nav-item'], st['match-logo'])}>
                        <Link
                            to={DISCORD_LINK}
                            external={true}
                            variant="btn"
                            className={st.discord}
                        >
                            Join Discord <span className={st['discord-icon']} />
                        </Link>
                    </li>
                </ol>
            </nav>
        </header>
    );
}

export default TopNavHeader;
