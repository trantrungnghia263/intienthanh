import React from "react";

function AnnouncementBar() {
  return (
    <div className="announcement-bar bg-orange-700 text-white">
      <div className="container">
        <div className="announcement-bar__content flex items-center justify-between py-3">
          <div className="announcement-bar__left">
            <p className="text-xs text-white">
              In màu khổ lớn giá rẻ tại in Tiến Thành
            </p>
          </div>
          <div className="announcement-bar__right flex gap-4">
            <div className="flex items-center gap-1.5">
              <svg
                className="text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              <p className="text-xs text-white">
                90 Trần Thái Tông - Cầu Giấy - Hà Nội
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <p className="text-xs text-white">T2 - CN / 8:00 AM - 11:00 PM</p>
            </div>
            <a href="tel:0353688174" className="flex items-center gap-1.5">
              <svg
                className="text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <p className="text-xs text-white">0353688174</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
