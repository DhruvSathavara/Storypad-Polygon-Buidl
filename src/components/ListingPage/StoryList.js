import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { BookContext } from '../../Context/BookContext';
import axios from "axios";

function StoryList() {

    // const bookContext = React.useContext(BookContext);
    // const { data } = bookContext;

    // useEffect(() => {
    //     const bList = JSON.parse(JSON.stringify(data));
    //     if (bList) {
    //         ListBookData(bList)
    //     }
    // }, [data])


    // const [bookData, setBookData] = useState([]);


    // async function ListBookData(bList) {
    //     var array = [];
    //     if (bList) {
    //         for (let index = 0; index < bList.length; index++) {
    //             const element = bList[index];
    //             if (element.CID) {
    //                 await axios.get(`https://${element.CID}.ipfs.infura-ipfs.io/data.json`).then((response) => {
    //                     const id = element.objectId;
    //                     var newData = { ...response.data, id };
    //                     array.push(newData);
    //                 });
    //             }

    //         }
    //     }
    //     setBookData(array);
    // }


    return (
        <>

            {/* <div style={{ backgroundColor: "bisque" }} className="row container-fluid mt-4">
                <div className="section-title mt-5">
                    <h4>Related posts</h4>
                </div>
                <div className="main-div row container-fluid">

                    {
                        bookData && bookData.map((e) => {
                            if (e.category == "Book") {
                                return (
                                    <div className="card col-3 offset-1">
                                        <div className="row">
                                            <img src={e.coverPicture} className="book-images" ></img>
                                        </div>
                                        <div className="row clickable-chips">
                                            <div className="offset-1 clo-4"><Chip label={e.subject} component="a" href="#chip" clickable />
                                            </div>
                                            <div className="offset-1 col-4"><Chip label={e.subject} component="a" href="#chip" clickable />
                                            </div>
                                        </div>
                                        <div className="book-title">
                                            <h5>{e.name}</h5>
                                        </div>
                                        <div className="postedon">
                                            <p className="posted-date"><strong>Posted On: </strong>{new Date().toLocaleString()}</p>
                                        </div>
                                        <div className="some-text">
                                            <p className="some-textofbook">{e.description}</p>
                                        </div>
                                        <div className=" readmore-book">
                                            <Link to={`/book-detail/${e.id}`}>
                                                <button className="readmore-btn">Read more</button>
                                            </Link>                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div> */}




 
<div style={{marginTop:"100px"}} className="container">
  <div className="text-center">
    {/* <h1>Bootstrap card tiled layout</h1> */}
  </div>
  <div className="container">
    <div className="card-columns">
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusanti facilis harum illo impedit incidunt laborum laudantium...
          </p>
          {/* <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p> */}
          <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>
          <Button variant="outline-info">Read Full Story</Button>
      </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
           ccusantium ad alias, aliquid amet aspernatur atque culpa cum debitis diis harum illo impedit incidunt laborum laudantium...
          </p>
          {/* <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p> */}
          <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>
          <Button variant="outline-info">Read Full Story</Button>
      </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amliquid amet aspernatur atque culpa cum debitis diis harum illliquid amet aspernatur atque culpa cum debitis diis harum illli harum illliquid amet aspernatur atque culpa cum debitis diis harum ill
          </p>
          {/* <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p> */}
          <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>
          <Button variant="outline-info">Read Full Story</Button>
      </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusanti facilis harum illo impedit incidunt laborum laudantium...
          </p>
          {/* <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p> */}
          <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>
          <Button variant="outline-info">Read Full Story</Button>
      </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
           ccusantium ad alias, aliquid amet aspernatur atque culpa cum debitis diis harum illo impedit incidunt laborum laudantium...
          </p>
          {/* <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p> */}
          <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>
          <Button variant="outline-info">Read Full Story</Button>
      </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amliquid amet aspernatur atque culpa cum debitis diis harum illliquid amet aspernatur atque culpa cum debitis diis harum illli harum illliquid amet aspernatur atque culpa cum debitis diis harum ill
          </p>
          {/* <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p> */}
          <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>
          <Button variant="outline-info">Read Full Story</Button>
      </div>
        </a>
      </div>
      
      {/* <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1472076638602-b1f8b1ac0b4a?ixlib=rb-0.3.5&s=63c9de7246b535be56c8eaff9b87dd89&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, doloremque!</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto maxime nemo omnis praesentium similique.</p>
          <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p>
        </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535086181678-5a5c4d23aa7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34c86263bec2c8f74ceb74e9f4c5a5fc&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet, consectetur.</h5>
          <p className="card-text">Amet commodi deleniti enim laboriosam odio placeat praesentium quis ratione rerum suscipit.</p>
          <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p>
        </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535074153497-b08c5aa9c236?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2aaf944a59f16fe1fe72f5057b3a7dd&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet, consectetur.</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p>
        </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1535124406821-d2848dfbb25c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c434d75b44c9c23fc9df2a9a77d59f&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, consequatur culpa cumque deserunt dignissimos error explicabo fugiat harum ipsam magni minus mollitia nemo perferendis qui repellendus rerum saepe vel voluptate voluptatem voluptatum!
            Aperiam, labore, molestiae!..</p>
          <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p>
        </div>
        </a>
      </div>
      <div className="card carding">
        <a href="#">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1508015926936-4eddcc6d4866?ixlib=rb-0.3.5&s=10b3a8717ab609be8d7786cab50c4e0b&auto=format&fit=crop&w=500&q=80" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="story-card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi debitis eaque explicabo fuga maiores necessitatibus, neque omnis optio vel!</p>
          <p className="card-text"><small className="text-muted"><i className="fas fa-eye"></i>1000<i className="far fa-user"></i>admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018</small></p>
        </div>
        </a>
      </div> */}

    </div>
  </div>
</div>
        </>

    )
}
export default StoryList;