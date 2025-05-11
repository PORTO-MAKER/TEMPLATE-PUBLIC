import { formatDate } from "@/templates/testname/utils";

const Timeline = ({ datas }) => {
    return (
        <ol className="relative w-full border-s border-gray-200 dark:border-white">
            {datas.map((data, i) => (
                <li className="mb-10 ms-4 flex flex-col flex-wrap" key={i}>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
                        {formatDate(data.startDate)} -{" "}
                        {formatDate(data.endDate)}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {data.school || data.organization_name}
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-white break-all">
                        {data.degree || data.position}
                    </p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-white break-all">
                        {data.overview}
                    </p>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;
