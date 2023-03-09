import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import DefaultLayout from '@/features/Layout/DefaultLayout';
import { Box, SimpleGrid } from '@chakra-ui/react';
import PropertyCard from '@/features/common/modules/PropertyCard';

const Properties = ({
  properties,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" padding="3rem">
        <Box maxWidth="1280px" margin="0 auto">
          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            gap={{ base: '0', sm: '2rem' }}
          >
            {properties.map((property: Object, index: number) => (
              <PropertyCard key={index} {...property} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Properties;

export const getStaticProps: GetStaticProps = async () => {
  const { hits } = require('@/features/data/properties');

  return {
    props: {
      properties: hits,
    },
  };
};
