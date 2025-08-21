import type { Metadata } from 'next';
import { hardSkills, softSkills } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Skills',
};

const SkillsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-gray-900 text-center text-4xl font-bold mb-12">Le mie competenze</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Colonna Hard Skills */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Hard Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {hardSkills.map(skill => (
              <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <skill.icon size={48} className="text-gray-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Colonna Soft Skills */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Soft Skills</h2>
          <ul className="space-y-4">
            {softSkills.map(skill => (
              <li key={skill} className="bg-white p-4 rounded-lg shadow-sm text-center font-medium text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default SkillsPage;