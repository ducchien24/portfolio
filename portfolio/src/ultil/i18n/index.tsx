import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


// import { ScrollReveal } from "@/ultil/ScrollReveal";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          
          "home":'home',
          "about":'about',
          "skill":'skill',
          "Project":'Project',
          "contact":'Contact me', 


          "I'm a":"I'm a",
//About
          "About me":"About me",
          'Hi there ... I`m a':'Hi there ... I`m a',
          'Hello ! I am':'Hello ! I`m ',
          'about-1':" I'm a web developer currently focusing on the front-end, specifically using the React library with JavaScript and TypeScript",
          'about-2':' I want to become proficient in front-end development so that I want  further explore back-end knowledge and work towards becoming a full-stack web developer.',
          'Birthday':'Birthday',
          'City':'City',
          'Major':'Major',
          'Study':'Study',
          'Degree':'Degree',
          'Download CV':'Download CV',
//Skill
          'Some About my Abilities':'Some About my Abilities',
          'skill-1':" I'm a front-end developer, so my skills are primarily focused on creating web interfaces. In addition to my hard skills, I also possess some soft skills that every developer should have.",
          'My technical skills':'My technical skills',
          'Programming Languages':'Programming Languages',
          'Library':'Library',
          'skill-2':'React,Redux,Redux- thunk,Axios,react-router-dom,yup,React-hook-form,Tailwind CSS,Antd,MUI,i18n',
          'More tool':'More tool',
          'skill-3':'Git(git,GitHub Desktop), React Deverloper tools, Postman',
          'My Short skills':'My Short skills',
          'Teamwork':'Teamwork',
          'Straight and cooperation':'Straight and cooperation',
          'Ability to learn and apply new technology':'Ability to learn and apply new technology',
//Project
          "Book App":"Book App",
          "description_bookapp":"Build a book and user management website with functions: Log in, CRUD books, users(Create ,Read, Update, Delete), upload files , upload avt.Built with: reactjs, react-hook, antd css library, react-router-dom,axios",
         "description_musicapp":"Build a music website where users can perform the following functions: log in using GitHub or Google accounts (NextAuth), listen to music, like songs, comment, search for music and add songs to user-created playlists, Built with: NextJs, TypeScript , Next Auth, MUI Library, react-slick, wavesurfer, query-string, dayjs",       
         " Music App":" Music App",
          "Completed projects":'Completed projects',
          "Go to demo web ":'Go to demo web ',
          "Go to link github":'Go to link github',
//Contact
          "Get in touch with me":'Get in touch with me',
          "Address":'Address',
          "Email":'Email',
          "Website":'Website',
          "Please Fill Required Fields":'Please Fill Required Fields',
          "Your Name":'Your Name ',
          "Your Email":'Your Email',
          "Your Message":'Your Message',
          "Send Message" :'Send Message'
      
        }
      },
      vi: {
        translation: {
          
          "home":'Trang chủ',
          "about":'Bản thân',
          "skill":'Kỹ năng',
          "project":'Dự án',
          "contact":'Liên hệ',

           "I'm a":' Tôi là một ',
//About
          "About me":"Bản thân tôi",
          'Hi there ... I`m a':'Xin chào ... Tôi là một',
          'Hello ! I am':'Xin chào ! Tôi là ',
          'about-1':' Tôi là một lập trình viên web hiện đang tập trung vào phần giao diện người dùng, đặc biệt là sử dụng thư viện React với JavaScript và TypeScript.',
          'about-2':' Tôi muốn trở nên thành thạo trong phát triển front-end để có thể khám phá thêm kiến thức về back-end và hướng tới trở thành một lập trình viên web full-stack.',
          'Birthday':'Sinh nhật',
          'City':'Thành phố',
          'Major':'Chuyên ngành',
          'Study':'Học vấn',
          'Degree':'Bằng cấp',
          'Download CV':'Tải xuống CV',
//Skill
          'Some About my Abilities':'Một chút về khả năng của tôi.',
          'skill-1':' Tôi là một lập trình viên front-end, vì vậy kỹ năng của tôi chủ yếu tập trung vào việc tạo ra giao diện web. Ngoài các kỹ năng chuyên môn, tôi cũng có một số kỹ năng mềm mà mọi lập trình viên nên có.',
          'My technical skills':'Các kỹ năng của tôi',
          'Programming Languages':'Ngôn ngữ lập trình',
          'Library':'Thư viện',
          'skill-2':'React,Redux,Redux- thunk,Axios,react-router-dom,yup,React-hook-form,Tailwind CSS,Antd,MUI,i18n',
          'More tool':'Một số công cụ ',
          'skill-3':'Git(git,GitHub Desktop), React Deverloper tools, Postman',
          'My Short skills':'Kỹ năng mềm',
          'Teamwork':'Làm việc nhóm',
          'Straight and cooperation':'Thẳng thắn và hợp tác',
          'Ability to learn and apply new technology':'Khả năng học hỏi và áp dụng công nghệ mới tốt .',
//Project
          "Book App":"Web quản lý sách",
          "description_bookapp":"Xây dựng một trang web quản lý sách và người dùng với các chức năng: Đăng nhập, CRUD sách, người dùng (Tạo, Đọc, Cập nhật, Xóa), tải tệp lên, tải ảnh đại diện lên. Được xây dựng bằng: ReactJS, React Hook, thư viện CSS Ant Design, React Router DOM, Axios.",
          "Music App":"Web âm nhạc",
          "description_musicapp":"Xây dựng một trang web âm nhạc nơi người dùng có thể thực hiện các chức năng sau: đăng nhập bằng tài khoản GitHub hoặc Google (NextAuth), nghe nhạc, thích bài hát, bình luận, tìm kiếm nhạc và thêm bài hát vào danh sách phát do người dùng tạo, Được xây dựng với: NextJs, TypeScript , Next Auth, MUI Library, react-slick, wavesurfer, query-string, dayjs",
          

          "Completed projects":'Những dự án đã thực hiện',
          "Go to demo web ":'Xem demo dự án ',
          "Go to link github":'Đi tới github dự án',
//Contact
          "Get in touch with me":'Liên hệ với tôi',
          "Address":'Địa chỉ',
          "Email":'Email',
          "Website":'Trang web',
          "Please Fill Required Fields":'Làm ơn không được để trống',
          "Your Name":'Tên của bạn ',
          "Your Email":'Email của bạn',
          "Your Message":'Lời nhắn của bạn',
          "Send Message" :'Gửi tin nhắn'
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
  export default i18n;