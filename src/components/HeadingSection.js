import React, { useEffect } from "react";

//AOS ANIMATION
import AOS from "aos";

function HeadingSection({ icon, title, alignment, isAnimate }) {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <div className="heading-section">
      <div className="container">
        <div
          className={`heading-section__content py-2 border-b flex items-center justify-${alignment} gap-1`}
          // data-aos={isAnimate ? "fade-up" : ""}
        >
          <div
            className="heading-section__icon flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
          <h3 className="heading-section__title text-lg text-orange-700 uppercase font-semibold">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HeadingSection;
