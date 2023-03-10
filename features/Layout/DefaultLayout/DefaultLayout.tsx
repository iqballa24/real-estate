import Footer from '@/features/common/modules/Footer';
import Navigation from '@/features/common/modules/Navigation';
import Head from 'next/head';
import React from 'react';

const DefaultLayout: React.FC<{
  children: React.ReactNode;
  title: string;
  description: string;
}> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
