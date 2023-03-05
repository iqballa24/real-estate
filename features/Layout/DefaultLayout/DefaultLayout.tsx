import Footer from '@/features/common/modules/Footer';
import Navigation from '@/features/common/modules/Navigation';
import React from 'react';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
