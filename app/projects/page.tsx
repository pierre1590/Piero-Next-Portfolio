"use client";
import { useState, useEffect } from 'react';
import ProjectCard from '@/components/Projects';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';
import { projects } from '@/data/projects';

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-gray-900 text-center text-4xl font-bold mb-12">I miei progetti</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? [...Array(projects.length)].map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))
          : projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>
    </div>
  );
};

export default ProjectsPage;