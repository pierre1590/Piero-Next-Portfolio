import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Social media icons */}
        <div className="flex space-x-6 mb-4">
          <Link href="https://www.linkedin.com/in/pierosabino" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
            <FaLinkedinIn size={24} />
          </Link>
          <Link href="https://www.instagram.com/piero_sabino1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors duration-300">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://github.com/pierre1590" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
            <FaGithub size={24} />
          </Link>
        </div>

        {/* Link alle policy */}
        <div className="flex space-x-4 text-sm text-gray-500 mb-2">
          <a href="https://www.iubenda.com/privacy-policy/60158333" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">
            Privacy Policy
          </a>
          <a href="https://www.iubenda.com/privacy/60158333/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Cookie Policy">
            Cookie Policy
          </a>
        </div>

        {/* Copyright notice */}
        <p className="text-sm text-gray-500">
          Piero Sabino © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;