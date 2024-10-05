import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const ContactContent = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { t } = useTranslation();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_mwsnbdd", "template_6dmpoxm", form.current, {
          publicKey: "JQs1DuzHduzuWmGNd",
        })
        .then(
          () => {
            if (!form.current) {
              console.error("Form reference is null");
              return;
            }
            form.current.reset();
            console.log("SUCCESS!");

            toast.success("send email success!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("send email failed!", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
    }
  };

  return (
    <div className="arlo_tm_section" id="contact">
      <div className="container">
        <div className="arlo_tm_title_holder contact">
          <h3>{t("contact")}</h3>
          <span>{t("Get in touch with me")}</span>
        </div>
      </div>
      <div className="arlo_tm_footer_contact_wrapper_all">
        <div className="arlo_tm_contact_wrap_all">
          <div className="container">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder contact">
                <h4>{t("contact")}</h4>
              </div>
              <div className="short_info_wrap">
                <ul>
                  <li>
                    <p>
                      <label>{t("Address")}:</label>
                      <span>Q.Tân Bình, Hồ Chí Minh</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>{t("Email")}:</label>
                      <span>
                        <a href="mailto:chien24022001a@gmail.com">
                          chien24022001a@gmail.com
                        </a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>{t("Website")}:</label>
                      <span>
                        <a href="mailto:example@gmail.com">
                          www.yourdomain.com
                        </a>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightbox">
              <div className="arlo_tm_contact_wrap">
                <div className="main_input_wrap">
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact_form"
                    id="contact_form"
                  >
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div className="empty_notice">
                      <span>{t("Please Fill Required Fields")}</span>
                    </div>
                    <div className="wrap">
                      <input
                        id="name"
                        type="text"
                        name="from_name"
                        placeholder={t("Your Name")}
                      />
                    </div>
                    <div className="wrap">
                      <input
                        id="email"
                        type="text"
                        name="from_email"
                        placeholder={t("Your Email")}
                      />
                    </div>
                    <div className="wrap">
                      <textarea
                        id="message"
                        placeholder={t("Your Message")}
                        name="message"
                      ></textarea>
                    </div>
                    <div className="arlo_tm_button">
                      <input
                        type="submit"
                        id="send_message"
                        value={t("Send Message")}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="arlo_tm_footer_wrap"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="container">
            <p>
              &copy; Copyright 2024 by <i>Bùi Đức Chiến.</i>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
