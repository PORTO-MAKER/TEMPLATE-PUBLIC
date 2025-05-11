export const SkeletonImage = () => {
    return (
        <div className="flex items-center justify-center w-14 h-14 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
    );
};

export const SkeletonName = () => {
    return (
        <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
