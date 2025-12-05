import React from 'react';
import { FolderGit2 } from 'lucide-react';
import resumeData from '../../data/resumeData';

const ProjectsTile = () => {
    const projects = resumeData.projects;

    if (!projects || projects.length === 0) return null;

    return (
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 h-full flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400">
                    <FolderGit2 size={20} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Projects</h3>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((project, index) => (
                    <div key={index}>
                        <h4 className="text-md font-medium text-zinc-800 dark:text-zinc-200">{project.name}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">{project.description}</p>
                        {project.url && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 dark:text-zinc-500 text-xs mt-1 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsTile;
