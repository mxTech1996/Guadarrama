'use client';
import Image from 'next/image';
import { find, map } from 'lodash';
import { useRouter } from 'next/navigation';
import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

import { additionalProducts, benefitsData, productsData } from '../../data';
import Button from '@/components/atoms/button';
import { useContext } from 'react';
import { CartContext } from 'ui-old-version';

export default function Home() {
  const { validateProductInCart, handleAddOrRemoveProduct } =
    useContext(CartContext);
  const navigate = useRouter();

  return (
    <main>
      {/* Hero */}
      <div className='absolute top-0 left-0 w-full z-10'>
        <Navbar withCart={true} />
      </div>

      {/* Services */}
      <div className='py-28 bg-blue-200' id='our-services'>
        <Container className='w-full flex flex-col items-center gap-6'>
          <h1 className='text-3xl font-bold font-urbanist uppercase'>
            Our Products
          </h1>

          <div
            className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'
            id='shop'
          >
            {map(productsData, (item, i) => {
              const existProduct = validateProductInCart(item.id);

              return (
                <div className='w-full relative flex flex-col' key={i}>
                  <div className='bg-black rounded-t-md '>
                    <Image
                      onClick={() => navigate.push(`/product/${item.id}`)}
                      src={item.image}
                      alt='Camp image'
                      width={600}
                      height={600}
                      className='h-60 rounded-t-md w-full object-cover  hover:cursor-pointer hover:opacity-80 '
                    />
                  </div>

                  <div className='bg-white w-full p-5 flex flex-col rounded-b-md h-full'>
                    <div className='flex-1 flex flex-col text-primary'>
                      <h1 className='font-bold text-xl sm:text-2xl line-clamp-1 mt-2 font-urbanist'>
                        {item.name}
                      </h1>
                      <p className='text-sm sm:text-base font-light mt-2'>
                        {item.description}
                      </p>
                    </div>

                    <div className='flex flex-col items-end mt-5'>
                      <p className='text-lg sm:text-xl font-bold text-third'>
                        {item.price} USD
                      </p>

                      <Button
                        onClick={() => handleAddOrRemoveProduct(item.id)}
                        className='mt-4 w-full'
                      >
                        {!existProduct ? 'Add to cart' : 'Remove product'}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      <div className='py-28 bg-blue-200' id='our-services'>
        <Container className='w-full flex flex-col items-center gap-6'>
          <h1 className='text-3xl font-bold font-urbanist uppercase'>
            Additionals
          </h1>

          <div
            className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'
            id='shop'
          >
            {map(additionalProducts, (item, i) => {
              const existProduct = validateProductInCart(item.id);

              return (
                <div className='w-full relative flex flex-col' key={i}>
                  <div className='bg-black rounded-t-md '>
                    <Image
                      onClick={() => navigate.push(`/product/${item.id}`)}
                      src={item.image}
                      alt='Camp image'
                      width={600}
                      height={600}
                      className='h-60 rounded-t-md w-full object-cover  hover:cursor-pointer hover:opacity-80 '
                    />
                  </div>

                  <div className='bg-white w-full p-5 flex flex-col rounded-b-md h-full'>
                    <div className='flex-1 flex flex-col text-primary'>
                      <h1 className='font-bold text-xl sm:text-2xl line-clamp-1 mt-2 font-urbanist'>
                        {item.name}
                      </h1>
                      <p className='text-sm sm:text-base font-light mt-2'>
                        {item.description}
                      </p>
                    </div>

                    <div className='flex flex-col items-end mt-5'>
                      <p className='text-lg sm:text-xl font-bold text-third'>
                        {item.price} USD
                      </p>

                      <Button
                        onClick={() => handleAddOrRemoveProduct(item.id)}
                        className='mt-4 w-full'
                      >
                        {!existProduct ? 'Add to cart' : 'Remove product'}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  );
}
