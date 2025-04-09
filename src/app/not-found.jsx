const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-extrabold text-red-500 animate-bounce">
                404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mt-2 max-w-md">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
            </p>
            <a
                href="/"
                className="mt-6 px-6 py-3 text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition-all"
            >
                Go Back Home
            </a>
        </div>
    );
};

export default NotFoundPage;
