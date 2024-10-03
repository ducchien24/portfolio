import React from 'react';
import { IconContext } from 'react-icons';
import { IoMdSettings } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";
interface Project {
    icon: JSX.Element;
    name: string;
    description: string; 
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
             path:''
             
        },
        {
            icon:<SiYoutubemusic />,
            name:'Music App',
             description:`Build a book and user management website with functions: Log in, CRUD books, users(Create ,Read, Update, Delete), upload files 
             , upload avt.Built with: reactjs, react-hook, antd css library, react-router-dom,axios`,
              path:''

        },
        { 
            icon:<IoMdSettings />,
            name:'Book App',
            description:`Build a book and user management website with functions: Log in, CRUD books, users(Create ,Read, Update, Delete), upload files 
            , upload avt.Built with: reactjs, react-hook, antd css library, react-router-dom,axios`,
             path:''

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
               <a href="https://tiktok-qwbvvgau7-nemo2.vercel.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
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
                       </div>
                   </li>

                  )}
                 
              </ul>
               </a>
            </div>
        </div>
    </div>
</div>
  );
}

export default ProjectContent;
