import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { BookContext } from '../../Context/BookContext';
import axios from "axios";

function BookList() {

    const bookContext = React.useContext(BookContext);
    const { data } = bookContext;
    // 
    useEffect(() => {
        const dList = JSON.parse(JSON.stringify(data));
        if (dList) {
            ListBookData(dList)
        }
    }, [data])
    // 

    const [bookData, setBookData] = useState([]);

    async function ListBookData(dList) {
        var array = [];
        if (dList) {
            for (let i = 0; i < dList.length; i++) {
                const element = dList[i];
                if (element.CID) {
                    await axios.get(`https://${element.CID}.ipfs.infura-ipfs.io/data.json`).then((response) => {
                        const id = element.objectId;
                        var newData = { ...response.data, id }
                        array.push(newData)
                    })
                }
            }
        }
        setBookData(array);
    }

    return (
        <>

            <div style={{ backgroundColor: "bisque" }} className="row container-fluid">
                <div className="section-title">
                    <h4>Related posts</h4>
                </div>
                <div className="main-div row container-fluid">

                    {
                        bookData && bookData.map((e) => {
                            if(e.category == "Newspaper"){
                          return   (
                            <div className="card col-3 offset-1">
                            <div className="row">
                                <img className="book-images" src={e.coverPicture}></img>
                            </div>
                            <div className="row clickable-chips">
                                <div className="offset-1 clo-4"><Chip label={e.subject} component="a" href="#chip" clickable />
                                </div>
                                <div className="offset-1 col-4"><Chip label={e.subject} component="a" href="#chip" clickable />
                                </div>
                            </div>
                            <div className="book-title">
                                <h5>{ e.name}</h5>
                            </div>
                            <div className="postedon">
                                <p className="posted-date"><strong>Posted On: </strong>{ new Date().toLocaleString()}</p>
                            </div>
                            <div className="some-text">
                                <p className="some-textofbook">{e.description}</p>
                            </div>
                            <div style={{marginTop:"50px" , marginBottom:"-25px"}} className=" readmore-book">
                                <Link to={`/doc-detail/${e.id}`}>
                                    <button className="readmore-btn">Read more</button>
                                </Link>                        </div>
                        </div>
                          )}
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default BookList;