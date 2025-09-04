// En tu archivo: /components/ContactSection.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  // --- Estados para el formulario ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Lógica de Validación ---
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Manejador del envío con lógica mailto ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const recipientEmail = 'contact@guadarramaconsultants.com'; // El email de tu empresa
      const subject = `Inquiry from ${formData.name} via Website`;
      const body = `
        You have received a new message from your website contact form.
        
        --- Details ---
        Name: ${formData.name}
        Email: ${formData.email}
        
        --- Message ---
        ${formData.message}
      `;

      // Codificar para URL
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      // Crear y activar el enlace mailto
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      window.location.href = mailtoUrl;

      // Mostrar mensaje de éxito en la página
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className='relative py-20 md:py-28 bg-gray-900 text-white overflow-hidden'>
      {/* Patrones decorativos de cruces */}
      <div className='absolute top-10 left-10 text-indigo-500/10 text-8xl font-thin'>
        +
      </div>
      <div className='absolute bottom-10 right-10 text-indigo-500/10 text-8xl font-thin transform rotate-45'>
        +
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='max-w-2xl mx-auto text-center'
        >
          <p className='font-semibold text-indigo-400 mb-2 uppercase'>
            Contact Us
          </p>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Still Have Any Questions?
          </h2>
          <p className='text-gray-400 mb-10'>
            We&#39;re here to help. Fill out the form below and a member of our
            expert team will get back to you shortly.
          </p>

          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='bg-indigo-600/30 border border-indigo-500/50 p-8 rounded-lg'
              >
                <h3 className='text-2xl font-bold text-white mb-2'>
                  Thank You!
                </h3>
                <p className='text-indigo-200'>
                  Your email client has been opened. Please send the pre-filled
                  message.
                </p>
              </motion.div>
            ) : (
              <motion.form
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className='space-y-6'
              >
                <div>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-4 bg-gray-800 text-white border rounded-md focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-700 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm mt-2 text-left'>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-4 bg-gray-800 text-white border rounded-md focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-700 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-2 text-left'>
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    name='message'
                    placeholder='Your Message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-4 bg-gray-800 text-white border rounded-md focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-700 focus:ring-indigo-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className='text-red-500 text-sm mt-2 text-left'>
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type='submit'
                    className='w-full py-4 bg-indigo-600 font-semibold rounded-md hover:bg-indigo-700 transition-colors'
                  >
                    Send Message
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
