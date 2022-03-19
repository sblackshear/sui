import UiModal from '@restart/ui/Modal';
import cl from 'classnames';
import { memo } from 'react';

import Button from '../button/Button';

import type { ModalProps as UiModalProps } from '@restart/ui/Modal';

import st from './Modal.module.scss';

function Backdrop() {
    return <div className={st.backdrop} />;
}

export type ModalProps = UiModalProps & {
    showClose?: boolean;
};

function Modal(props: ModalProps) {
    const { className, showClose = false, children, ...restProps } = props;
    const cls = cl(className, st.modal);
    return (
        <UiModal {...restProps} className={cls} renderBackdrop={Backdrop}>
            <>
                {showClose ? (
                    <Button
                        variant="linkPlain"
                        onClick={props.onHide}
                        className={st.close}
                    />
                ) : null}
                <div className={st.content}>{children}</div>
            </>
        </UiModal>
    );
}

export default memo(Modal);
