import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import avata from '@/assets/img/hero/avata.jpeg'
const HomeContent = () => {
  const { t } = useTranslation();
  const handScroll: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    const myElement = document.querySelector("#about") as HTMLElement;

    if (myElement) {
      myElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <div className="arlo_tm_section" id="home">
      <div className="arlo_tm_hero_header_wrap">
        <div className="arlo_tm_universal_box_wrap">
          <div className="bg_wrap">
            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
            <div className="overlay_color hero"></div>
          </div>
          <div className="content hero">
            <div className="inner_content">
              <div className="image_wrap">
                <img src={avata} alt="hero" style={{width:'200px',height:'200px'}} />
              </div>
              <div className="name_holder">
                <h3 style={{ color: "#E3872D" }}>
                {t("first name")} <span>{t("last name")}</span>
                </h3>
              </div>
              <div className="text_typing">
                <p style={{ color: "#E3872D" }}>
                  {t("I'm a")} &nbsp;
                  <TypeAnimation
                    sequence={[
                      "Fresher ",
                      2000,
                      "Web Deverloper",
                      2000,
                      "UI/UX Design",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "1.4em", display: "inline-block" }}
                    repeat={Infinity}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <a href="#about">
              <i
                className="xcon-angle-double-down "
                onClick={(e) => {
                  handScroll;
                }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
