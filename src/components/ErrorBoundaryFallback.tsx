import { FallbackProps } from 'react-error-boundary'

export const ErrorBoundaryFallback = (props: FallbackProps) => {
    return (
        <div className="flex-grow h-full w-full flex justify-center items-center flex-col gap-4">
            <div className="alert alert-error w-56 flex justify-center">
                <p>{props.error}</p>
            </div>
            <button className="btn btn-warning" onClick={() => props.resetErrorBoundary()}>
                Clear Error
            </button>
        </div>
    )
}

export default ErrorBoundaryFallback
