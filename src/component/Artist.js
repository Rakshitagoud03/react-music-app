import { Carousel } from "bootstrap";
import React from "react";
import CarouselItem from "./screens/CarouselItem";
import { NavLink } from "react-router-dom";

function Artist(props){
    const { id, name, popularity, images, genres, followers, } = props


    return(
        <div className="col-md-4 col-lg-4 col-sm-6">
            <div className="card mt-2 mb-2">
                <div className="card-body">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div id="imgGrp" className="carousel slide" style={{height: '200px'}} data-bs-ride="carousel" >
                            <div className="carousel-inner">
                                {
                                    images && images.map((item,index)=> {
                                        return (
                                           <CarouselItem key={index} {...item} />
                                        )
                                    })
                                }
                                <button className="carousel-control-prev" data-bs-target="imgGrp" data-bs-slide="prev" >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" data-bs-target="#imgGrp" data-bs-slide="next" >
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className="card-title text-center text-succsess"> {name} </h5>
                        <li className="list-group">
                            <li className="list-group">
                                <li className="list-group-item">
                                    <strong>Genres</strong>
                                    <span className="float-end text-success"> {genres} </span>
                                </li>
                                <li className="list-group-item">
                                    <strong>Popularity</strong>
                                    <span className="float-end text-success"> {popularity} </span>
                                </li>
                                <li className="list-group-item">
                                    <strong>Followers</strong>
                                    <span className="float-end text-success"> {followers.total} </span>
                                </li>
                            </li>
                        </li>
                    </div>
                </div>
                </div>

                <div className="card-footer">
                    <NavLink to={`/music/artist/${id}`} className="btn btn-outline-success" >Tracks</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Artist