import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from '../../../Context/BookContext';
import { useMoralis } from "react-moralis";
import StoryDetail from "../StoryDetail";
import ReactDOM from "react-dom";


function FantasyDetail() {
    const params = useParams();
    const { isAuthenticated, isInitialized } = useMoralis()


    const storyContext = React.useContext(BookContext);
    const { getStoryDetails, storyDetails } = storyContext;

    console.log('storyDetails==', storyDetails);


    useEffect(() => {
        getStoryDetails(params)
    }, [isAuthenticated, isInitialized])

    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content">

        </p>
    </div>


    return (
        <>

            <div style={{ marginTop: "22px" }} className="container storyDetailContainer">
                <h2 className="storyDetailTitle">{storyDetails.name}</h2><br></br>
                <h5 className="text-muted">By : {storyDetails.authorName}</h5><br></br>
                <img className="story-detail-img" src={storyDetails.coverPicture}></img><br></br>
                <small className="text-muted">Last updated {new Date().toLocaleString()}</small>

                <h6 className="story-content">

                    <p>{storyDetails.content}</p>

                </h6>
            </div>
        </>
    );
};

export default FantasyDetail;