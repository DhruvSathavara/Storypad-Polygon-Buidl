import React from "react";
import { Link } from "react-router-dom";
function HomeCategory() {
    return (<>

        <h2 className="browse-stories">BROWSE STORIES</h2>

        <div style={{ background: "mistyrose" }}>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="https://b4qlw8tl.media.zestyio.com/Wattys-Fanfiction.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="fanfiction">
                                <div class="profile-name">FANFICTION</div></Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>

                    <div class="col-md-4">

                        <div class="profile-card-2">

                            <img src="https://b4qlw8tl.media.zestyio.com/Wattys-Fantasy.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="fantasy">
                                <div class="profile-name">FANTASY</div>
                            </Link>

                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="	https://b4qlw8tl.media.zestyio.com/Wattys-Horror.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="horror">
                                <div class="profile-name">HORROR</div></Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="	https://b4qlw8tl.media.zestyio.com/Wattys-Mystery.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="mystery">
                                <div class="profile-name">MYSTERY</div> </Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="		https://b4qlw8tl.media.zestyio.com/Wattys-Romance.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="romance">
                                <div class="profile-name">ROMANCE</div> </Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="		https://b4qlw8tl.media.zestyio.com/Wattys-Historical-Fiction.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="historical">
                                <div class="profile-name">HISTORICAL </div> </Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="		https://b4qlw8tl.media.zestyio.com/Wattys-Science-Fiction.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="paranomal">
                                <div class="profile-name">PARANORMAL</div> </Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="		https://b4qlw8tl.media.zestyio.com/Wattys-Sequels.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="sequels">
                                <div class="profile-name">SEQUELS</div> </Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="			https://b4qlw8tl.media.zestyio.com/Wattys-New-Adult.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="newadult">
                                <div class="profile-name">NEW ADULT</div></Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="		https://b4qlw8tl.media.zestyio.com/Wattys-Paranormal.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="sciencefiction">
                                <div class="profile-name">SCIENCE FICTION</div> </Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="		https://b4qlw8tl.media.zestyio.com/Wattys-Wild-Card.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="wildcard">
                                <div class="profile-name">WILD CARD</div></Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="profile-card-2"><img src="	https://b4qlw8tl.media.zestyio.com/Wattys-Young-Adult.f1cb27a519bdb5b6ed34049a5b86e317.png" class="img img-responsive" />
                            <Link to="youngadult">
                                <div class="profile-name">YOUNG ADULT</div></Link>
                            {/* <div class="profile-username">@johndoesurname</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default HomeCategory;