'use client';
import { additionalProducts, productsData } from '@/data';
import { MainProvider } from 'ui-old-version';

const Provider = ({ children }) => {
  return (
    <MainProvider
      products={productsData.concat(additionalProducts)}
      locale={'en'}
      colorPrimary={'#2792f0'}
    >
      {children}
    </MainProvider>
  );
};

export default Provider;
