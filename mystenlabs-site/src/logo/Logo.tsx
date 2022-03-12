import st from './Logo.module.scss';

function Logo() {
    return (
        <div className={st.logo}>
            <span className={st['icon']} />
            <span className={st['txt']} />
        </div>
    );
}

export default Logo;
