import React from 'react';
import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { HiHomeModern } from 'react-icons/hi2';
import { navigationLinks } from '@/features/common/modules/Navigation/NavigationConsts';

const NavigationDesktop = () => {
  return (
    <Box
      color="blue.600"
      paddingY="2rem"
      paddingX="3rem"
      backgroundColor="white"
      display={{ base: 'none', md: 'block' }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                CASAZ{' '}
              </Text>
            </Box>
          </Link>
          <Flex gap='12' alignItems='center' fontWeight='medium'>
            {navigationLinks.map((item) => (
              <NavigationLinks
                key={item.title}
                link={item.link}
                title={item.title}
                icon={<item.icon />}
              />
            ))}
            <Button
              padding="1.5rem"
              colorScheme="twitter"
              fontSize="0.8rem"
              fontWeight="medium"
            >
              CREATE LISTING
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLinks = ({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon: JSX.Element;
}) => {
  return (
    <Link href={link}>
      <Flex align="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
