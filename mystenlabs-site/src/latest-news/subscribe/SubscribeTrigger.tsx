import { memo } from 'react';

import st from './SubscribeTrigger.module.scss';

export type SubscribeTriggerProps = {};

function SubscribeTrigger({}: SubscribeTriggerProps) {
    return (
        <div className={st.container}>
            <h4 className={st.title}>Subscribe to our newsletter</h4>
            {/* TODO: replace this text */}
            <div className={st.description}>
                Accumsan adipiscing eros scelerisque morbi. Volutpat eu.
            </div>
            <span className={st.icon} />
        </div>
    );
}

export default memo(SubscribeTrigger);
