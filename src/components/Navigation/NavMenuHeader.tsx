import { NavigationMenuLink } from './NavigationLink';
import { usePathname } from 'next/navigation';

interface NavigationMenuProps {
    className?: string;
    openMenu: boolean;
}

export const NavMenuHeader = (props: NavigationMenuProps) => {
    const path = usePathname();

    return (
        <nav className={`${props.openMenu ? 'block fixed top-0 left-0 w-full h-full bg-base-200 z-50 transform translate-y-16' : 'hidden'} md:block`}>
            <ul className="flex-col flex md:flex-row font-bold divide-y md:divide-y-0 ">
                <NavigationMenuLink linkTo="/" isActive={path === '/'}>
                    Home
                </NavigationMenuLink>
                <NavigationMenuLink linkTo="/somepage" isActive={path.startsWith('/somepage')} >
                    Some Page
                </NavigationMenuLink>
                <NavigationMenuLink linkTo="/anotherpage" isActive={path.startsWith('/anotherpage')}>
                    Another Page
                </NavigationMenuLink>
                <NavigationMenuLink linkTo="/profile" isActive={path.startsWith('/profile')}>
                    Profile
                </NavigationMenuLink>
            </ul>
        </nav>
    );
};

export default NavMenuHeader;
