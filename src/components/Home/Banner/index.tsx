import "./banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
  const images = [
    { name: "WSA", url: "/assets/images/WSA.png" },
    { name: "WSA", url: "/assets/images/WSA.png" },
    { name: "WSA", url: "/assets/images/WSA.png" },
    { name: "WSA", url: "/assets/images/WSA.png" },
    { name: "WSA", url: "/assets/images/WSA.png" },
    { name: "WSA", url: "/assets/images/WSA.png" },
  ];

  return (
    <section className="banner">
      <div className="banner-heading">
        <img
          src="/assets/icons/trusted.png"
          alt="Trusted Icon"
          className="icon"
        />
        <h4>
          <span>Trusted by</span> Hundreds of Enterprises Worldwide
        </h4>
      </div>

      {/* Images for Large Screens */}
      <div className="banner-images">
        {images.map((item, index) => (
          <img key={index} src={item.url} alt={item.name} />
        ))}
      </div>

      {/* Swiper Carousel for Smaller Screens */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: { slidesPerView: 3 }, 
          1024: { slidesPerView: images.length },
        }}
        className="banner-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.url} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
