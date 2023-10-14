import PageHeader from '@/components/Header/Header'
import { ReactNode, useEffect } from 'react'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/services/store'
import SuspenseFallback from '@/components/SuspenseFallback'
import { Suspense } from 'react'
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary'
import ErrorBoundaryFallback from '@/components/ErrorBoundaryFallback'

export interface LayoutProps {
    children?: ReactNode
}

export const Layout = (props: LayoutProps) => {
    const [darkMode] = useAtom(darkModeAtom)
    const theme = darkMode ? 'dark' : 'light'

    return (
        <div className=" min-h-screen w-full flex flex-col bg-base-100 text-base-content" data-theme={theme}>
            <PageHeader />
            <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                <Suspense fallback={<SuspenseFallback />}>{props.children}</Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default Layout
