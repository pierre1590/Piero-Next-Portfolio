// components/ContactPageSkeleton.tsx
const ContactPageSkeleton = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-4xl animate-pulse">
      <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
        
        {/* Scheletro della colonna sinistra (Form) */}
        <div className="md:w-1/2 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          {/* Placeholder campi form */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-24 bg-gray-300 rounded w-full"></div>
          </div>
          {/* Placeholder bottone Invia */}
          <div className="h-12 bg-gray-300 rounded w-full"></div>
        </div>
        
        {/* Scheletro della colonna destra (Bottoni) */}
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center space-y-8">
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          {/* Placeholder bottoni social */}
          <div className="flex flex-col space-y-4 w-full px-12">
            <div className="h-12 bg-gray-300 rounded w-full"></div>
            <div className="h-12 bg-gray-300 rounded w-full"></div>
          </div>
          {/* Placeholder numero */}
          <div className="mt-8 space-y-2">
            <div className="h-6 bg-gray-300 rounded w-2/3"></div>
            <div className="h-8 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPageSkeleton;