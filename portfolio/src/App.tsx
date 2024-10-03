import Portfolio from "./screen/Portfolio";
import "@/style/style.scss";
import "@/style/plugins.scss";
import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
// import { ScrollReveal } from "@/ultil/ScrollReveal";
function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  return () => {
    window.removeEventListener('scroll', toggleVisibility);
  };
}, []);

  // const sr = ScrollReveal({
  //   origin: "top",
  //   distance: "60px",
  //   duration: 3000,
  //   delay: 400,
  // });
  // useEffect(() => {
  //   sr.reveal(`.rightbox`);
  //   sr.reveal(`.bounce`, { delay: 600, distance: "100px", interval: 100 });
  //   sr.reveal(`.about__data,.text_typing`, { origin: "right" });
  //   sr.reveal(`.leftbox,.name_holder`, { origin: "left" });
  //   sr.reveal(`.list_wrap,.image_wrap`, { interval: 200 });
  // }, []);

  return (
    <>
      <Portfolio />
      <div className={`arlo_tm_totop ${isVisible? 'opened' :''} `}
      onClick={scrollToTop} ></div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
