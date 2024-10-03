import React from "react";

const SkillContext = () => {
  return (
    <div className="arlo_tm_section" id="skill">
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Some About my Abilities</h4>
              </div>
              <p>
                I am a front-end developer, so my skills are primarily focused
                on creating web interfaces. In addition to my hard skills, I
                also possess some soft skills that every developer should have.
              </p>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div style={{paddingBottom:'50px'}}>
                    <div >
                      <h5 style={{paddingBottom:'20px'}}>My technical skills</h5>
                    </div>
                    <p>
                      <b>Programming Languages</b>: Javascript ,Typescript
                    </p>
                    <p>
                      <b>Library</b>: React,Redux,Redux-
                      thunk,Axios,react-router-dom,yup,React-hook-form,Tailwind
                      CSS,Antd,MUI,i18n
                    </p>
                    <p>
                      <b>More tool</b>: Git(git,GitHub Desktop), React
                      Deverloper tools, Postman
                    </p>
                  </div>
                  <div>
                    <div>
                      <h5 style={{paddingBottom:'20px'}}>My Short skills</h5>
                    </div>
                    <p><b>Teamwork</b>: Straight and cooperation</p>
                    <p>Ability to learn and apply new technology </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillContext;
