import { openNavSideBarAtom } from '@/services/store';
import { useAtom } from 'jotai';
import NavMenuSideBar from './NavMenuSideBar';
import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect } from 'react';

const NavSideBar = () => {
    const [openNavSideBar, setOpenNavSideBar] = useAtom(openNavSideBarAtom);
    // const size = useWindowSize()

    // // Let's close the side bar if the width gets too wide
    // useEffect(() => {
    //     if (!size.width) return
    //     if (size.width > 768 && openNavSideBar) {
    //         setOpenNavSideBar(false)
    //     }
    // }, [openNavSideBar, setOpenNavSideBar, size.width])

    const toggleSidebar = () => {
        setOpenNavSideBar((state) => !state);
    };

    return (
        <>
            <div className={`fixed inset-0 z-40 bg-black opacity-50 transition-opacity ${openNavSideBar ? 'block' : 'hidden'}`} onClick={() => toggleSidebar()}></div>
            <div className={`top-0 z-50 left-0 w-[80vw] max-w-xs bg-base-300 p-10 pl-20 text-white fixed h-full ease-in-out duration-300 transform ${openNavSideBar ? 'translate-x-0 ' : '-translate-x-full'}`}>
                <NavMenuSideBar openMenu={true} />
            </div>
        </>
    );
};

export default NavSideBar;
