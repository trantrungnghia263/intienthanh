import React from "react";
import { Link } from "react-router-dom";

function NavSidebar() {
  const navigations = [
    {
      title: "In standee",
      link: "/danh-muc-in/in-standee",
    },
    {
      title: "In backdrop",
      link: "/danh-muc-in/in-backdrop",
    },
    {
      title: "In backlit",
      link: "/danh-muc-in/in-backlit",
    },
    {
      title: "In decal PP",
      link: "/danh-muc-in/in-decal-pp",
    },
    {
      title: "In lua - canvas",
      link: "/danh-muc-in/in-lua-canvas",
    },
    {
      title: "In hastag cầm tay",
      link: "/danh-muc-in/in-hastag-cam-tay",
    },
    {
      title: "In tem nhãn",
      link: "/danh-muc-in/in-tem-nhan",
    },
  ];

  return (
    <div className="nav-sidebar">
      <div className="nav-sidebar__content">
        <div className="nav-sidebar__title text-white text-base uppercase py-3 px-4 bg-orange-700">
          <p>Danh mục in</p>
        </div>
        <ul className="nav-sidebar__list bg-slate-50">
          {navigations.map((item, index) => (
            <li
              className="nav-sidebar__item transition duration-300 px-4 py-3 text-sm text-slate-700 uppercase border-b last:border-b-0 hover:bg-slate-100 hover:cursor-pointer"
              key={index}
            >
              <Link to={item.link} className="nav-sidebar__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavSidebar;
