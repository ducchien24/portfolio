import React, { useState } from "react";
import { Rightpart, Leftpart, Preloader } from "../components/layout/index";
import { Value } from "sass";
import { useTranslation } from 'react-i18next';
import i18n from'@/ultil/i18n/index'; 
import './index.css'
const Portfolio = () => {
  const { t } = useTranslation();
  const [isLeftPartClose,setIsLeftPartClose]=useState<boolean>(false)
  const [isEnglish,setIsEnglish]=useState<boolean>(false)
  const [isActive,setIsActive]=useState<boolean>(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    };
  console.log(isLeftPartClose)
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>
      <Preloader></Preloader>

      {/*MOBILE MENU */}
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="index.html">
              <img src="img/logo/mobile_logo.png" alt="mobile_logo" />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div className={`hamburger hamburger--collapse-r ${isActive?'is-active':''}`}
            onClick={()=>{setIsActive(!isActive)}}>
              <div className="hamburger-box">
                <div className="hamburger-inner">   </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`arlo_tm_mobile_menu_wrap `} 
        style={isActive ? { display: 'block' } : { display: 'none' }}>
          <div className="mob_menu">
            <ul className="anchor_nav">
            {
			   isEnglish ?
						<li ><a onClick={()=>{setIsEnglish(!isEnglish) ;changeLanguage('en') }} style={{cursor:'pointer'}}>English</a></li>:
						<li><a onClick={()=>{setIsEnglish(!isEnglish) ;changeLanguage('vi') }} style={{cursor:'pointer'}}>Vietnamese</a></li>
			             }
						<li><a href="#home" onClick={()=>{setIsActive(!isActive)}} >{t('home')}</a></li>
						<li><a href="#about" onClick={()=>{setIsActive(!isActive)}}>{t('about')}</a></li>
						<li><a href="#skill" onClick={()=>{setIsActive(!isActive)}}>{t('skill')}</a></li>
						<li><a href="#services" onClick={()=>{setIsActive(!isActive)}}>{t('project')}</a></li>
						<li><a href="#contact" onClick={()=>{setIsActive(!isActive)}}>{t('contact')}</a></li> 
            </ul>
          </div>
        </div>
      </div>
      {/*/MOBILE MENU */}

      {/*CONTENT */}
      <div className="arlo_tm_content">
        <Leftpart isLeftPartClose={isLeftPartClose} setIsLeftPartClose={setIsLeftPartClose} isEnglish={isEnglish} setIsEnglish={setIsEnglish} changeLanguage={changeLanguage}/>
        <Rightpart isLeftPartClose={isLeftPartClose} setIsLeftPartClose={setIsLeftPartClose}/>

       
      </div>
    </div>
  );
};

export default Portfolio;
