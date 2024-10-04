import React, { useState } from 'react';
import desktopLogo from '@/assets/img/logo/desktop-logo.png'
import { useTranslation } from 'react-i18next';
import i18n from'@/ultil/i18n/index'; 
interface Iprops{
	isLeftPartClose:boolean,
	setIsLeftPartClose: (value:boolean) => void;
  }
const Leftpart = ({isLeftPartClose,setIsLeftPartClose}:Iprops) => {
	const [isEnglish,setIsEnglish]=useState<boolean>(false)
	const { t } = useTranslation();
	
   console.log(isEnglish)
   

   const changeLanguage = (lng: string) => {
	 i18n.changeLanguage(lng);
   };
  return (
    <div className={`${isLeftPartClose? "arlo_tm_leftpart_wrap opened":"arlo_tm_leftpart_wrap "}`}>
			<div className="leftpart_inner">
				<div className="logo_wrap">
					<a href="#" ><img src={desktopLogo} alt="desktop-logo" /></a>
					
				</div>
				<div className="menu_list_wrap">
					<ul className="anchor_nav" >
	                	{
			   isEnglish ?
						<li ><a onClick={()=>{setIsEnglish(!isEnglish) ;changeLanguage('en') }} style={{cursor:'pointer'}}>English</a></li>:
						<li><a onClick={()=>{setIsEnglish(!isEnglish) ;changeLanguage('vi') }} style={{cursor:'pointer'}}>Vietnamese</a></li>
			             }
						<li><a href="#home" >{t('home')}</a></li>
						<li><a href="#about" >{t('about')}</a></li>
						<li><a href="#skill">{t('skill')}</a></li>
						<li><a href="#services">{t('project')}</a></li>
						<li><a href="#contact">{t('contact')}</a></li> 
					</ul>
				</div>
				<div className="leftpart_bottom">
					<div className="social_wrap">
						<ul>
							<li ><a href="https://www.facebook.com/chiin2001" target='blank' ><i className="xcon-facebook" ></i></a></li>
							<li><a href="https://www.facebook.com/chiin2001" target='blank'><i className="xcon-twitter"></i></a></li>
							<li><a href="https://www.facebook.com/chiin2001" target='blank' ><i className="xcon-linkedin"></i></a></li>
							<li><a href="https://www.instagram.com/b.chi_n.e/" target='blank' ><i className="xcon-instagram"></i></a></li>
							<li><a href="https://www.facebook.com/chiin2001" target='blank' ><i className="xcon-behance"></i></a></li>
						</ul>
					</div>
				</div>
				<a className={`${isLeftPartClose? "arlo_tm_resize opened ":"arlo_tm_resize"}`} href="#" onClick={()=>{setIsLeftPartClose(!isLeftPartClose)}} 
				><i className={`${isLeftPartClose? "xcon-angle-left opened ":"xcon-angle-left"}`}></i></a>
				
			</div>
		</div>
  );
}

export default Leftpart;
