import { memo } from 'react';

import st from './LegalTitle.module.scss';

export type LegalTitleProps = {
    title: string;
    subTitle: string;
};

function LegalTitle({ title, subTitle }: LegalTitleProps) {
    return (
        <div className={st.container}>
            <h2 className={st.title}>{title}</h2>
            <h3 className={st.subtitle}>{subTitle}</h3>
        </div>
    );
}

export default memo(LegalTitle);
