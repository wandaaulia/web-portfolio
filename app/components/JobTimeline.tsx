import { experiences } from "../data/experiences";

export default function JobTimeline() {

    return (
        <div className="relative">
            {/* Center Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-gray-600 to-gray-700"></div>

            {/* Left Line - Visible on mobile only */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-gray-600 to-gray-700"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
                {experiences.map((yearGroup, yearIndex) => (
                    <div key={yearIndex} className="relative">
                        {/* Year Badge */}
                        <div className="bg-linear-to-tr from-gray-700 to-gray-500 absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full shadow-lg border-2  border-gray-500 shadow-gray-500/30 z-10">
                            <span className="text-white font-bold text-sm">{yearGroup.year}</span>
                        </div>

                        {/* Multiple Positions in Same Year */}
                        <div className="space-y-8 pl-20 md:pl-0 cursor-pointer">
                            {yearGroup.positions.map((exp, posIndex) => {
                                const isLeft = yearIndex % 2 === 0;

                                return (
                                    <div key={posIndex} className={`md:flex ${isLeft ? 'md:justify-start md:pr-8' : 'md:justify-end md:pl-8'}`}>
                                        <div className={`md:w-5/12 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                                            <div className="border border-gray-500/25 rounded-xl shadow-lg hover:shadow-xl hover:shadow-gray-500/20  transition-all duration-300 p-3  hover:border-gray-500 backdrop-blur-md">
                                                {/* Type Badge */}
                                                <div className={`bg-linear-to-tr from-gray-700 to-gray-500 inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 text-white border-gray-500`}>
                                                    {exp.type}
                                                </div>
                                                {/* Job Title */}
                                                <h3 className="text-lg lg:text-xl font-bold text-gray-300 cursor-pointer  mb-1">
                                                    {exp.title}
                                                </h3>
                                                {/* Company */}
                                                <p className="text-base lg:text-lg  text-gray-300 font-medium mb-2">
                                                    {exp.company}
                                                </p>
                                                {/* Period */}
                                                <p className="text-sm text-gray-400 mb-4 font-light">
                                                    {exp.period}
                                                </p>
                                                {/* Key Achievements */}
                                                <div className="space-y-2 mb-4">
                                                    {exp.achievements.map((achievement, idx) => {
                                                        const Icon = achievement.icon;
                                                        return (
                                                            <div key={idx} className={`flex flex-row gap-3 text-sm lg:text-base text-gray-300 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                                                                <div className='w-5'> <Icon className="text-gray-300 mt-0.5 w-4 h-4" /> </div>
                                                                <span className={isLeft ? 'md:text-right' : 'md:text-left'}>{achievement.text}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                {/* Tech Stack */}
                                                <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                                                    {exp.tech.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1  text-gray-300 text-xs font-semibold rounded-full border "
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}