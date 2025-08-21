// components/AboutMeSkeleton.tsx
const AboutMeSkeleton = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 animate-pulse w-full">
        {/* Scheletro per l'immagine (a sinistra) */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto"></div>
        </div>

        {/* Scheletro per il testo (a destra) */}
        <div className="flex-1 w-full md:pl-8 space-y-4">
          {/* Placeholder per il titolo/nome */}
          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto md:mx-0"></div>
          {/* Placeholder per le righe di testo */}
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-11/12"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSkeleton;