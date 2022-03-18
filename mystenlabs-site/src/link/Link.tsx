import NextLink from 'next/link';
import { memo } from 'react';

import Button from '../button/Button';

import type { ButtonProps } from '../button/Button';
import type { ReactNode } from 'react';

export type LinkProps = {
    label?: string | ReactNode;
    to: string;
    external?: boolean; //TODO: remove this - detect from to field
    children?: ReactNode;
    variant?: ButtonProps['variant'];
    btnStyle?: ButtonProps['btnStyle'];
    disabled?: boolean;
    className?: string;
    scroll?: boolean;
};

function Link({
    label,
    to,
    external = true,
    children,
    variant = 'link',
    btnStyle,
    disabled = false,
    className,
    scroll = true,
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
            className={className}
        >
            {label || children}
        </Button>
    );
    if (external) {
        return link;
    }
    return (
        <NextLink href={to} scroll={scroll}>
            {link}
        </NextLink>
    );
}

export default memo(Link);
