import React from "react";
import { TypeAnimation } from "react-type-animation";
const HomeContent = () => {
  const handScroll: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()
    const myElement = document.querySelector("#about") as HTMLElement; 

    if (myElement) {
      
      myElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }
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
                <img src="img/hero/img.jpg" alt="hero" />
              </div>
              <div className="name_holder">
                <h3>
                  Bùi Đức <span>Chiến</span>
                </h3>
              </div>
              <div className="text_typing">
                <p>
                  I'm a &nbsp;
                  <TypeAnimation
                    sequence={[
                      "Freelancer ",
                      2000,
                      "Web Deverloper",
                      2000,
                      "UI/UX Design",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "1.4em", display: "inline-block" }}
                    repeat={Infinity} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                  
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <a href="#about">
              <i className="xcon-angle-double-down "
                onClick={(e)=>{handScroll}}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
