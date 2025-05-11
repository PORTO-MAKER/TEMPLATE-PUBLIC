import { Spinner } from "@/templates/testname/components/atoms";

const Loading = () => {
    return (
        <div className="w-full min-h-svh flex justify-center items-center">
            <Spinner />
        </div>
    );
};

export default Loading;
