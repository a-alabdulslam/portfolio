import React from 'react';
import { Briefcase } from 'lucide-react';
import resumeData from '../../data/resumeData';

const ExperienceTile = () => {
    const experiences = resumeData.experience;

    if (!experiences || experiences.length === 0) return null;

    return (
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 row-span-2 flex flex-col overflow-y-auto">
            <div className="flex items-center gap-3 mb-4 sticky top-0 bg-white dark:bg-zinc-800 pb-2 z-10 border-b border-zinc-100 dark:border-zinc-700">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Briefcase size={20} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Experience</h3>
            </div>

            <div className="flex flex-col gap-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-4 border-l-2 border-zinc-200 dark:border-zinc-700 last:border-0">
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-600"></div>

                        <h4 className="text-md font-medium text-zinc-800 dark:text-zinc-200">{exp.position}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">{exp.company}</p>
                        <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-1 mb-2">{exp.date}</p>

                        {/* Optional: Render summary if it exists, stripping HTML tags or using dangerAuth */}
                        {exp.summary && (
                            <div
                                className="text-zinc-600 dark:text-zinc-300 text-sm prose prose-sm dark:prose-invert max-w-none line-clamp-3 hover:line-clamp-none transition-all cursor-pointer"
                                title="Click to expand"
                                dangerouslySetInnerHTML={{ __html: exp.summary }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTile;
