const ProjectCardSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Placeholder del titolo */}
      <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto mb-12 animate-pulse"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col h-full">
            <div className="bg-gray-200 h-48 rounded-t-xl"></div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
              <div className="flex flex-col space-y-2 mt-auto">
                <div className="h-10 bg-gray-200 rounded-md"></div>
                <div className="h-10 bg-gray-200 rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;