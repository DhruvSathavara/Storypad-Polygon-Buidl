import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from '../../../Context/BookContext';
import { useMoralis } from "react-moralis";
import ReactReadMoreReadLess from "react-read-more-read-less";
import StoryDetail from "../StoryDetail";
import ReactDOM from "react-dom";







// const ReadMore = ({ children }) => {
//     const text = children ;
//     const [isReadMore, setIsReadMore] = useState(true);
//     const toggleReadMore = () => {
//         setIsReadMore(!isReadMore);
//     };
//     return (
//         <p className="text">
//             {isReadMore !== undefined ? text.slice(0, 150) : text}
//             <span onClick={toggleReadMore} className="read-or-hide">
//                 {isReadMore ? "...read more" : " show less"}
//             </span>
//         </p>
//     );
// };

function WildCardDetail() {
    // const [Content, setContent] = useState();
    const params = useParams();
    console.log('params', params);
    const { isAuthenticated, isInitialized } = useMoralis()


    const storyContext = React.useContext(BookContext);
    const { getStoryDetails, storyDetails } = storyContext;


    useEffect(() => {
        getStoryDetails(params)
    }, [isAuthenticated, isInitialized])

    // const longText = { storyDetails.content };
    // console.log(longText, 'longText');

    // {
    //     setContent(storyDetails.content)
    // }
    // console.log('Content==',Content);

    return (
        <div style={{ marginTop: "22px" }} className="container storyDetailContainer">
            <h2 className="storyDetailTitle">{storyDetails.name}</h2><br></br>
            <h5 className="text-muted">By :  {storyDetails.authorName}</h5><br></br>
            <img className="story-detail-img" src={storyDetails.coverPicture}></img><br></br>
            <small className="text-muted">Last updated {new Date().toLocaleString()}</small>

            <h6 className="story-content">
                {/* <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                    readMoreClassName="read-more-less--more"
                    readLessClassName="read-more-less--less"
                > */}
                <p>{storyDetails.content}</p>
                {/* </ReactReadMoreReadLess> */}
                {/* <ReadMore>
                    {storyDetails.content}
                </ReadMore> */}
            </h6>
        </div>

    );
};

export default WildCardDetail;