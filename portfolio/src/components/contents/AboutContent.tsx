import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import MyCV from "@/assets/cv/BuiDucChien-CV-Fe.pdf";
import Parallax from "parallax-js";
import { useTranslation } from "react-i18next";
import avata from '@/assets/img/hero/avata.jpeg'

const AboutContent = () => {
  const sceneEl = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      parallaxInstance.enable();

      return () => parallaxInstance.disable();
    }
  }, []);

  return (
    <div
      className="arlo_tm_section relative"
      id="about"
      style={{ paddingTop: 100 }}
    >
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>{t("About me")}</h3>
            <span>{t("About me")}</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  ref={sceneEl}
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.6">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div
                      className="inner"
                      style={{ backgroundImage: `url(${avata})` }}
                    ></div>
                  </div>
                  <div className="border layer" data-depth="0.8">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    {t("Hi there ... I`m a")} &nbsp;
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
                      repeat={Infinity}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined} //
                    />
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    {t("Hello ! I am")}
                    <strong>{t("name")} </strong>.
                  </p>
                  <br />
                  <p>{t("about-1")}</p>
                  <br />
                  <p>{t("about-2")}</p>
                  <br />
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>{t("Birthday")}:</label> 24/02/2001
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>{t("City")}: </label> {t("city")}
                      </span>
                    </li>
                    <li>
                      <span>
                        <label> {t("Major")}:</label> IT - Information
                        technology
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>{t("Study")}:</label>Ha Noi University of
                        Industry
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>{t("Degree")}:</label> Good
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Mail :</label>{" "}
                        <a href="mailto:chien24022001a@gmail.com">
                          chien24022001a&#64;gmail.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={MyCV} download>
                        <span>{t("Download CV")}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
