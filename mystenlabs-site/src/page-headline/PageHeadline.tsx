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
    bg?: 'normal' | 'alternative';
};

function PageHeadline({
    size = 'full',
    children,
    nextSectionHref,
    nextSectionHrefExternal,
    bg = 'normal',
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
            <div className={cl(st[bg], st['cube-top-left'])} />
            <div className={cl(st[bg], st['cube-bottom-left'])} />
            <div className={cl(st[bg], st['cube-top-right'])} />
            <div className={cl(st[bg], st['cube-bottom-right'])} />
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
