import cl from 'classnames';
import { memo, useCallback, useRef, useState } from 'react';

import Button from '../../button/Button';
import Modal from '../../modal/Modal';

import st from './SubscriptionModal.module.scss';

async function doSubscription(email: string) {
    // TODO: implement
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
}

type Step = 'input' | 'complete';

export type SubscriptionModalProps = {
    show: boolean;
    onClose: () => void;
};

function SubscriptionModal({ show, onClose }: SubscriptionModalProps) {
    const [isInputTouched, setInputTouched] = useState(false);
    const [error, setError] = useState<string>('');
    const [step, setStep] = useState<Step>('input');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const onHandleHide = useCallback(() => {
        if (loading) {
            return;
        }
        setError('');
        setInputTouched(false);
        setStep('input');
        onClose();
    }, [onClose, loading]);
    const onHandleSignUp = useCallback(async (e) => {
        e.preventDefault();
        if (inputRef.current && e.target.checkValidity()) {
            const email = inputRef.current.value;
            setLoading(true);
            try {
                await doSubscription(email);
                setStep('complete');
            } catch (e) {
                setError(String(e));
            } finally {
                setLoading(false);
            }
        }
    }, []);
    const onHandleInputFocus = useCallback((e) => {
        setInputTouched(true);
        setError('');
    }, []);
    const onHandleInputBlur = useCallback((e) => {
        setError(e.target.validationMessage);
    }, []);
    const isInput = step === 'input';
    return (
        <Modal
            show={show}
            backdrop={true}
            onHide={onHandleHide}
            showClose={true}
        >
            <>
                <h1 className={st.title}>
                    {isInput
                        ? 'Subscribe to our newsletter'
                        : 'Thanks for signing up!'}
                </h1>
                <div className={st.description}>
                    {isInput
                        ? 'Stay informed on the latest developments and sneak peeks from Mysten Labs.'
                        : 'Subscription confirmed. No spam, only details.'}
                </div>
                {step === 'input' ? (
                    <>
                        <form
                            onSubmit={onHandleSignUp}
                            className={st.form}
                            noValidate
                        >
                            <input
                                type="email"
                                placeholder="Email address..."
                                className={cl(st.email, {
                                    [st.touched]: isInputTouched,
                                })}
                                onFocus={onHandleInputFocus}
                                onBlur={onHandleInputBlur}
                                required={true}
                                ref={inputRef}
                            />
                            <Button type="submit">
                                {loading ? '...' : 'Sign up'}
                            </Button>
                        </form>
                        <div className={st.error}>{error}</div>
                    </>
                ) : null}
            </>
        </Modal>
    );
}

export default memo(SubscriptionModal);
