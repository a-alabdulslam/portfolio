import React from 'react';
import BentoGrid from './components/BentoGrid';
import ProfileCard from './components/modules/ProfileCard';
import SocialLinks from './components/modules/SocialLinks';
import TechStack from './components/modules/TechStack';
import ExperienceTile from './components/modules/ExperienceTile';
import AboutTile from './components/modules/AboutTile';
import EducationTile from './components/modules/EducationTile';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans transition-colors duration-300 flex items-center justify-center py-10">
      <main className="w-full">
        <BentoGrid>
          <ProfileCard />
          <SocialLinks />
          <AboutTile />
          <ExperienceTile />
          <TechStack />
          <EducationTile />
        </BentoGrid>
      </main>
    </div>
  );
}

export default App;
