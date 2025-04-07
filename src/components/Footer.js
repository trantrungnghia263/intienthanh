import React, { useState } from "react";
import { Link } from "react-router-dom";

//IMAGES
// import iconFb from "../assets/social-media/facebook.png";
import iconGm from "../assets/social-media/envelope.png";
import iconZl from "../assets/social-media/zalo-icon.png";
import iconCopyRight from "../assets/social-media/copyright.png";

function Footer() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case "info":
        setIsInfoOpen(!isInfoOpen);
        break;
      case "category":
        setIsCategoryOpen(!isCategoryOpen);
        break;
      case "policy":
        setIsPolicyOpen(!isPolicyOpen);
        break;
      default:
        break;
    }
  };

  const info = [
    {
      id: 1,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800   text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
          />
        </svg>
      ),
      title: "90 Trần Thái Tông, Cầu Giấy, Hà Nội ",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800   text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
          />
        </svg>
      ),
      title: "0353.688.174",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800   text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
      ),
      title: "tienthanhprint@gmail.com",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800   text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      title: "T2 - CN / 8:00 AM - 11:00 PM",
    },
  ];

  const socialMedia = [
    // {
    //   icon: iconFb,
    //   url: "https://www.facebook.com/61567526177876",
    //   context: "Facebook",
    // },
    {
      icon: iconGm,
      url: "mailto: tienthanhprint@gmail.com?subject=Feedback&body=Message",
      context: "Gmail",
    },
    {
      icon: iconZl,
      url: "https://zalo.me/0353688174",
      context: "Zalo",
    },
  ];

  const categories = [
    { title: "In lụa - canvas", link: "/danh-muc-in/in-lua-canvas" },
    { title: "In decal pp", link: "/danh-muc-in/in-decal-pp" },
    { title: "In backlit", link: "/danh-muc-in/in-backlit" },
    { title: "In backdrop", link: "/danh-muc-in/in-backdrop" },
    { title: "In standee", link: "/danh-muc-in/in-standee" },
    { title: "In hastag cầm tay", link: "/danh-muc-in/in-hastag-cam-tay" },
    { title: "In tem nhãn", link: "/danh-muc-in/in-tem-nhan" },
  ];

  const policies = [
    { title: "Điều khoản dịch vụ", link: "/chinh-sach/dieu-khoan-dich-vu" },
    { title: "Chính sách giao hàng", link: "/chinh-sach/chinh-sach-giao-hang" },
    {
      title: "Chính sách bảo mật thông tin",
      link: "/chinh-sach/chinh-sach-bao-mat-thong-tin",
    },
    {
      title: "Chính sách đổi trả và hoàn tiền",
      link: "/chinh-sach/chinh-sach-doi-tra-va-hoan-tien",
    },
  ];

  const frame = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.048245872992!2d105.78532767503145!3d21.03075548061906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c0052fe7b%3A0x10434916d1d2b3de!2zU3VucmlzZSBCdWlsZGluZywgOTAgUC5UcuG6p24gVGjDoWkgVMO0bmcsIEThu4tjaCBW4buNbmcgSOG6rXUsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1744013728080!5m2!1svi!2s" width="100%" height="230" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;

  return (
    <div className="footer">
      <div className="footer__top bg-orange-700">
        <div className="container">
          <div className="footer__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols2 xl:grid-cols-4 gap-0 md:gap-y-7 md:gap-5 lg:gap-y-5 py-10 lg:py-14">
            <div className="footer__info">
              <div
                className="footer__title flex items-center justify-between uppercase text-lg text-white py-4 md:pt-0 pb-2 border-b border-solid"
                onClick={() => toggleSection("info")}
              >
                <p>CÔNG TY In Tiến Thành</p>
                <div className="flex items-center justify-center md:hidden">
                  <svg
                    className={`w-4 h-4 transition-transform font-semibold ${
                      isInfoOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isInfoOpen ? "max-h-screen" : "max-h-0"
                } md:max-h-screen`}
              >
                <ul className="footer__list pt-5">
                  {info.map((item) => (
                    <li
                      className="footer__item flex gap-1 items-center text-base text-white py-3"
                      key={item.id}
                    >
                      <div className="footer__icon">{item.icon}</div>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
                <div className="footer__social pt-6 flex items-center gap-4">
                  {socialMedia.map((item, index) => (
                    <Link
                      target="_blank"
                      to={item.url}
                      className="footer__icon w-8 h-8 flex items-center justify-center transition duration-300 hover:scale-105"
                      key={index}
                      aria-label="Icon link"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer__category">
              <div
                className="footer__title flex items-center justify-between uppercase text-lg text-white py-4 md:pt-0 py-4 md:pt-0 pb-2 border-b border-solid"
                onClick={() => toggleSection("category")}
              >
                <p>DỊCH VỤ IN ẤN</p>
                <div className="flex items-center justify-center md:hidden">
                  <svg
                    className={`w-4 h-4 transition-transform font-semibold ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isCategoryOpen ? "max-h-screen" : "max-h-0"
                } md:max-h-screen`}
              >
                <ul className="footer__list pt-5">
                  {categories.map((item, index) => (
                    <li
                      className="footer__item py-2 transiton duration-300 hover:ml-1 hover:opacity hover:opacity-80"
                      key={index}
                    >
                      <Link
                        to={item.link}
                        className="footer__link text-base text-white uppercase"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer__policy">
              <div
                className="footer__title flex items-center justify-between uppercase text-lg text-white py-4 md:pt-0 pb-2 border-b border-solid"
                onClick={() => toggleSection("policy")}
              >
                <p>CHÍNH SÁCH & PHÁP LÝ</p>
                <div className="flex items-center justify-center md:hidden">
                  <svg
                    className={`w-4 h-4 transition-transform font-semibold ${
                      isPolicyOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isPolicyOpen ? "max-h-screen" : "max-h-0"
                } md:max-h-screen`}
              >
                <ul className="footer__list pt-5">
                  {policies.map((item, index) => (
                    <li className="footer__item py-2" key={index}>
                      <Link
                        to={item.link}
                        className="footer__link flex items-center gap-1 text-base text-white uppercase"
                      >
                        <div className="flex items-center">
                          <svg
                            className="w-[16px] h-[16px] text-white  "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </div>
                        <p className="transiton duration-300 hover:ml-1 hover:opacity hover:opacity-80">
                          {item.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer__map">
              <div className="footer__title uppercase text-lg text-white py-4 md:pt-0 pb-2 border-b border-solid">
                Bản đồ
              </div>
              <div className="footer__frame pt-5">
                <div dangerouslySetInnerHTML={{ __html: frame }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom bg-orange-800">
        <div className="container">
          <div className="flex items-center gap-1 py-2">
            <img src={iconCopyRight} alt="" />
            <p className="text-sm text-white">
              Bản quyền thuộc về CÔNG TY IN TIẾN THÀNH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
