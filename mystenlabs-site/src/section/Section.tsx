import cl from 'classnames';
import { memo } from 'react';

import type { ReactNode } from 'react';

import st from './Section.module.scss';

export type SectionProps = {
    id: string;
    label: string;
    title: string;
    description?: string;
    children: ReactNode | ReactNode[];
    variant?: 'primary' | 'secondary' | 'transparent';
};

function Section({
    id,
    label,
    title,
    description,
    children,
    variant = 'primary',
}: SectionProps) {
    return (
        <section id={id} className={cl(st.section, st[variant])}>
            <h6 className={st.label}>{label}</h6>
            <h3 className={st.title}>{title}</h3>
            {description ? (
                <div className={st.description}>{description}</div>
            ) : null}
            <div className={st.content}>{children}</div>
        </section>
    );
}

export default memo(Section);
