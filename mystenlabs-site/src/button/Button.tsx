import { useButtonProps } from '@restart/ui/Button';
import cl from 'classnames';
import { forwardRef, memo, useMemo } from 'react';

import type {
    ButtonProps as RestartBtnProps,
    UseButtonPropsOptions,
} from '@restart/ui/Button';
import type { ForwardedRef } from 'react';

import st from './Button.module.scss';

export type ButtonProps = RestartBtnProps & {
    variant?: 'link' | 'linkPlain' | 'btn';
    btnStyle?: 'primary' | 'secondary' | 'alternative';
};

function Button<T>(props: ButtonProps, ref: ForwardedRef<T>) {
    const {
        disabled,
        href,
        as: tagName,
        target,
        rel,
        onClick,
        tabIndex,
        type,
        variant = 'btn',
        btnStyle = 'primary',
    } = props;
    const options: UseButtonPropsOptions = useMemo(() => {
        return {
            tagName,
            disabled,
            href,
            target,
            rel,
            onClick,
            tabIndex,
            type,
        };
    }, [tagName, disabled, href, target, rel, onClick, tabIndex, type]);
    const [ariaBtnProps, { tagName: Tag }] = useButtonProps(options);
    const cls = cl(
        props.className,
        {
            [st.btn]: variant === 'btn',
            [st.link]: variant === 'link' || variant === 'linkPlain',
            [st.plain]: variant === 'linkPlain',
            [st.disabled]: disabled,
        },
        st[btnStyle]
    );
    const { variant: _1, btnStyle: _2, ...passProps } = props;
    return <Tag ref={ref} {...passProps} {...ariaBtnProps} className={cls} />;
}

export default memo(forwardRef(Button));
