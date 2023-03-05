import React from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { HiHomeModern } from 'react-icons/hi2';
import { navigationLinks } from '@/features/common/modules/Navigation/NavigationConsts';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavigationMovbile = () => {
  return (
    <Box
      color="blue.600"
      padding="2rem"
      backgroundColor="white"
      display={{ base: 'block', md: 'none' }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Box display="flex" gap="2" alignItems="center">
            <HiHomeModern size="30" />
            <Text fontSize="2xl" fontWeight="black">
              CASAZ
            </Text>
          </Box>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {navigationLinks.map((item) => (
              <NavigationLinks
                key={item.title}
                link={item.link}
                title={item.title}
                icon={<item.icon />}
              />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMovbile;

const NavigationLinks = ({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon?: JSX.Element;
}) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
