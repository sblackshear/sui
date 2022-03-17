import cl from 'classnames';
import { memo } from 'react';

import Link from '../link/Link';

import st from './InvestorBadge.module.scss';

export type InvestorBadgeProps = {
    highlight?: boolean;
    name: string;
    img: string;
    href: string;
};

function InvestorBadge({
    highlight = false,
    name,
    img,
    href,
}: InvestorBadgeProps) {
    return (
        <div className={cl(st.container, { [st.highlight]: highlight })}>
            <Link variant="linkPlain" to={href} external={true}>
                {/* TODO: can we use @next/img for static site? check} */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={name} loading="lazy" className={st.img} />
            </Link>
        </div>
    );
}

export default memo(InvestorBadge);
