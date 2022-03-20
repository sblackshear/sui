import cl from 'classnames';
import React, { Children, memo, useMemo } from 'react';
import { useParallax } from 'react-scroll-parallax';

import Link from '../link/Link';

import type { ReactNode, RefObject } from 'react';

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
    const optionsTop: Parameters<typeof useParallax>[0] = {
        easing: 'easeInOut',
        translateY: [100, -50],
    };
    const optionsBottom: Parameters<typeof useParallax>[0] = {
        easing: 'easeInOut',
        translateY: [0, -100],
    };
    const { ref: leftTopRef } = useParallax(optionsTop);
    const { ref: rightTopRef } = useParallax(optionsTop);
    const { ref: leftBottomRef } = useParallax(optionsBottom);
    const { ref: rightBottomRef } = useParallax(optionsBottom);
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
            <div
                ref={leftTopRef as RefObject<HTMLDivElement>}
                className={cl(st[bg], st['cube-top-left'])}
            />
            <div
                ref={leftBottomRef as RefObject<HTMLDivElement>}
                className={cl(st[bg], st['cube-bottom-left'])}
            />
            <div
                ref={rightTopRef as RefObject<HTMLDivElement>}
                className={cl(st[bg], st['cube-top-right'])}
            />
            <div
                ref={rightBottomRef as RefObject<HTMLDivElement>}
                className={cl(st[bg], st['cube-bottom-right'])}
            />
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
