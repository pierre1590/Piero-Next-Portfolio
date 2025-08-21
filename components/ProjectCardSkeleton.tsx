// components/ProjectCardSkeleton.tsx
const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 animate-pulse flex flex-col h-full">
      {/* Skeleton per l'immagine */}
      <div className="bg-gray-200 h-48 rounded-t-xl"></div>
      
      {/* Contenuto della scheda */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Placeholder per il titolo */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        
        {/* Placeholder per la descrizione */}
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        
        {/* Placeholder per i bottoni */}
        <div className="flex flex-col space-y-2 mt-auto">
          <div className="h-10 bg-gray-200 rounded-md"></div>
          <div className="h-10 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;