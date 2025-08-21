// components/SkillsPageSkeleton.tsx
const SkillsPageSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Placeholder del titolo principale */}
      <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto mb-12 animate-pulse"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse">
        
        {/* Colonna Hard Skills */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto mb-6"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="h-28 bg-gray-200 rounded-lg shadow-sm"></div>
            ))}
          </div>
        </div>
        
        {/* Colonna Soft Skills */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto mb-6"></div>
          <ul className="space-y-4">
            {[...Array(6)].map((_, index) => (
              <li key={index} className="h-12 bg-gray-200 rounded-lg shadow-sm"></li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default SkillsPageSkeleton;