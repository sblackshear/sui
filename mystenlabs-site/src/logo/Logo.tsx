import cl from 'classnames';

import st from './Logo.module.scss';

export type LogoProps = {
    variant?: 'left' | 'top';
};

function Logo({ variant = 'left' }: LogoProps) {
    return (
        <div className={cl(st.logo, st[variant])}>
            <span className={st['icon']} />
            <span className={st['txt']} />
        </div>
    );
}

export default Logo;
