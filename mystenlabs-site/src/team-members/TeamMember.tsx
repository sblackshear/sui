import { memo, useMemo } from 'react';

import Link from '../link/Link';
import Logo from '../logo/Logo';

import st from './TeamMember.module.scss';

export type TeamMemberProps = {
    img?: string;
    linkedInHref?: string;
    twitterHref?: string;
    name: string;
    position: string;
};

function TeamMember({
    img,
    linkedInHref,
    twitterHref,
    name,
    position,
}: TeamMemberProps) {
    const socialLinks = useMemo(
        () =>
            [
                { href: linkedInHref, cls: st.linkedin },
                { href: twitterHref, cls: st.twitter },
            ].filter((item) => !!item.href),
        [linkedInHref, twitterHref]
    );
    return (
        <div className={st.container}>
            <div className={st['img-container']}>
                {img ? (
                    // TODO: can we use @next/img for static site? check
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={img}
                        alt={name}
                        className={st.img}
                        loading="lazy"
                    />
                ) : (
                    <Logo
                        layout="top"
                        variant="icon"
                        size="big"
                        className={st.logo}
                    />
                )}
            </div>
            <span className={st.name}>{name}</span>
            <span className={st.position}>{position}</span>
            {socialLinks.length ? (
                <div className={st.social}>
                    {socialLinks.map((aLink) => (
                        <Link
                            to={aLink.href || ''}
                            variant="linkPlain"
                            external={true}
                            key={aLink.href}
                        >
                            <span className={aLink.cls} />
                        </Link>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default memo(TeamMember);
