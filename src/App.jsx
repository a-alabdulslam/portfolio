import React from 'react';
import BentoGrid from './components/BentoGrid';
import ProfileCard from './components/modules/ProfileCard';
import ThemeToggle from './components/modules/ThemeToggle';
import SocialLinks from './components/modules/SocialLinks';
import ProjectShowcase from './components/modules/ProjectShowcase';
import TechStack from './components/modules/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans transition-colors duration-300 flex items-center justify-center py-10">
      <main className="w-full">
        <BentoGrid>
          <ProfileCard />
          <ThemeToggle />
          <TechStack />
          <SocialLinks />
          <ProjectShowcase />
          {/* Add more modules here */}
        </BentoGrid>
      </main>
    </div>
  );
}

export default App;
