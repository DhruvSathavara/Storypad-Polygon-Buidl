import React, { useState } from "react";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  function StoryDetail () {
    return (
      <div style={{marginTop:"22px"}} className="container storyDetailContainer">
        <h2 className="storyDetailTitle">Story Title</h2><br></br>
        <small className="text-muted">By : Author name</small><br></br>
        <img className="story-detail-img" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"></img><br></br>
        <small className="text-muted">Last updated {new Date().toLocaleString()}</small>

        <h6 className="story-content">
          <ReadMore>
            GeeksforGeeks: A Computer Science portal for geeks. 
            It contains well written, well thought and well explained
            computer science, programming articles and quizzes. 
            It provides a variety of services for you to learn, so thrive
            and also have fun! Free Tutorials, Millions of Articles, Live, 
            Online and Classroom Courses ,Frequent Coding Competitions,
            Webinars by Industry Experts, Internship opportunities, and Job
            Opportunities. Knowledge is power!
          </ReadMore>
        </h6>
      </div>
      
    );
  };
    
  export default StoryDetail;