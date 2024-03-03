'use client';

function ErrorBoundary({ error }) {
    return (
        <>
            <h2>{error.message}</h2>
        </>
    );
}

export default ErrorBoundary;
