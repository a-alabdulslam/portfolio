import React from 'react';
import resumeData from '../../data/resumeData';

const AboutTile = () => {
    const summaryHTML = resumeData.summary;

    return (
        <div className="bg-emerald-50 dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 h-fit">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">About</h3>
            <div
                className="text-zinc-600 dark:text-zinc-300 text-sm prose prose-sm dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: summaryHTML }}
            />
        </div>
    );
};

export default AboutTile;
