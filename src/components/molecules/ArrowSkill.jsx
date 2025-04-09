import React from "react";

const ArrowSkill = ({ rows, columns, darkMode }) => {
    return columns.map((column, i) => (
        <React.Fragment key={i}>
            <div className="flex items-center w-full">
                <span className="text-center font-bold text-lg whitespace-nowrap relative">
                    {column.title}
                </span>
                <div className="flex-grow h-[1px] bg-gray-300 ml-4"></div>
            </div>
            <div
                className={`${
                    rows[column.key].length > 8 ? "grid grid-cols-2" : ""
                }`}
            >
                {rows[column.key].map((row) => (
                    <div className="space-y-2" key={i + row.name}>
                        <div className="flex gap-4 items-center">
                            <div className="w-9 h-9 rounded-full p-1">
                                <img
                                    src={
                                        darkMode
                                            ? row.darkColorPath
                                            : row.lightColorPath
                                    }
                                    className="w-full h-full dark:brightness-0 dark:invert"
                                    alt={row.name}
                                />
                            </div>
                            <p>{row.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    ));
};

export default ArrowSkill;
