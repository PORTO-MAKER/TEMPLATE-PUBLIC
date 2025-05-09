const ExperienceCard = ({
    title,
    company,
    period,
    achievements,
    color,
    overview,
}) => {
    return (
        <div
            className={`${color} border-4 border-black p-6 space-y-4 shadow-[8px_8px_0px_0px_rgba(0,0,0)]`}
        >
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-lg font-medium">{company}</p>
                </div>
                <span className="bg-black text-white px-4 py-1 font-bold mt-2 md:mt-0 w-fit h-fit">
                    {period}
                </span>
            </div>
            <div>
                <h4 className="font-bold">Overview:</h4>
                <p className="text-gray-700">{overview}</p>
            </div>
            <div>
                <h4 className="font-bold">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    {achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
