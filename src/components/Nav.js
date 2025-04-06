import React from "react";
import { useLocation, Link } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const listNav = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "Giới thiệu",
      link: "/gioi-thieu",
    },
    {
      title: "Danh mục in",
      link: "/danh-muc-in",
      sub_menu: [
        { title: "In bạt hiflex", link: "/danh-muc-in/in-bat-hiflex" },
        { title: "In băng rôn", link: "/danh-muc-in/in-bang-ron" },
        { title: "In decal ô tô", link: "/danh-muc-in/in-decal-o-to" },
        { title: "In decal PP", link: "/danh-muc-in/in-decal-pp" },
        { title: "In backlit", link: "/danh-muc-in/in-backlit" },
        { title: "In lụa canvas", link: "/danh-muc-in/in-lua-canvas" },
        { title: "In hastag cầm tay", link: "/danh-muc-in/in-hastag-cam-tay" },
        { title: "In standee", link: "/danh-muc-in/in-standee" },
        { title: "In backdrop", link: "/danh-muc-in/in-backdrop" },
      ],
    },
    {
      title: "Tin tức",
      link: "/tin-tuc",
    },
    {
      title: "Liên hệ",
      link: "/lien-he",
    },
  ];

  return (
    <div className="nav">
      <ul className="nav__list flex">
        {listNav.map((item, index) => (
          <li className="nav__item group relative" key={index}>
            {/* Thẻ Link chỉ chứa tiêu đề */}
            <Link
              to={item.link}
              className={`nav__link text-base uppercase text-lime-600 flex items-center gap-2 px-4 py-4 transition duration-150 group-hover:text-lime-700 group-hover:underline ${
                location.pathname === item.link ? "underline" : ""
              }`}
            >
              <p>{item.title}</p>
              {item.sub_menu && (
                <div className="nav__icon flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-lime-600 transition duration-300 group-hover:rotate-180"
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
                      d="m8 10 4 4 4-4"
                    />
                  </svg>
                </div>
              )}
            </Link>

            {/* Sub menu được tách riêng */}
            {item.sub_menu && (
              <ul className="nav__sub-menu w-full absolute top-full left-0 z-10 opacity-0 translate-y-10 pointer-events-none transition duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto bg-white">
                {item.sub_menu.map((sub, subIndex) => (
                  <li
                    className={`nav__item transition duration-150 text-lime-700 hover:text-lime-800 ${
                      location.pathname === sub.link ? "bg-slate-50" : ""
                    }`}
                    key={subIndex}
                  >
                    <Link
                      to={sub.link}
                      className="nav__link block text-sm uppercase text-lime-600 px-4 py-2"
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
