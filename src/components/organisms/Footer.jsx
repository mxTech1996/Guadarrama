// En tu archivo: /components/Footer.js (ACTUALIZADO)
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Importar Image para los logos de Visa
// Íconos para contacto y redes sociales
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuTwitter,
  LuInstagram,
  LuLinkedin,
} from 'react-icons/lu';

// --- Datos para los enlaces ---
const footerLinks = {
  explore: [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Privacy Policy', href: '/pdf/AP.PUBLYDISENO.SEPTIEMBRE.2025.pdf' },
    {
      name: 'Terms of Service',
      href: '/pdf/TYC-PUBLYDISENO.SEPTIEMBRE.2025.pdf',
    },
  ],
};

const Footer = () => {
  // Nombres de la empresa

  return (
    <footer className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 max-w-6xl'>
        {/* --- Parte 2: Enlaces del Footer --- */}
        <hr className='my-16 border-gray-200' />

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left'>
          {/* El resto del footer se mantiene igual */}
          <div>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>
              Mirazul Proyecciones
            </h3>
            <p className='text-gray-600 text-sm'>
              Engineering the Future of Construction.
            </p>

            {/* Accepted payment image */}
            <div className='mt-4 justify-center md:justify-start'>
              <p className='text-gray-600 text-sm mr-4 self-center mb-5'>
                Accepted Payments:
              </p>
              <Image
                src='/images/visaMaster.png'
                alt='Accepted Payment Methods'
                width={100}
                height={40}
                className='object-contain'
              />
            </div>
          </div>
          <div>
            <h4 className='font-semibold text-gray-800 mb-4'>Company</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#about' className='text-gray-600 hover:text-pink-600'>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-600 hover:text-pink-600'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#products'
                  className='text-gray-600 hover:text-pink-600'
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-gray-800 mb-4'>Support</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-600 hover:text-pink-600'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-pink-600'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-gray-800 mb-4'>Contact</h4>
            <address className='not-italic text-gray-600 text-sm space-y-2'>
              <p> {dataSite.address} </p>
              <p>{dataSite.telephone}</p>
              <p>{dataSite.email}</p>
            </address>
          </div>
        </div>

        {/* --- Sub-Footer con Copyright --- */}
        <div className='mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} MIRAZUL PROYECCIONES EN
            EDIFICACION S DE RL DE CV. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
