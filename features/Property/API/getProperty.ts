import { axios } from '@/lib/axios';

export const getProperty = async (id: string | string[]) => {
  const { data } = await axios.get('/properties/detail', {
    params: { externalID: id },
  });

  return data;
};
