import cl from 'classnames';
import { memo } from 'react';

import Link from '../link/Link';

import st from './ProductCard.module.scss';

export type ProductCardProps = {
    icon: 'sui' | 'move';
    iconBg: 'blue-pattern' | 'linear-gradient-1';
    title: string;
    href: string;
    external: boolean;
    description: string;
};

function ProductCard({
    icon,
    iconBg,
    title,
    href,
    description,
    external,
}: ProductCardProps) {
    return (
        <div className={st.card}>
            <div className={st['img-container']}>
                <div className={cl(st[iconBg], st.bg)} />
                <span className={cl(st[icon], st.icon)} />
            </div>
            <h3 className={st.title}>{title}</h3>
            <div className={st.description}>{description}</div>
            <Link
                to={href}
                variant="btn"
                btnStyle="alternative"
                external={external}
            >
                Learn More
            </Link>
        </div>
    );
}

export default memo(ProductCard);
