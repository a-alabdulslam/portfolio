import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
    const links = [
        { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
        { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <Mail size={20} />, href: "mailto:hello@example.com", label: "Email" },
    ];

    return (
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 col-span-1 md:col-span-2 flex items-center justify-around">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-transformation hover:scale-110 duration-200"
                    aria-label={link.label}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
