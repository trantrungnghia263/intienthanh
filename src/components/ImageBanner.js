import React from "react";

// IMAGE
import bannerDesktop from "../assets/banner/ngang.jpg";
import bannerMobile from "../assets/banner/doc.jpg";

function ImageBanner() {
  return (
    <div className="image-banner h-[calc(100vh-64px)] lg:h-[calc(100vh-88px)] relative before:content-[''] before:absolute before:inset-0 before:bg-[#000000]/60 before:z-9 before:z-10">
      <div className="image-banner__bg hidden md:block absolute inset-0 w-full h-full">
        <img
          src={bannerDesktop}
          alt="Desktop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="image-banner__bg block md:hidden absolute inset-0 w-full h-full">
        <img
          src={bannerMobile}
          alt="Mobile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container w-full h-full">
        <div className="image-banner__content relative z-10 flex items-center justify-center flex-col gap-2 w-full h-full text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-semibold uppercase">
            In màu khổ lớn giá rẻ
          </h2>
          <p className="text-lg text-white font-normal max-w-[600px]">
            Dịch vụ in màu khổ lớn chất lượng cao, giá thành cạnh tranh. Phù hợp
            cho in poster, banner, standee, bảng hiệu,,...
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
