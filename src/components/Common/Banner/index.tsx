import "./banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PreloadImages from "../PreloadImages";

export default function Banner() {
  const images = [
    { name: "Group 22", url: "/assets/images/partners/Group 22.png" },
    { name: "Partner 1", url: "/assets/images/partners/image 1.png" },
    { name: "NAIOP", url: "/assets/images/partners/NAIOP LOGO 2.png" },
    { name: "Northmarq Capital", url: "/assets/images/partners/Northmarq Capital 1.png" },
    { name: "Unnamed Partner", url: "/assets/images/partners/unnamed 1.png" },
  ];

  const imageUrls = images.map(img => img.url);
  imageUrls.push("/assets/icons/trusted.png"); // Add the trusted icon

  return (
    <PreloadImages images={imageUrls}>
      <section className="banner padding-container">
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
    </PreloadImages>
  );
}
