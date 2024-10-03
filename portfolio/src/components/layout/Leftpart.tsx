import React from 'react';
import desktopLogo from '@/assets/img/logo/desktop-logo.png'

interface Iprops{
	isLeftPartClose:boolean,
	setIsLeftPartClose: (value:boolean) => void;
  }
const Leftpart = ({isLeftPartClose,setIsLeftPartClose}:Iprops) => {
	
   
  return (
    <div className={`${isLeftPartClose? "arlo_tm_leftpart_wrap opened":"arlo_tm_leftpart_wrap "}`}>
			<div className="leftpart_inner">
				<div className="logo_wrap">
					<a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
				</div>
				<div className="menu_list_wrap">
					<ul className="anchor_nav">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#skill">Skill</a></li>
						<li><a href="#services">Project</a></li>
						<li><a href="#contact">Contact me</a></li> 
					</ul>
				</div>
				<div className="leftpart_bottom">
					<div className="social_wrap">
						<ul>
							<li><a href="https://www.facebook.com/chiin2001"><i className="xcon-facebook"></i></a></li>
							<li><a href="https://www.facebook.com/chiin2001"><i className="xcon-twitter"></i></a></li>
							<li><a href="https://www.facebook.com/chiin2001"><i className="xcon-linkedin"></i></a></li>
							<li><a href="https://www.instagram.com/b.chi_n.e/"><i className="xcon-instagram"></i></a></li>
							<li><a href="https://www.facebook.com/chiin2001"><i className="xcon-behance"></i></a></li>
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
