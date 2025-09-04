// En tu archivo: /components/ProductsSection.js
'use client';

import { useContext, useState } from 'react'; // Importamos useState
import { motion } from 'framer-motion';
import Image from 'next/image';
import { dataSite } from '@/data';
import { CartContext } from 'ui-old-version';
import { useRouter } from 'next/navigation';

// --- DATA: La información de productos que proporcionaste ---
const productsData = dataSite.products;

const ProductsSection = ({ isHome = true }) => {
  // --- AÑADIDO: Estado para controlar si se muestran todos los productos ---
  const [showAll, setShowAll] = useState(false);

  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);
  const navigate = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // --- AÑADIDO: Lógica para decidir qué productos mostrar ---
  const productsToShow = showAll
    ? productsData.slice(0, 8)
    : productsData.slice(0, 3);

  const productsOver60 = productsData.filter(
    (product) => parseFloat(product.price) > 60
  );

  const productsUnder60 = productsData.filter(
    (product) => parseFloat(product.price) <= 60
  );

  const productsHome = isHome ? productsToShow : productsOver60;

  return (
    <section id='products' className='py-20 md:py-28 bg-white'>
      <div className='container mx-auto px-4'>
        <div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Our Digital Toolkits
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              Actionable resources and frameworks designed by our experts to
              accelerate your business growth.
            </p>
          </motion.div>
          <motion.div
            layout
            className='transition-all duration-500 ease-in-out'
          >
            <motion.div
              key={showAll ? 'all' : 'limited'} // Cambiamos la key para que Framer Motion detecte el cambio
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
            >
              {productsHome.map((product) => {
                const inCart = validateProductInCart(product.id);
                const handleClick = () => {
                  if (isHome) {
                    navigate.push('/contact');
                    return;
                  }
                  handleAddOrRemoveProduct(product.id);
                };

                return (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    layout // Permite que la tarjeta se mueva suavemente a su nueva posición
                    whileHover={{ y: -8 }}
                    className='p-1 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl h-full'
                  >
                    <div className='bg-gray-900 text-white rounded-lg h-full flex flex-col overflow-hidden'>
                      <div className='w-full h-56 relative'>
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>
                      <div className='p-6 flex flex-col flex-grow'>
                        <h3 className='text-xl font-bold text-white mb-3'>
                          {product.name}
                        </h3>
                        <p className='text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3'>
                          {product.description}
                        </p>
                        <div className='flex justify-between items-center mt-6'>
                          <p className='text-2xl font-bold text-indigo-400'>
                            ${product.price}
                          </p>
                          <button
                            onClick={handleClick}
                            className={`px-5 py-2  ${
                              inCart ? 'bg-red-600' : 'bg-indigo-600'
                            } text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors text-sm`}
                          >
                            {inCart
                              ? ' Remove from Cart'
                              : isHome
                              ? 'Contact Us'
                              : 'Add to Cart'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16 mt-20'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Our Additionals
            </h2>
          </motion.div>
          <motion.div
            layout
            className='transition-all duration-500 ease-in-out'
          >
            <motion.div
              key={showAll ? 'all' : 'limited'} // Cambiamos la key para que Framer Motion detecte el cambio
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
            >
              {productsUnder60.map((product) => {
                const inCart = validateProductInCart(product.id);
                const handleClick = () => {
                  if (isHome) {
                    navigate.push('/contact');
                    return;
                  }
                  handleAddOrRemoveProduct(product.id);
                };

                return (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    layout // Permite que la tarjeta se mueva suavemente a su nueva posición
                    whileHover={{ y: -8 }}
                    className='p-1 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl h-full'
                  >
                    <div className='bg-gray-900 text-white rounded-lg h-full flex flex-col overflow-hidden'>
                      <div className='w-full h-56 relative'>
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>
                      <div className='p-6 flex flex-col flex-grow'>
                        <h3 className='text-xl font-bold text-white mb-3'>
                          {product.name}
                        </h3>
                        <p className='text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3'>
                          {product.description}
                        </p>
                        <div className='flex justify-between items-center mt-6'>
                          <p className='text-2xl font-bold text-indigo-400'>
                            ${product.price}
                          </p>
                          <button
                            onClick={handleClick}
                            className={`px-5 py-2  ${
                              inCart ? 'bg-red-600' : 'bg-indigo-600'
                            } text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors text-sm`}
                          >
                            {inCart
                              ? ' Remove from Cart'
                              : isHome
                              ? 'Contact Us'
                              : 'Add to Cart'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {!isHome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-center mt-16'
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className='font-semibold text-indigo-600 hover:text-indigo-700 transition-colors'
            >
              {showAll ? 'Show Less' : 'Show More Products'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
