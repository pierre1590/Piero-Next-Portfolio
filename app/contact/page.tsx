"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaTelegram, FaPhone, FaPaperPlane, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import ContactPageSkeleton from '@/components/ContactPageSkeleton';

const ContactPageClient = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tempo di caricamento dei dati di 2 secondi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Il campo Nome è obbligatorio.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Il campo Email è obbligatorio.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Il campo Messaggio è obbligatorio.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid && form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text);
            setShowModal(true);
            setFormData({ name: '', email: '', message: '' });
            setStatusMessage({ text: 'Messaggio inviato con successo!', type: 'success' });
          },
          (error) => {
            console.log('FAILED...', error.text);
            setStatusMessage({ text: 'Invio fallito. Riprova più tardi.', type: 'error' });
          }
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen-minus-nav p-8">
      {isLoading ? (
        <ContactPageSkeleton />
      ) : (
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Get in touch</h1>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
            
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Invia un messaggio</h2>
              <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">Nome</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'}`} />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'}`} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium">Messaggio</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'}`}></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold flex items-center justify-center space-x-2 cursor-pointer">
                    <FaPaperPlane />
                    <span>Invia Messaggio</span>
                  </button>
              </form>
            </div>
            
            <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chatta con me</h2>
              <p className="text-gray-700 mb-6">
                Se preferisci, puoi contattarmi direttamente su WhatsApp o Telegram.
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="https://wa.me/393395997631" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition-colors duration-300 font-semibold">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </Link>
                <Link href="https://t.me/Pierre90" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300 font-semibold">
                  <FaTelegram />
                  <span>Telegram</span>
                </Link>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800">Numero di cellulare</h3>
                <Link href="tel:+393395997631" className="text-blue-600 hover:text-blue-500 transition-colors duration-300 font-medium flex items-center justify-center space-x-2 mt-2">
                  <FaPhone />
                  <span>+39 339 599 7631</span>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full relative text-center">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer">
              <FaTimes size={20} />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {statusMessage.type === 'success' ? 'Messaggio inviato!' : 'Invio fallito!'}
            </h3>
            <p className="text-gray-700 mb-6">
              {statusMessage.text}
            </p>
            <button onClick={() => setShowModal(false)} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold cursor-pointer">
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPageClient;