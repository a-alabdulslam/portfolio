import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import resumeData from '../../data/resumeData';

const ProfileCard = () => {
    const { name, label, email, location } = resumeData.basics;
    const headline = resumeData.basics.headline || (resumeData.experience.length > 0 ? resumeData.experience[0].position : 'Developer');

    const [theme, setTheme] = useState(() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 lg:col-span-3 row-span-1 flex flex-col justify-between relative">
            <button
                onClick={toggleTheme}
                className="absolute top-6 right-6 p-2 bg-zinc-100 dark:bg-zinc-700 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{name}</h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">{headline}</p>
                <p className="text-zinc-400 dark:text-zinc-500 text-sm mt-1">{location}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
