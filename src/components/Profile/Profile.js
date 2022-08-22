import React, { useContext, useEffect, useState } from "react";
import Avatar from 'react-avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chip from "@material-ui/core/Chip";
import { useMoralis } from "react-moralis";


import { BookContext } from '../../Context/BookContext'
import axios from "axios";



function Profile() {

    const storyContext = React.useContext(BookContext);
    const { data } = storyContext;

    console.log('data==', data);
    console.log(localStorage.getItem('currentUserAddress'));



    useEffect(() => {
        const bList = JSON.parse(JSON.stringify(data));
        if (bList) {
            ListStoryData(bList)
        }
        console.log(bList);

    }, [data])


    const [storyData, setstoryData] = useState([]);


    async function ListStoryData(bList) {
        var array = [];
        if (bList) {
            // console.log(bList,'bList...1');
            for (let index = 0; index < bList.length; index++) {
                const element = bList[index];
                if (element.CID) {
                    console.log('element.CID', element.CID);
                    // console.log(bList, 'bList...2');

                    await axios.get(`https://${element.CID}.ipfs.dweb.link/story.json`).then((response) => {
                        console.log(response, 'response');
                        const id = element.objectId;
                        var newData = { ...response.data, id };
                        array.push(newData);
                        console.log('newData', newData);
                    });
                }

            }
        }
        setstoryData(array);
    }

    console.log('storyData', storyData);

    const { user } = useMoralis()

    function truncate(str, max, sep) {
        max = max || 15; var len = str.length; if (len > max) { sep = sep || "..."; var seplen = sep.length; if (seplen > max) { return str.substr(len - max) } var n = -0.5 * (max - len - seplen); var center = len / 2; return str.substr(0, center - n) + sep + str.substr(len - center + n); } return str;
    }
    return (
        <div className="app-container">
            <div className="profile-layout">
                <header className="background background-lg" style={{ backgroundColor: "#4b2caa" }}>
                    <div className="avatar avatar-profile center-block">
                        <Avatar name="Foo Bar" round={true} />
                    </div>
                    <div className="badges">
                        <h1 className="profile-name h3"> {user && truncate(user.attributes.ethAddress)}
                        </h1>
                    </div>
                </header>
            </div>
            {
                storyData && storyData.map((sData) => {
                    if(sData.walletAddress == localStorage.getItem('currentUserAddress')){
                        return (
                            <div className="card mb-3 offset-4 cardSec" style={{ maxWidth: "540px", marginTop: "55px", marginBottom: "5rem" }}>
                                <div className="row no-gutters">
                                    <div className="col-md-12 mt-2 mb-2 panel-title">
                                        {/* <div className="">Story by : {user && truncate(user.attributes.ethAddress)}</div> */}
                                        <div className="">Story by : {sData.authorName}</div>
                                    </div>
                                    <div className="col-md-4 works-image">
                                        <img className="card-img" src={sData.coverPicture}></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-heading">{sData.name}</p>
                                            <div className="offset-4 col-4"><Chip label={sData.category} component="a" href="#chip" /></div>
                                            <p className="card-text mt-3">{sData.description}</p>
                                            <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                   
                })

            }

        </div>
    )
}

export default Profile;