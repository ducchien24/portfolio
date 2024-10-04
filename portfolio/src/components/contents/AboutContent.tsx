import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import MyCV from '@/assets/cv/BuiDucChien-CV-Fe.pdf'
import Parallax from "parallax-js";

const AboutContent = () => {
  
  const sceneEl = useRef(null);

  useEffect(() => {
    if(sceneEl&& sceneEl.current){
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }
}, [])

  return (
    <div className="arlo_tm_section relative" id="about" style={{paddingTop:100}}>
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>About me</span>
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
                    <img src="img/about/550x640.jpg"   alt="550x640" />
                    <div className="inner"
                     style={{backgroundImage: `url(img/about/1.jpg)`}}
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
                    Hi there ... I'm a &nbsp;
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
                      repeat={Infinity} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                      //
                    />
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Hello ! I'm <strong>Đức Chiến </strong>.
                  </p>
                  <br />
                  <p>
                  I'm a web developer currently focusing on the front-end, specifically using the React library with JavaScript and TypeScript.
                  </p>
                  <br />
                  <p>

I want to become proficient in front-end development so that I want  further explore back-end knowledge and work towards becoming a full-stack web developer.
                  </p>
                  <br />
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Birthday:</label> 24/02/2001
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>City:</label> Q.Tân Bình, Hồ Chí Minh
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Major :</label> IT - Information technology
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Study:</label>Ha Noi University of Industry
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Degree:</label> Good
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Mail:</label>{" "}
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
                        <span>Download CV</span>
                      </a>
                    </li>
                    {/* <li className="anchor">
                                    <a href="#contact"><span>Send Message</span></a>
                                </li> */}
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
