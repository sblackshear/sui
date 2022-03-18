import cl from 'classnames';

import st from './Logo.module.scss';

export type LogoProps = {
    layout?: 'left' | 'top';
    variant?: 'full' | 'icon';
    size?: 'normal' | 'huge';
    logoTxtClassName?: string;
};

function Logo({
    layout = 'left',
    variant = 'full',
    size = 'normal',
    logoTxtClassName,
}: LogoProps) {
    const showTxt = variant === 'full';
    return (
        <div className={cl(st.logo, st[layout], st[size])}>
            <span className={st['icon']} />
            {showTxt ? (
                <span className={cl(logoTxtClassName, st['txt'])} />
            ) : null}
        </div>
    );
}

export default Logo;
