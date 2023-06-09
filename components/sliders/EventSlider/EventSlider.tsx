import { FC } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { CardEventSlider } from '../EventSlider/CartEventSlider';

export default interface Events {
  cover_img: string;
  title: string;
  description: string;
  url: string;
  votes: number;
}

export interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: Events[];
}

export const EventSlider: FC<IEventSlider> = ({ title, subtitle, events }) => {
  return (
    <div>
      <div className="pb-6">
        <h2 className="app-title-2 pb-1">{title}</h2>
        <p className="app-subtitle-2">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset' }}
          slidesPerView={'auto'}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            330: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          {events?.map((event, index) => (
            <SwiperSlide key={index}>
              <CardEventSlider
                cover_img={event.cover_img}
                description={event.description}
                title={event.title}
                url={event.url}
                votes={event.votes}
              ></CardEventSlider>
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 left-auto cursor-pointer">
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button title="t" onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
