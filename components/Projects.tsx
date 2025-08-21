"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  // Impostiamo una soglia di caratteri per decidere se troncare il testo
  const maxChars = 150; 
  const shouldTruncate = project.description.length > maxChars;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col h-full">
      {/* Immagine o placeholder con altezza fissa */}
      {project.image ? (
        <div className="relative w-full h-48">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill={true}
            className="rounded-t-xl object-cover" 
          />
        </div>
      ) : (
        <div className="bg-gray-100 h-48 flex items-center justify-center rounded-t-xl">
          <span className="text-gray-400 text-sm font-medium text-center">
            Image Not Available
          </span>
        </div>
      )}
      
      {/* Contenuto della scheda */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-gray-900 text-2xl font-semibold mb-2">{project.title}</h3>
        
        {/* Descrizione con 'Leggi di più' */}
        <p className={`text-gray-600 text-sm mb-4 flex-grow ${!isExpanded && shouldTruncate ? 'line-clamp-3' : ''}`}>
          {project.description}
        </p>

        {/* Bottone per espandere/collassare */}
        {shouldTruncate && (
          <button 
            onClick={toggleExpanded} 
            className="text-blue-600 hover:text-blue-500 font-medium mb-4 self-start"
          >
            {isExpanded ? 'Leggi di meno' : 'Leggi di più'}
          </button>
        )}
        
        {/* Sezione bottoni */}
        <div className="flex flex-col space-y-2 mt-auto">
          <Link 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            <FaExternalLinkAlt />
            <span>Vedi app</span>
          </Link>
          <Link 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300 font-medium"
          >
            <FaGithub />
            <span>Vedi codice</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;