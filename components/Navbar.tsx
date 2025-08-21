"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaHome, FaFolderOpen, FaEnvelope, FaLaptopCode } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white text-gray-700 border-b border-gray-200 py-4 px-4 shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nome */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/piero.jpg" // Assicurati che questo sia il percorso corretto
            alt="Piero Sabino"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Piero Sabino</span>
        </Link>

        {/* Bottone Hamburger */}
        <div>
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none cursor-pointer">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menù a scorrimento verticale (dall'alto) */}
      <ul className={`
        fixed inset-x-0 top-0 w-full h-screen bg-white shadow-lg p-4
        flex flex-col items-center justify-center space-y-8
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {/* Bottone di chiusura (visibile solo nel menù) */}
        <li className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none cursor-pointer">
                <FaTimes size={24} />
            </button>
        </li>

        {/* Sezione Profilo nel menu */}
        <li className="flex flex-col items-center mb-6">
          <Image
            src="/piero.jpg"
            alt="Piero Sabino"
            width={96}
            height={96}
            className="rounded-full border-2 mb-2"
          />
          <span className="text-lg font-semibold text-gray-800">Piero Sabino</span>
         
        </li>
        
        {/* Voci del menu */}
        <li>
          <Link href="/" onClick={toggleMenu} className="flex items-center space-x-2 py-2 px-3 hover:bg-gray-100 rounded transition-colors duration-300 font-medium text-lg">
            <FaHome className="w-6 h-6" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/projects" onClick={toggleMenu} className="flex items-center space-x-2 py-2 px-3 hover:bg-gray-100 rounded transition-colors duration-300 font-medium text-lg">
            <FaFolderOpen className="w-6 h-6" />
            <span>Progetti</span>
          </Link>
        </li>
        <li>
          <Link href="/skills" onClick={toggleMenu} className="flex items-center space-x-2 py-2 px-3 hover:bg-gray-100 rounded transition-colors duration-300 font-medium text-lg">
            <FaLaptopCode className="w-6 h-6" />
            <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={toggleMenu} className="flex items-center space-x-2 py-2 px-3 hover:bg-gray-100 rounded transition-colors duration-300 font-medium text-lg">
            <FaEnvelope className="w-6 h-6" />
            <span>Contatti</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;