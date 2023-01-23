import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import Card from './Card';
import analytics from './analytics';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import './SaveTheDate.css';

function SaveTheDate() {
  const slides = [
    {
      id: 'Date',
      render: (key: number) => (
        <SwiperSlide key={key}>
          <Card
            title="kevin + alexa"
            type="we're getting married"
            description="january 13, 2024"
          />
        </SwiperSlide>
      ),
    },
    {
      id: 'Ceremony',
      render: (key: number) => (
        <SwiperSlide key={key}>
          <Card
            title="st. benedict"
            type="ceremony"
            description="silang, cavite"
          />
        </SwiperSlide>
      ),
    },
    {
      id: 'Reception',
      render: (key: number) => (
        <SwiperSlide key={key}>
          <Card
            title="narra hill"
            type="reception"
            description="laurel, batangas"
          />
        </SwiperSlide>
      ),
    },
  ];

  return (
    <Swiper
      direction="vertical"
      modules={[Mousewheel, Pagination]}
      mousewheel={true}
      onSlideChange={(swiper) => {
        const slideId = slides[swiper.realIndex].id;
        if (slideId) {
          analytics.viewSlide(slideId);
        }
      }}
    >
      {slides.map((slide, key) => slide.render(key))}
    </Swiper>
  );
}

export default SaveTheDate;
