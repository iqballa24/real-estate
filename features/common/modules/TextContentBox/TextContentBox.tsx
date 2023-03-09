import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react';

const TextContentBox: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <Box backgroundColor="white" padding="1.5rem" marginBottom="1rem">
      <Text
        fontSize="1.5rem"
        fontWeight="light"
        color="gray.600"
        marginBottom="0.5rem"
      >
        {title}
      </Text>
      <Divider marginY="0.7rem" />
      {children}
    </Box>
  );
};

export default TextContentBox;
