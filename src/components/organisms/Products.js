// En tu archivo: /components/ProductsSlider.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Importa los componentes y estilos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Íconos para los botones de navegación
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { dataSite } from '@/data';
import { useContext } from 'react';
import { CartContext } from 'ui-old-version';
import { useRouter } from 'next/navigation';

// --- Datos para la sección ---
const projectsData = dataSite.products.filter(
  (product) => parseFloat(product.price) > 60
);

const projectsUnder60 = dataSite.products.filter(
  (product) => parseFloat(product.price) <= 60
);

const ProductsSlider = ({ isHome = true }) => {
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);

  const navigate = useRouter();
  return (
    <section id='products' className='relative py-20 md:py-28 bg-gray-50'>
      {/* Divisor ondulado superior */}
      <div className='absolute top-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 100C334.295 100 482.22 28.3333 720 28.3333C957.78 28.3333 1157.43 100 1440 100V0H0V100Z'
            fill='white'
          />
        </svg>
      </div>

      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-pink-600 mb-2 uppercase'>Our Work</p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Products Showcase
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='relative'
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='!pb-4' // Padding bottom para la sombra
          >
            {projectsData.map((project, index) => {
              const isInCart = validateProductInCart(project.id);

              const handleClick = () => {
                if (isHome) {
                  navigate.push('/contact');
                  return;
                }
                handleAddOrRemoveProduct(project.id);
              };

              return (
                <SwiperSlide key={index} className='h-full pb-8'>
                  <div className='bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300'>
                    <div className='w-full h-56 relative'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <div className='p-6 flex flex-col flex-grow'>
                      <p className='text-sm text-pink-600 font-medium'>
                        Engineering
                      </p>
                      <h3 className='text-xl font-bold text-gray-800 mt-2 flex-grow'>
                        {project.name}
                      </h3>
                      <div className='mt-4 pt-4 border-t border-gray-200 flex items-center justify-between'>
                        <div className=' items-center gap-6'>
                          <div>
                            <p className='font-semibold text-gray-700 text-sm text-justify mr-10'>
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <div className='flex-shrink-0'>
                          <p className='text-sm font-semibold text-gray-600'>
                            $ {project.price} USD
                          </p>
                        </div>
                      </div>
                      {/* button add to cart */}
                      <div className='mt-4'>
                        <button
                          onClick={handleClick}
                          className={`w-full px-4 py-2 ${
                            isInCart ? 'bg-red-600' : 'bg-pink-600'
                          } text-white font-semibold rounded-md hover:bg-pink-700 transition-colors duration-300`}
                        >
                          {isHome
                            ? 'Get a quote'
                            : isInCart
                            ? 'Remove from Cart'
                            : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* --- Botones de Navegación Personalizados --- */}
          <div className='swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 -left-8 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors'>
            <LuChevronLeft className='text-gray-700' size={24} />
          </div>
          <div className='swiper-button-next-custom absolute top-1/2 -translate-y-1/2 -right-8 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors'>
            <LuChevronRight className='text-gray-700' size={24} />
          </div>
        </motion.div>
      </div>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-pink-600 mb-2 uppercase'>Our Work</p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Our additionals
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='relative'
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='!pb-4' // Padding bottom para la sombra
          >
            {projectsUnder60.map((project, index) => {
              const isInCart = validateProductInCart(project.id);

              const handleClick = () => {
                if (isHome) {
                  navigate.push('/contact');
                  return;
                }
                handleAddOrRemoveProduct(project.id);
              };

              return (
                <SwiperSlide key={index} className='h-full pb-8'>
                  <div className='bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300'>
                    <div className='w-full h-56 relative'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <div className='p-6 flex flex-col flex-grow'>
                      <p className='text-sm text-pink-600 font-medium'>
                        Engineering
                      </p>
                      <h3 className='text-xl font-bold text-gray-800 mt-2 flex-grow'>
                        {project.name}
                      </h3>
                      <div className='mt-4 pt-4 border-t border-gray-200 flex items-center justify-between'>
                        <div className=' items-center gap-6'>
                          <div>
                            <p className='font-semibold text-gray-700 text-sm text-justify mr-10'>
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <div className='flex-shrink-0'>
                          <p className='text-sm font-semibold text-gray-600'>
                            $ {project.price} USD
                          </p>
                        </div>
                      </div>
                      {/* button add to cart */}
                      <div className='mt-4'>
                        <button
                          onClick={handleClick}
                          className={`w-full px-4 py-2 ${
                            isInCart ? 'bg-red-600' : 'bg-pink-600'
                          } text-white font-semibold rounded-md hover:bg-pink-700 transition-colors duration-300`}
                        >
                          {isHome
                            ? 'Get a quote'
                            : isInCart
                            ? 'Remove from Cart'
                            : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* --- Botones de Navegación Personalizados --- */}
          <div className='swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 -left-8 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors'>
            <LuChevronLeft className='text-gray-700' size={24} />
          </div>
          <div className='swiper-button-next-custom absolute top-1/2 -translate-y-1/2 -right-8 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors'>
            <LuChevronRight className='text-gray-700' size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSlider;
