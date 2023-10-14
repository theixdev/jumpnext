import avatarPlaceHolder from '@/assets/avatar-placeholder.png';
import { LoginButton } from './LoginButton';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';

export const Avatar = () => {
    const { user } = useUser();
    const imageUrl = !user || !user?.picture ? avatarPlaceHolder.src : user.picture;

    return (
        <div className="dropdown dropdown-end">
            {/* Avatar /> */}
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar h-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt={'Avatar'} className="rounded-full h-12" />
            </label>
            {/* Menu /> */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <div className="divider"></div>
                <li>
                    <Link href="/api/auth/logout">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Avatar;
