import React from "react";
import Header from '../../components/header/Header';
import BlogCard from './BlogCard';
import './Insight.css'; 
import Blog1 from '../../assets/blog1.svg'
import Blog2 from '../../assets/blog2.svg'
// import Blog3 from '../../assets/blog3.svg'
// import Blog4 from '../../assets/blog4.svg'
// import Blog5 from '../../assets/blog5.svg'
import Bg from '../../assets/blogbg.svg'
import EditorName from '../../assets/editor_name.png'

function Insight(props) {
  const info = [
    {
      title: "You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users",
      content: "Master ChatGPT by learning prompt engineering. — Most of us use ChatGPT wrong. We don’t include examples in our prompts. We ignore that we can control ChatGPT’s behavior with roles. We let ...",
      date: "04/04/2023",
      image: Blog1
    },
    {
      title: "Use Git like a senior engineer",
      content: "Git is a powerful tool that feels great to use when you know how to use it. — I’ve used these features of Git for years across teams and projects. I’m still developing opinions around some workflows (like to squash or ...",
      date: "04/04/2023",
      image: Blog2
    },
    {
      title: "Use Git like a senior engineer",
      content: "Git is a powerful tool that feels great to use when you know how to use it. — I’ve used these features of Git for years across teams and projects. I’m still developing opinions around some workflows (like to squash or ...",
      date: "04/04/2023",
      image: Blog2
    },
    {
      title: "Use Git like a senior engineer",
      content: "Git is a powerful tool that feels great to use when you know how to use it. — I’ve used these features of Git for years across teams and projects. I’m still developing opinions around some workflows (like to squash or ...",
      date: "04/04/2023",
      image: Blog2
    },
    {
      title: "Use Git like a senior engineer",
      content: "Git is a powerful tool that feels great to use when you know how to use it. — I’ve used these features of Git for years across teams and projects. I’m still developing opinions around some workflows (like to squash or ...",
      date: "04/04/2023",
      image: Blog2
    },
    {
      title: "Use Git like a senior engineer",
      content: "Git is a powerful tool that feels great to use when you know how to use it. — I’ve used these features of Git for years across teams and projects. I’m still developing opinions around some workflows (like to squash or ...",
      date: "04/04/2023",
      image: Blog2
    },
  ];

  return (
    <div className="blog-div" style={{backgroundImage: `url(${Bg})`}}>
        <Header page="inSight"/>
        <div>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <div className="blogcontainer">
            <div className="BlogCards">
              {
                info.map((obj) => {
                  return (
                    <BlogCard title={obj.title} content={obj.content} date={obj.date} image={obj.image}/>
                  )
                })  
              }
            </div>
            <div className="editor">
              <div>
                <img className="editor-img" src={EditorName} alt="Editor Name"/>
              </div>
              <div className="editor-name"><strong>Editor Name</strong></div>
              <div>inSight Editor-In-Chief</div>
              <br></br>
              <div>To submit an article, contact: <br></br>exampleEmail@gmail.com</div>
              <br></br>
              <div>inSight is a collection of articles submitted by users that highlight, summarize, and promote recent advances in technology in the field of ophthalmology. inSight remains free from industry support and has no conflicts of interest.</div>
            </div>  
          </div>
        </div>
    </div>
  );
}
export default Insight;
