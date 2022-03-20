import { memo, useCallback, useState } from 'react';

import Modal from './SubscriptionModal';

import st from './SubscribeTrigger.module.scss';

export type SubscribeTriggerProps = {};

function SubscribeTrigger({}: SubscribeTriggerProps) {
    const [isModalVisible, setModalVisible] = useState(false);
    const onHandleModalClose = useCallback(() => {
        setModalVisible(false);
    }, []);
    const onHandleTriggerClick = useCallback(() => {
        setModalVisible(true);
    }, []);
    return (
        <>
            <div className={st.container} onClick={onHandleTriggerClick}>
                <h4 className={st.title}>Subscribe to our newsletter</h4>
                <div className={st.description}>
                    Get the latest updates and news from Mysten Labs.
                </div>
                <span className={st.icon} />
            </div>
            <Modal show={isModalVisible} onClose={onHandleModalClose} />
        </>
    );
}

export default memo(SubscribeTrigger);
