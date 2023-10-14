import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export interface NavigationMenuLinkProps {
    linkTo: string;
    children: React.ReactNode;
    isActive?: boolean;
    className?: string;
    onClick?: () => void;
}

export const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
    const { isActive, linkTo } = props;
    const className = twMerge('w-full flex-grow hover:bg-base-200 h-full px-3 py-3  ', [props.className, isActive && 'text-accent', props.className]);

    return (
        <li className={'flex flex-grow text-base-content '}>
            <Link
                className={className}
                href={{
                    pathname: linkTo
                }}
            >
                {props.children}
            </Link>
        </li>
    );
};
export default NavigationMenuLink;
