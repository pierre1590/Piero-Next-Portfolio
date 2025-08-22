import type { Metadata } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'OroRosso',
};

const OroRossoPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-gray-900 text-center text-4xl font-bold mb-12">OroRosso</h1>
      
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        
        {/* Immagine del progetto */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://i.ibb.co/W32LcbS/Screenshot-2024-07-18-224947.png"
            alt="OroRosso App"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Descrizione */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          OroRosso is an application that helps you turn your cherry harvest into profits by tracking companies, locations, clients, and earnings. You can easily manage and monitor all aspects of your cherry production and sales process with our intuitive platform.
        </p>

        {/* Funzionalità */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li>track cherry harvest quantities and varieties</li>
          <li>manage company details and client informations</li>
          <li>monitor earnings and sales performances</li>
          <li>organize locations and streamline operations</li>
        </ul>

        {/* Sezione per eliminare l'account */}
        <h2 className="text-2xl font-semibold text-red-600 mb-4">How to Delete Your Account</h2>
        <p className="text-gray-600 mb-4">
          If you wish to delete your account and all associated data, please follow these steps within the OroRosso app:
        </p>
        <ul className="list-decimal list-inside text-gray-600 mb-6 space-y-1">
          <li>Open the OroRosso app on your device.</li>
          <li>Go to the account settings section.</li>
          <li>Select the &quot;Delete Account&quot; option.</li>
          <li>Follow the instructions to confirm the deletion of your account.</li>
        </ul>

        {/* Contatto per assistenza */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assistance</h2>
        <p className="text-gray-600">
          For further assistance, please contact me, <a href="mailto:piero2906@gmail.com"><span className='font-semibold'>piero2906@gmail.com</span></a>
        </p>
        
      </div>
    </div>
  );
};

export default OroRossoPage;