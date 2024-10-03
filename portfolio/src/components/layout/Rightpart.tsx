import React from 'react';
import {HomeContent,AboutContent,SkillContext,ContactContent,ProjectContent} from '../contents/index'
interface Iprops {
   isLeftPartClose: boolean
   setIsLeftPartClose: (value:boolean) => void
}
const Rightpart = ({isLeftPartClose,setIsLeftPartClose}:Iprops) => {
  return (
    <div className={`${isLeftPartClose? "arlo_tm_rightpart_wrap opened ":"arlo_tm_rightpart_wrap "}`}>
    <div className="rightpart_inner">
        <HomeContent/>
        <AboutContent/>
        <SkillContext/>    
        <ProjectContent/>
        <ContactContent/>

        
    </div>
</div>
  );
}

export default Rightpart;
