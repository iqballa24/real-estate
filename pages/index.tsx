import FeaturedProperties from '@/features/Home/components/FeaturedProperties';
import HeroBanner from '@/features/Home/components/HeroBanner';
import MeetTheTeam from '@/features/Home/components/MeetTheTeam';
import Partners from '@/features/Home/components/Partners';
import Testimonials from '@/features/Home/components/Testimonials';
import DefaultLayout from '@/features/Layout/DefaultLayout';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Home({
  featuredProperties,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout>
      <HeroBanner />
      <FeaturedProperties featuredProperties={featuredProperties} />
      <MeetTheTeam />
      <Partners />
      <Testimonials />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  type HitsType = Array<Object>;
  const { hits }: { hits: HitsType } = require('@/features/data/properties');
  return {
    props: { featuredProperties: hits.slice(0, 5) },
  };
};
