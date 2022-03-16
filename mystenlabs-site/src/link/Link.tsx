import NextLink from 'next/link';
import { memo } from 'react';

import Button from '../button/Button';

import type { ButtonProps } from '../button/Button';
import type { ReactNode } from 'react';

export type LinkProps = {
    label?: string | ReactNode;
    to: string;
    external?: boolean;
    children?: ReactNode;
    variant?: ButtonProps['variant'];
    btnStyle?: ButtonProps['btnStyle'];
    disabled?: boolean;
};

function Link({
    label,
    to,
    external = true,
    children,
    variant = 'link',
    btnStyle,
    disabled = false,
}: LinkProps) {
    const target = external ? '_blank' : undefined;
    const link = (
        <Button
            href={to}
            target={target}
            variant={variant}
            rel="no-referrer"
            disabled={disabled}
            btnStyle={btnStyle}
        >
            {label || children}
        </Button>
    );
    if (external) {
        return link;
    }
    return <NextLink href={to}>{link}</NextLink>;
}

export default memo(Link);
