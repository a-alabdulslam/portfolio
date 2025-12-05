import React from 'react';
import { GraduationCap } from 'lucide-react';
import resumeData from '../../data/resumeData';

const EducationTile = () => {
    const education = resumeData.education;

    if (!education || education.length === 0) return null;

    return (
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 h-fit flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Education</h3>
            </div>

            <div className="flex flex-col gap-4">
                {education.map((edu, index) => (
                    <div key={index}>
                        <h4 className="text-md font-medium text-zinc-800 dark:text-zinc-200">{edu.institution}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">{edu.studyType} in {edu.area}</p>
                        {edu.date && <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-1">{edu.date}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationTile;
