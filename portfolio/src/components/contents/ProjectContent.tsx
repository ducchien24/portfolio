import React from 'react';
import { IconContext } from 'react-icons';
import { IoMdSettings } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";
import { PiLinkDuotone } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa";
interface Project {
    icon: JSX.Element;
    name: string;
    description: string; 
    demo:string;
    path:string;
  }
const ProjectContent = () => {
    
    const project :Project[] =[
        { 
             icon: <IconContext.Provider value={{ size: "3em" }}>
                <IoMdSettings/>
                </IconContext.Provider>
                ,
             name:'Book App',
             description:`Build a book and user management website with functions: Log in, CRUD books, users(Create ,Read, Update, Delete), upload files 
             , upload avt.Built with: reactjs, react-hook, antd css library, react-router-dom,axios`,
             demo:'https://tiktok-qwbvvgau7-nemo2.vercel.app/',
             path:'',
             
        },
        {
            icon:<SiYoutubemusic />,
            name:'Music App',
             description:`Build a book and user management website with functions: Log in, CRUD books, users(Create ,Read, Update, Delete), upload files 
             , upload avt.Built with: reactjs, react-hook, antd css library, react-router-dom,axios`,
             demo:'https://tiktok-qwbvvgau7-nemo2.vercel.app/',
             path:'',

        },
        { 
            icon:<IoMdSettings />,
            name:'Book App',
            description:`Build a book and user management website with functions: Log in, CRUD books, users(Create ,Read, Update, Delete), upload files 
            , upload avt.Built with: reactjs, react-hook, antd css library, react-router-dom,axios`,
            demo:'https://tiktok-qwbvvgau7-nemo2.vercel.app/',
            path:'',

       },
     
       

    ]
  return (
    <div className="arlo_tm_section" id="services">
    <div className="arlo_tm_services_wrap">
        <div className="container">
            <div className="arlo_tm_title_holder">
                <h3>Project</h3>
                <span>Completed projects</span>
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
                          <div><a href={item.demo} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", display:'flex',alignItems:'center',gap:"4px"}}>Go to demo web <FaLocationArrow /></a></div>
                          <div><a href={item.demo} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", display:'flex',alignItems:'center',gap:"4px"}}><p>Go to link github </p><PiLinkDuotone /></a></div>
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
