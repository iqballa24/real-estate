import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const AgentCard = ({
  name,
  image,
  description,
  title,
}: {
  name: string;
  image: string;
  description: string;
  title: string;
}) => {
  return (
    <Box
      backgroundColor="#f1f1f14a"
      padding="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      marginBottom={{ base: '1rem', sm: '0' }}
    >
      <Image
        src={image}
        width="10rem"
        height="10rem"
        objectFit="cover"
        borderRadius="full"
        marginBottom="2rem"
        shadow="md"
        alt=""
      />
      <Text color="blue.400" fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Text fontSize="lg" color="blue.600">
        {title}
      </Text>
      <Text
        fontSize="md"
        fontWeight="light"
        noOfLines={4}
        marginTop="1rem"
        color="gray.600"
      >
        {description}
      </Text>
    </Box>
  );
};

export default AgentCard;
