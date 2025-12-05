import React from 'react';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const TechStack = () => {
    const techs = [
        { icon: <Code size={24} />, name: "Frontend" },
        { icon: <Database size={24} />, name: "Backend" },
        { icon: <Globe size={24} />, name: "Web3" },
        { icon: <Cpu size={24} />, name: "Systems" },
    ];

    return (
        <div className="bg-orange-50 dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 row-span-1 flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">Stack</h3>
            <div className="flex gap-4 mt-2">
                {techs.slice(0, 3).map((t, i) => (
                    <div key={i} className="text-zinc-600 dark:text-zinc-400" title={t.name}>{t.icon}</div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
