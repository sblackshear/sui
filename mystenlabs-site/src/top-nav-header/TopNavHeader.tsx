import { Overlay } from '@restart/ui';
import cl from 'classnames';
import { useCallback, useRef, useState } from 'react';

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
    const targetRef = useRef(null);
    const containerRef = useRef(null);
    const menuLinks = (
        <ol className={cl(st['nav-list'], st['nav-item'], st['extend'])}>
            {LINKS.map((aLink) => (
                <li key={aLink.to} className={st['nav-item']}>
                    <Link {...aLink} className={st['nav-item-btn']} />
                </li>
            ))}
        </ol>
    );
    return (
        <header
            className={cl(st['top-nav-header'], {
                [st['menu-open']]: isMenuOpen,
            })}
            ref={containerRef}
        >
            <div className={st['menu-bg']} />
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
            <span className={st.divider} ref={targetRef} />
            <nav className={st.main}>
                <ol className={st['nav-list']}>
                    <li className={st['nav-item']}>
                        <Link to="/" external={false} variant="linkPlain">
                            <Logo logoTxtClassName={st['logo-txt']} />
                        </Link>
                    </li>
                    <div className={cl(st['inline-nav'], st['nav-item'])}>
                        {menuLinks}
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
            <Overlay
                placement="bottom-start"
                show={true}
                container={containerRef}
                target={targetRef}
                offset={[0, 50]}
            >
                {(props) => {
                    return (
                        <div {...props} className={st['overflow-menu']}>
                            {menuLinks}
                        </div>
                    );
                }}
            </Overlay>
        </header>
    );
}

export default TopNavHeader;
