import { openNavSideBarAtom } from '@/services/store';
import { useAtom, useSetAtom } from 'jotai';
import { NavigationMenuLink, NavigationMenuLinkProps } from './NavigationLink';
import { usePathname } from 'next/navigation';

interface NavigationMenuProps {
    className?: string;
    openMenu: boolean;
}

export const NavMenuSideBar = (props: NavigationMenuProps) => {
    const path = usePathname();
    const setOpenNavSideBar = useSetAtom(openNavSideBarAtom);

    const closeSideBar = () => {
        setOpenNavSideBar(false);
    };

    const navLinkProps: Partial<NavigationMenuLinkProps> = {
        onClick: closeSideBar,
        className: 'w-full h-full flex-growcursor-pointer py-4 hover:bg-base-300'
    };

    return (
        <nav className={'block fixed top-0 left-0 w-full h-full bg-base-200 z-50 transform translate-y-16'}>
            <ul className="flex-col flex font-bold divide-y  ">
                <NavigationMenuLink linkTo="/" isActive={path === '/'} {...navLinkProps}>
                    Home
                </NavigationMenuLink>
                <NavigationMenuLink linkTo="/somepage" isActive={path.startsWith('/somepage')} {...navLinkProps}>
                    Some Page
                </NavigationMenuLink>
                <NavigationMenuLink linkTo="/anotherpage" isActive={path.startsWith('/anotherpage')} {...navLinkProps}>
                    Another Page
                </NavigationMenuLink>
                <NavigationMenuLink linkTo="/profile" isActive={path.startsWith('/profile')} {...navLinkProps}>
                    Profile
                </NavigationMenuLink>
            </ul>
        </nav>
    );
};

export default NavMenuSideBar;
