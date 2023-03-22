import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

type HeroFormType = {
  name: string;
  email: string;
  phone: string;
  gdpr: string;
};

const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroFormType>();

  const onSubmit = (data: HeroFormType) => console.log(data);

  return (
    <>
      <Box
        width="100%"
        padding="2rem"
        borderRadius="sm"
        backgroundColor="white"
        color="gray.700"
      >
        <Text fontSize="xl" fontWeight="bold">
          Free PDF Guide
        </Text>
        <Text fontSize="lg">
          Complete the form below to download your guide
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <VStack spacing={1} align="flex-start">
              <Input
                marginTop="1.3rem"
                id="name"
                type="text"
                placeholder="Name"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <Text fontSize="xs" color="red.400">
                  {errors.name.type}
                </Text>
              )}
            </VStack>
            <Flex
              gap={{ base: '0', sm: '1rem' }}
              flexDirection={{ base: 'column-reverse', sm: 'row' }}
            >
              <VStack spacing={1} align="flex-start">
                <Input
                  marginTop="1.3rem"
                  id="email"
                  type="text"
                  placeholder="Email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <Text fontSize="xs" color="red.400">
                    {errors.email.type}
                  </Text>
                )}
              </VStack>
              <VStack spacing={1} align="flex-start">
                <Input
                  marginTop="1.3rem"
                  id="phone"
                  type="text"
                  placeholder="Phone"
                  {...register('phone', { required: true })}
                />
                {errors.phone && (
                  <Text fontSize="xs" color="red.400">
                    {errors.phone.type}
                  </Text>
                )}
              </VStack>
            </Flex>
            <Checkbox
              marginTop="1.3rem"
              id="gdpr"
              type="checkbox"
              placeholder="GDPR"
              {...register('gdpr', { required: true })}
            >
              I consent to having this website store my submitted info
            </Checkbox>
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            width="100%"
            fontSize="xl"
            padding="2rem"
            marginTop="2rem"
          >
            Download Now
          </Button>
        </form>
      </Box>
    </>
  );
};

export default HeroForm;
