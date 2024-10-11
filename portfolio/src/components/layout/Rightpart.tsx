import React from 'react';
import {HomeContent,AboutContent,SkillContext,ContactContent,ProjectContent} from '../contents/index'
interface Iprops {
   isLeftPartClose: boolean
   setIsLeftPartClose: (value:boolean) => void
}
const Rightpart = ({isLeftPartClose,setIsLeftPartClose}:Iprops) => {
  console.log(isLeftPartClose)
  return (
    <div className={`${isLeftPartClose? "arlo_tm_rightpart opened":"arlo_tm_rightpart"}`}>
    <div className="rightpart_inner ">
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
