import cl from 'classnames';
import React, { Children, memo, useMemo } from 'react';

import Link from '../link/Link';

import type { ReactNode } from 'react';

import st from './PageHeadline.module.scss';

export type PageHeadlineProps = {
    size?: 'full' | 'half';
    children: (string | ReactNode) | (string | ReactNode)[];
    nextSectionHref?: string;
    nextSectionHrefExternal?: boolean;
};

function PageHeadline({
    size = 'full',
    children,
    nextSectionHref,
    nextSectionHrefExternal,
}: PageHeadlineProps) {
    const [headline, actions] = useMemo(() => {
        const [el1, ...rest] = Children.toArray(children);
        return [el1, rest];
    }, [children]);
    const hasActions = !!actions.length;
    const showArrow = size === 'full';
    if (showArrow && !nextSectionHref) {
        throw Error(
            'Href for next section must be provided when arrow is shown'
        );
    }
    return (
        <div className={cl(st[size], st.container)}>
            <div className={st.center}>
                <div className={st.headline}>{headline}</div>
                {hasActions ? (
                    <div className={st.actions}>{actions}</div>
                ) : null}
            </div>
            {showArrow ? (
                <Link
                    to={nextSectionHref || ''}
                    variant="linkPlain"
                    external={nextSectionHrefExternal}
                >
                    <span className={st['arrow']} />
                </Link>
            ) : null}
        </div>
    );
}

export default memo(PageHeadline);
