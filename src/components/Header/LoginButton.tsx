import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

export const LoginButton = (props: { className?: string }) => {
    const className = twMerge('min-h-12 btn btn-primary btn-sm', props.className);

    const path = usePathname();
    console.log(path);
    return (
        <button
            className={className}
            onClick={() => {
                window.location.href = '/api/auth/login';
            }}
        >
            Log in
        </button>
    );
};

export default LoginButton;
