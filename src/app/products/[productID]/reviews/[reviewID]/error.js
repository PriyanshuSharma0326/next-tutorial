'use client';

function ErrorBoundary({ error, reset }) {
    return (
        <div className="p-8 flex flex-col gap-6">
            <p className="font-semibold text-[1.25rem]">{error.message}</p>
            <button onClick={reset} className="w-fit rounded-md bg-black text-white px-4 py-2 border-[1px] border-black hover:bg-white hover:text-black">
                Try again
            </button>
        </div>
    );
}

export default ErrorBoundary;
