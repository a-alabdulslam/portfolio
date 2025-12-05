import React from 'react';
import { Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';
import resumeData from '../../data/resumeData';

const SocialLinks = () => {
    const profiles = resumeData.profiles;

    const getIcon = (network) => {
        switch (network.toLowerCase()) {
            case 'github': return <Github size={20} />;
            case 'twitter': return <Twitter size={20} />;
            case 'linkedin': return <Linkedin size={20} />;
            default: return <Globe size={20} />;
        }
    };

    return (
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-1 lg:col-span-1 flex flex-wrap items-center justify-around gap-2">
            {profiles.map((profile, index) => (
                <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-transformation hover:scale-110 duration-200"
                    aria-label={profile.network}
                    title={profile.username}
                >
                    {getIcon(profile.network)}
                </a>
            ))}
            {/* Always add email if not present in profiles */}
            <a
                href={`mailto:${resumeData.basics.email}`}
                className="p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-transformation hover:scale-110 duration-200"
                aria-label="Email"
            >
                <Mail size={20} />
            </a>
        </div>
    );
};

export default SocialLinks;
