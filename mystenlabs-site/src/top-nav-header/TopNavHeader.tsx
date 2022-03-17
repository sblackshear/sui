import cl from 'classnames';

import Button from '../button/Button';
import Link from '../link/Link';
import Logo from '../logo/Logo';

import st from './TopNavHeader.module.scss';

function makeLink(label: string, to: string, external: boolean = true) {
    return { label, to, external };
}

const LINKS = [
    makeLink('Ecosystem', '/#ecosystem', false),
    makeLink('About Us', '/#about-us', false),
    makeLink('Community', '/#community', false),
    makeLink('Careers', 'https://jobs.lever.co/mystenlabs'),
];

const DISCORD_LINK = 'https://discord.gg/Tcfn7UdmAc';

function TopNavHeader() {
    return (
        <header className={st['top-nav-header']}>
            <nav>
                <ol className={st['nav-list']}>
                    <li className={st['nav-item']}>
                        <Link to="/" external={false} variant="linkPlain">
                            <Logo />
                        </Link>
                    </li>
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
                    <li className={cl(st['nav-item'], st['match-logo'])}>
                        <Link to={DISCORD_LINK} external={true} variant="btn">
                            Join Discord <span className={st['discord-icon']} />
                        </Link>
                    </li>
                </ol>
            </nav>
        </header>
    );
}

export default TopNavHeader;
