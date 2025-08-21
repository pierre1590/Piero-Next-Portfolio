"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AboutMeSkeleton from '@/components/AboutMeSkeleton';


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tempo di caricamento di 2 secondi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center p-8 pt-24">
      {isLoading ? (
        <AboutMeSkeleton />
      ) : (
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Sezione immagine a sinistra */}
            <div className="flex-shrink-0">
              <Image 
                src="/Piero.jpg"
                alt="Piero Sabino"
                width={256}
                height={256}
                className="rounded-full shadow-lg"
              />
            </div>
            
            {/* Sezione testo a destra */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4 animate-pulse">
                Piero Sabino
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi chiamo Piero e sono uno <span className="font-bold">sviluppatore Full-stack</span> in costante crescita. La mia missione è quella di progettare e realizzare soluzioni web che siano al contempo eleganti, efficienti e scalabili. Sono in cerca di un&apos;opportunità che mi consenta di applicare le mie competenze e di imparare da un team di professionisti.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;