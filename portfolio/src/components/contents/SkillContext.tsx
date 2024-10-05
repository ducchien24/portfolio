import React from "react";
import { useTranslation } from "react-i18next";
const SkillContext = () => {
  const { t } = useTranslation();
  return (
    <div className="arlo_tm_section" id="skill">
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>{t("Some About my Abilities")}</h4>
              </div>
              <p>{t("skill-1")}</p>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div style={{ paddingBottom: "50px" }}>
                    <div>
                      <h5 style={{ paddingBottom: "20px" }}>
                        {t("My technical skills")}
                      </h5>
                    </div>
                    <p>
                      <b>{t("Programming Languages")}</b>: Javascript
                      ,Typescript
                    </p>
                    <p>
                      <b>{t("Library")}</b>:{" "}
                      {t(
                        "React,Redux,Redux- thunk,Axios,react-router-dom,yup,React-hook-form,Tailwind CSS,Antd,MUI,i18n"
                      )}
                    </p>
                    <p>
                      <b>{t("More tool")}</b>:{" "}
                      {t(
                        "Git(git,GitHub Desktop), React Deverloper tools, Postman"
                      )}
                    </p>
                  </div>
                  <div>
                    <div>
                      <h5 style={{ paddingBottom: "20px" }}>
                        {t("My Short skills")}
                      </h5>
                    </div>
                    <p>
                      <b>{t("Teamwork")}</b>: {t("Straight and cooperation")}
                    </p>
                    <p>{t("Ability to learn and apply new technology")} </p>
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
