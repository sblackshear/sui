import cl from 'classnames';
import { Children, memo, useMemo } from 'react';

import type { ReactNode } from 'react';

import st from './Section.module.scss';

export type SectionProps = {
    id: string;
    label: string;
    title: string;
    description?: string;
    children: ReactNode | ReactNode[];
    variant?: 'primary' | 'secondary' | 'transparent';
    layout?: 'split' | 'stack';
};

function Section({
    id,
    label,
    title,
    description,
    children,
    variant = 'primary',
    layout = 'stack',
}: SectionProps) {
    const info = (
        <>
            <h6 className={st.label}>{label}</h6>
            <h3 className={st.title}>{title}</h3>
            {description ? (
                <div className={st.description}>{description}</div>
            ) : null}
        </>
    );
    const isSplit = layout === 'split';
    const [item1, restItems] = useMemo(() => {
        const [first, ...rest] = Children.toArray(children);
        return [first, rest];
    }, [children]);
    if (isSplit && restItems.length === 0) {
        throw Error(
            'At least 2 child elements are expected when layout is split'
        );
    }
    return (
        <section id={id} className={cl(st.section, st[variant], st[layout])}>
            {isSplit ? (
                <div className={st.info}>
                    {info}
                    {item1}
                </div>
            ) : (
                info
            )}
            <div className={st.content}>{isSplit ? restItems : children}</div>
        </section>
    );
}

export default memo(Section);
