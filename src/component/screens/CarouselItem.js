import React from "react";

function CarouselItem(props){
    const {height, url, width} = props
    return(
        <div className="carousel-item active">
            <img src={url ? url : '#'} alt="no image" className="d-block w-100" style={{height: '100%'}} />
        </div>
    )
}

export default CarouselItem