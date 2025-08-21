"use client";

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/Projects';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';
import { projects } from '@/data/projects';

const ProjectsPageClient = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tempo di caricamento dei dati di 2 secondi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      {isLoading
        ? // Mostra gli scheletri se la pagina è in caricamento
          [...Array(projects.length)].map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))
        : // Altrimenti, mostra i progetti reali
          <>
            <h1 className="text-gray-900 text-center text-4xl font-bold mb-12">I miei progetti</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
      }
    </div>
  );
};

export default ProjectsPageClient;