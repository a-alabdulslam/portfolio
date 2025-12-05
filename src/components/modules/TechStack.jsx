import React from 'react';
import { Code, Database, Globe, Cpu, Terminal, Cloud } from 'lucide-react';
import resumeData from '../../data/resumeData';

const TechStack = () => {
    const skills = resumeData.skills;

    // Flatten keywords to show a tag cloud or selected top skills
    // We can group by name (category)

    const getIconForCategory = (category) => {
        const lower = category.toLowerCase();
        if (lower.includes('language')) return <Code size={20} />;
        if (lower.includes('data') || lower.includes('sql')) return <Database size={20} />;
        if (lower.includes('cloud')) return <Cloud size={20} />;
        if (lower.includes('tools')) return <Terminal size={20} />;
        return <Cpu size={20} />;
    };

    return (
        <div className="bg-orange-50 dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 h-fit flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">Skills</h3>
            <div className="flex flex-col gap-4">
                {skills.map((skillGroup, i) => (
                    <div key={i}>
                        <div className="flex items-center gap-2 mb-2 text-zinc-600 dark:text-zinc-300 text-sm font-medium">
                            {getIconForCategory(skillGroup.name)}
                            <span>{skillGroup.name}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.keywords.map((keyword, k) => (
                                <span key={k} className="px-2 py-1 bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 rounded-md text-xs text-zinc-700 dark:text-zinc-300">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
