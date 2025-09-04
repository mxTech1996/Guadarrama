// En tu archivo: /components/ContactFooter.js (ACTUALIZADO)
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu';
import { dataSite } from '@/data';

const ContactFooter = () => {
  // --- Estados para el formulario (se añade 'phone') ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Lógica de Validación (sin cambios) ---
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim())
      newErrors.message = 'A brief message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- FUNCIÓN handleSubmit ACTUALIZADA CON mailto ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const recipientEmail = dataSite.email;
      const subject = `Project Consultation Request from ${formData.name}`;
      const body = `
        New project consultation request from your website.
        
        --- Client Details ---
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        
        --- Project Details ---
        ${formData.message}
      `;

      // Codificar para URL
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      // Crear y activar el enlace mailto
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      window.location.href = mailtoUrl;

      // Mostrar mensaje de éxito
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='py-20 md:py-28 bg-gray-50'>
      <div className='container mx-auto px-4 max-w-6xl'>
        {/* --- Parte 1: Formulario de Contacto --- */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Request a Project Consultation
            </h2>
          </div>
          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-green-50 border border-green-200 text-green-800 p-8 rounded-lg text-center'
              >
                <h3 className='text-2xl font-bold mb-4'>Thank you!</h3>
                <p>Your request has been sent. We will contact you shortly.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
              >
                <div className='md:col-span-2'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-pink-500'
                    }`}
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-pink-500'
                    }`}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                  )}
                </div>
                <div>
                  {/* El campo de teléfono ahora está conectado al estado */}
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Your Phone (Optional)'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-pink-500'
                  />
                </div>
                <div className='md:col-span-2'>
                  <textarea
                    name='message'
                    placeholder='Briefly describe your project...'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-pink-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className='md:col-span-2 text-center'>
                  <button
                    type='submit'
                    className='px-10 py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition-colors'
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactFooter;
