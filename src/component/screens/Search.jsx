import React, { useState } from "react";

function Search(props){
    const [val,setVal] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('value =', val)
        props.sArtist(val, "artist", 20)
    }

    return(
        <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <form autoComplete="off" onSubmit={submitHandler} > 
                        <div className="form-group mt-2">
                            <div className="input-group">
                                <input type="search" name="val" id="val" value={val} onChange={(e) => setVal(e.target.value) } placeholder="Enter Artist Name"
                                 className="form-control" required />
                                <button type="submit" className="btn btn-outline-success">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search