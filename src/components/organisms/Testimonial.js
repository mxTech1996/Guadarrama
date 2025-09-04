// En tu archivo: /components/TestimonialsSlider.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuQuote, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

// Importa los componentes y módulos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { dataSite } from '@/data';

// --- Datos para la sección ---
const testimonialsData = dataSite.references;

const TestimonialsSlider = () => {
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
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            What Our Clients Say
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            Building Trust, One Project at a Time.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='relative max-w-3xl mx-auto'
        >
          {/* --- Carrusel de Testimonios --- */}
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom-testimonials',
              prevEl: '.swiper-button-prev-custom-testimonials',
            }}
            className='!overflow-visible'
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='text-center flex flex-col items-center'>
                  <LuQuote
                    size={40}
                    className='text-pink-500 opacity-50 mb-6'
                  />
                  <p className='text-xl text-gray-700 leading-relaxed italic mb-8'>
                    &ldquo;{testimonial.description}&rdquo;
                  </p>
                  {/* <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className='rounded-full object-cover mb-4'
                  /> */}
                  <p className='font-bold text-lg text-gray-800'>
                    {testimonial.name}
                  </p>
                  {/* <p className='text-sm text-gray-500'>{testimonial.title}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- Botones de Navegación Personalizados --- */}
          <div className='swiper-button-prev-custom-testimonials absolute top-1/2 -translate-y-1/2 -left-8 md:-left-16 cursor-pointer p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors'>
            <LuChevronLeft className='text-gray-600' size={24} />
          </div>
          <div className='swiper-button-next-custom-testimonials absolute top-1/2 -translate-y-1/2 -right-8 md:-right-16 cursor-pointer p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors'>
            <LuChevronRight className='text-gray-600' size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
