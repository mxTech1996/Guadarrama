'use client';
import Image from 'next/image';
import { find, map } from 'lodash';
import { useRouter } from 'next/navigation';
import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

import { productsData, references, additionalProducts } from '../../data';
import Button from '@/components/atoms/button';
import { References } from 'ui-old-version';
import WhyChooseUs from '@/components/organisms/whyus';
import AnimatedCategories from '@/components/organisms/Category';
import MissionVisionSection from '@/components/organisms/Benefits';

export default function Home() {
  const navigate = useRouter();

  return (
    <main>
      <div className='w-full flex flex-col'>
        {/* Hero */}
        <div className='absolute top-0 left-0 w-full z-10'>
          <Navbar />
        </div>

        <div className='w-full grid sm:grid-cols-2 h-full'>
          <div className='flex flex-col gap-4 bg-white p-10 xl:p-20 mt-20'>
            <h1 className='text-4xl font-bold'>
              Creating Content and
              <br />
              Inspiring You
            </h1>
            <p className='text-justify text-sm text-gray-500'>
              We take the stress out of content writing by creating tailor made
              work written by the industry’s best writers. Getting to know your
              business is our priority – watch us lead your brand onto the path
              to success.
            </p>

            <Image
              src='/images/asset-1.svg'
              width={400}
              height={400}
              alt='social media asset'
              className='mt-5'
            />
          </div>

          <div className='bg-hero bg-cover bg-center hidden sm:block' />
        </div>
      </div>
      <MissionVisionSection />

      <WhyChooseUs />
      <AnimatedCategories />

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
                        onClick={() => {
                          navigate.push('/contact');
                        }}
                        className='mt-4 w-full'
                      >
                        Get a Quote
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>

        <Container className='w-full flex flex-col items-center gap-6'>
          <h1 className='text-3xl font-bold font-urbanist uppercase'>
            Additionals
          </h1>

          <div
            className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'
            id='shop'
          >
            {map(additionalProducts, (item, i) => {
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
                        onClick={() => {
                          navigate.push('/contact');
                        }}
                        className='mt-4 w-full'
                      >
                        Get a Quote
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* BENEFITS */}
      <div className='py-28 bg-blue-400' id='benefits'>
        <Container className='w-full flex flex-col items-center gap-6 mt-20'>
          <h1 className='text-3xl font-bold font-urbanist uppercase'>
            References about our courses
          </h1>

          <References
            references={references}
            variant='carousel'
            variantItem='card'
          />
        </Container>
      </div>

      <Footer />
    </main>
  );
}
