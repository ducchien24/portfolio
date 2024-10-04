import React from 'react';
import { IconContext } from 'react-icons';
import { IoMdSettings } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";
import { PiLinkDuotone } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

interface Project {
    icon: JSX.Element;
    name: string;
    description: any; 
    demo:string;
    path:string;
  }
const ProjectContent = () => {
    const { t} = useTranslation();
    const project :Project[] =[
        { 
             icon: <IoMdSettings/>,
             name:t('Book App'),
             description:t( "description_bookapp"),
             demo:'https://tiktok-qwbvvgau7-nemo2.vercel.app/',
             path:'',
             
        },
        { 
            icon: <IoMdSettings/>,
            name:t('Book App'),
            description:t( "description_bookapp"),
            demo:'https://tiktok-qwbvvgau7-nemo2.vercel.app/',
            path:'',
            
       },
       { 
        icon: <IoMdSettings/>,
        name:t('Book App'),
        description:t( "description_bookapp"),
        demo:'https://tiktok-qwbvvgau7-nemo2.vercel.app/',
        path:'',
        
   },
     
       

    ]
  return (
    <div className="arlo_tm_section" id="services">
    <div className="arlo_tm_services_wrap">
        <div className="container">
            <div className="arlo_tm_title_holder">
                <h3>{t('project')}</h3>
                <span>{t('Completed projects')}</span>
            </div>
            <div className="list_wrap">
              
               <ul>
                  
                  {project.map((item)=>
                       <li key={item.name}>
                       <div className="inner">
                           {item.icon}
                           <div className="title_service">
                               <h3>{item.name}</h3>
                           </div>
                           <div className="text">
                               <p>{item.description}</p>
                           </div>
                          <div>
                          <div><a href={item.demo} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", display:'flex',alignItems:'center',gap:"4px"}}><p>{t('Go to demo web ')}</p><FaLocationArrow /></a></div>
                          <div><a href={item.demo} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", display:'flex',alignItems:'center',gap:"4px"}}><p>{t('Go to link github ')}</p><PiLinkDuotone /></a></div>
                          </div>
                       </div>
                   </li>

                  )}
                 
              </ul>
               
            </div>
        </div>
    </div>
</div>
  );
}

export default ProjectContent;
