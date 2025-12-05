import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectShowcase = () => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden h-64 md:h-auto cursor-pointer">
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-zinc-600 dark:text-zinc-300" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Awesome Project</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">A brief description of this cool project.</p>
            </div>
            {/* Background decoration or image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 group-hover:scale-105 transition-transform duration-500"></div>
        </div>
    );
};

export default ProjectShowcase;
