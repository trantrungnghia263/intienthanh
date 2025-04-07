import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// COMPONENTS
import Nav from "./Nav";
import MenuHamburger from "./MenuHamburger";
import AnnouncementBar from "./AnnouncementBar";

// IMAGE
import logo from "../assets/logo/logo.png";

function Header({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Clear search query when location changes
  useEffect(() => {
    setSearchQuery("");
  }, [location]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="header sticky top-0 z-50 bg-white border-b">
      <div className="header__announcement-bar">
        <AnnouncementBar />
      </div>
      <div className="header__top lg:py-3">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/" className="header__logo hidden lg:block">
              <img src={logo} alt="" className="h-16" />
            </Link>
            <div className="header__wrapper py-3 lg:py-0 w-full md:w-auto">
              <div className="hidden lg:block">
                <Nav />
              </div>
              <div className="flex items-center justify-between lg:hidden">
                <Link
                  to="/"
                  className="header__logo flex items-center justify-center"
                >
                  <img src={logo} alt="Logo" className="h-10" />
                </Link>
                <div
                  className="header__toggle w-7 h-7 border flex items-center justify-center"
                  onClick={() => setIsOpen(true)}
                >
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-500"
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
                      d="M5 7h14M5 12h14M5 17h14"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSearchSubmit}
              className="header__search flex items-center rounded-3xl ps-4 pe-2 bg-white w-96 border border-orange-700 text-orange-700 hidden lg:flex"
            >
              <input
                className="w-full bg-transparent border-none px-4 py-2.5 ps-0 text-orange-700 placeholder-orange-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                type="search"
                name="search"
                id="search"
                placeholder="Nhập từ khóa bạn muốn tìm kiếm..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                className="header__btn-search group w-9 h-8 flex items-center justify-center rounded-full transition duration-300 hover:bg-orange-700 hover:text-white hover: "
                aria-label="Search"
                type="submit"
              >
                <svg
                  className="w-4 h-4 dark:text-orange-700 text-orange-700 transition duration-300 group-hover:text-white group-hover: "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="header__drawer">
        <MenuHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Header;
