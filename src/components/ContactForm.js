import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();
  const [notification, setNotification] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4abzv6s",
        "template_h6tzn93",
        form.current,
        "myTf2EtOyanMtwXCK"
      )
      .then(
        (result) => {
          setNotification({
            type: "success",
            message: "Email đã được gửi thành công!",
          });
          form.current.reset();
        },
        (error) => {
          setNotification({
            type: "error",
            message: "Gửi email thất bại, vui lòng thử lại.",
          });
        }
      );
  };

  const closeNotification = () => {
    setNotification(null);
  };

  // Tự động ẩn thông báo sau 3 giây
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        closeNotification();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="contact-form">
      {/* Hiển thị thông báo */}
      {notification && (
        <div
          className={`fixed top-40 right-5 bg-${
            notification.type === "success" ? "emerald-500" : "red-500"
          } border border-${
            notification.type === "success" ? "emerald-700" : "red-700"
          } text-white px-4 py-3 rounded transition-transform transform ${
            notification ? "translate-y-0" : "translate-y-10"
          } duration-500 ease-in-out`}
          role="alert"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className={`w-6 h-6 mr-2 ${
                  notification.type === "success"
                    ? "text-orange-600"
                    : "text-orange-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {notification.type === "success" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </div>
            <span
              className={`text-sm ${
                notification.type === "success"
                  ? "text-orange-600"
                  : "text-orange-600"
              }`}
            >
              {notification.message}
            </span>
            <button
              onClick={closeNotification}
              className="text-xl font-bold ml-4 text-gray-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="contact-form__form">
        <div className="contact-form__item pb-3">
          <label
            htmlFor="fullname"
            className="hidden md:block mb-2 text-base font-medium text-gray-500  "
          >
            Họ và tên
          </label>
          <input
            type="text"
            name="from_name"
            id="fullname"
            className="border rounded w-full py-3 px-3 text-gray-700 border-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-orange-700 focus:border-orange-700"
            placeholder="Nhập họ và tên của bạn"
            required
          />
        </div>
        <div className="contact-form__item pb-3">
          <label
            htmlFor="email"
            className="hidden md:block mb-2 text-base font-medium text-gray-500  "
          >
            Địa chỉ email
          </label>
          <input
            type="email"
            name="from_email"
            id="email"
            className="border rounded w-full py-3 px-3 text-gray-700 border-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-orange-700 focus:border-orange-700"
            placeholder="Nhập địa chỉ email của bạn"
            required
          />
        </div>
        <div className="contact-form__item pb-3">
          <label
            htmlFor="phone"
            className="hidden md:block mb-2 text-base font-medium text-gray-500  "
          >
            Số điện thoại
          </label>
          <input
            type="tel"
            name="from_phone"
            id="phone"
            className="border rounded w-full py-3 px-3 text-gray-700 border-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-orange-700 focus:border-orange-700"
            placeholder="Nhập số điện thoại của bạn"
            required
          />
        </div>
        <label
          htmlFor="message"
          className="hidden md:block mb-2 text-base font-medium text-gray-500  "
        >
          Nội dung
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          className="border rounded w-full py-3 px-3 text-gray-700 border-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-orange-700 focus:border-orange-700"
          placeholder="Nhập nội dung tin nhắn của bạn"
          required
        ></textarea>
        <div className="contact-form__button pt-3">
          <button type="submit" className="btn btn--border btn--md btn--1">
            Liên hệ ngay
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
