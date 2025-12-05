import React from 'react';

const ProfileCard = () => {
    return (
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">User Name</h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">Full Stack Developer & Creative</p>
            </div>
            <div className="mt-4">
                <div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-700 rounded-full"></div>
            </div>
        </div>
    );
};

export default ProfileCard;
