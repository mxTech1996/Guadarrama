'use client';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { PiHandsClappingDuotone } from 'react-icons/pi';

import Container from '../atoms/Container';
import { useContext } from 'react';
import { CartContext } from 'ui-old-version';
// import phone icon
import { PiPhoneCall } from 'react-icons/pi';

const Navbar = ({ withAll = true, withCart = false }) => {
  const { products } = useContext(CartContext);

  return (
    <nav className='w-full px-4 md:px-0 bg-blue-400'>
      <Container className='flex justify-between h-20 items-center'>
        <div>
          <Link
            href='/'
            className='text-secondary font-black text-xs sm:text-sm flex gap-2 items-center leading-none text-white'
          >
            <span className='text-lg'>
              <PiHandsClappingDuotone />
            </span>

            <p>Golarzep</p>
          </Link>
        </div>

        {withAll && (
          <div className=' flex flex-1 justify-end items-center gap-4 sm:gap-10 text-sm sm:text-base font-medium text-primary sm:text-white'>
            <Link href='#our-services'>Our Services</Link>
            <Link href='#benefits' className='hidden sm:block'>
              Benefits
            </Link>

            {withCart ? <CartButton /> : <GetAQuoteButton />}
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;

const CartButton = () => {
  const { products } = useContext(CartContext);

  return (
    <div className='bg-third rounded-md p-2.5 flex justify-center items-center'>
      <Link
        href='/my-cart'
        className='hover:text-primary hover:underline flex items-center md:text-lg'
      >
        <div className='relative '>
          {products.length > 0 && (
            <div className='w-5 h-5 flex items-center justify-center rounded-full bg-secondary absolute -top-4 -right-4'>
              <p className='text-white text-[10px]'>
                {products.length > 99 ? '' : products.length}
              </p>
            </div>
          )}
          <AiOutlineShoppingCart className='text-white' size={17} />
        </div>
      </Link>
    </div>
  );
};

const GetAQuoteButton = () => {
  return (
    <div className='bg-third rounded-md p-2.5 flex justify-center items-center'>
      <Link
        href='/contact'
        className='hover:text-primary hover:underline flex items-center md:text-lg'
      >
        <p className='text-white mr-3'>Get a Quote</p>
        <PiPhoneCall className='text-white' size={25} />
      </Link>
    </div>
  );
};
