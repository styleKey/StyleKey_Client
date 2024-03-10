import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
import { useState, useEffect } from 'react';

import useGetImages from './hooks/useGetImages';

interface StyleImage {
  id: number;
  title: string;
  image: string;
}

// import required modules
export default function Slide() {
  const { data: images } = useGetImages();

  const [styleImages, setStyleImages] = useState<StyleImage[]>([]);
  useEffect(() => {
    if (images) {
      setStyleImages(images);
    }
  }, [images]);

  return (
    <>
      {styleImages.length > 0 && (
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          speed={800}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slideToClickedSlide={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {styleImages.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
