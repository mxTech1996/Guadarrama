// En tu archivo: /components/TeamSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// Íconos para redes sociales
import { LuLinkedin, LuTwitter } from 'react-icons/lu';

// --- Datos para la sección ---
const teamData = [
  {
    image: '/images/team1.png', // Reemplaza con tus imágenes
    name: 'Carlos Rodriguez',
    title: 'Lead Structural Engineer',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    image: '/images/team2.png',
    name: 'Sophia Chen',
    title: 'Senior Project Manager',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    image: '/images/team3.png',
    name: 'Anh Nguyen',
    title: 'Geotechnical Specialist',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    image: '/images/team4.png',
    name: 'Ben Davis',
    title: 'BIM Coordinator',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

const TeamSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='py-20 md:py-28 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-pink-600 mb-2 uppercase'>
            Our Experts
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Meet Our Team
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className='bg-white rounded-lg shadow-md hover:shadow-xl text-center flex flex-col items-center transition-all duration-300'
            >
              <div className='w-full h-64 relative'>
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-t-lg'
                />
              </div>
              <div className='p-6 flex flex-col items-center flex-grow'>
                <h3 className='text-xl font-bold text-gray-800'>
                  {member.name}
                </h3>
                <p className='text-pink-600 font-medium mt-1 mb-4'>
                  {member.title}
                </p>
                <div className='flex items-center gap-4 mt-auto'>
                  {/* <a
                    href={member.socials.linkedin}
                    className='text-gray-400 hover:text-pink-600 transition-colors'
                  >
                    <LuLinkedin size={20} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className='text-gray-400 hover:text-pink-600 transition-colors'
                  >
                    <LuTwitter size={20} />
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
