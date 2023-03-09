/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Divider } from '@chakra-ui/react';

const PropertyThumbnailSlider = ({ photos }: { photos: string[] }) => {
  const [thumbsSwiper, setThumbsSlider] = useState<any>(null);
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((photo: string) => (
          <SwiperSlide key={photo}>
            <img src={photo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Divider marginY="1rem" />
      <Swiper
        onSwiper={setThumbsSlider}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((photo: string) => (
          <SwiperSlide key={photo}>
            <img src={photo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PropertyThumbnailSlider;
