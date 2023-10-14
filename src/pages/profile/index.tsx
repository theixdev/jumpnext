import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const ProfilePage = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>{error.message}</div>;

    if (user)
        return (
            <div className="flex-grow flex flex-col w-full h-full justify-center items-center bg-base-100 text-base-content">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={user.picture!} alt={user.name!} />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>
        );

    return <Link href="/api/auth/login">Login</Link>;
};
export default ProfilePage;
