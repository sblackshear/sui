import Logo from '../logo/Logo';

import st from './TopNavHeader.module.scss';

function TopNavHeader() {
    return (
        <header>
            <nav>
                <ol className={st['nav-list']}>
                    <li>
                        <Logo />
                    </li>
                </ol>
            </nav>
        </header>
    );
}

export default TopNavHeader;
