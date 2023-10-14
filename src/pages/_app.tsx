import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layouts/Layout';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const p = usePathname();
    //const origin = window.location.origin;

    return (
        <UserProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UserProvider>
    );
}
