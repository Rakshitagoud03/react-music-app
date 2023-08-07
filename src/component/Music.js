import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import key from "../config/token";
import SongItem from "./screens/SongItem";

const URL = 'https://api.spotify.com'

function Music(props){
    const [songs,setSongs] = useState([])
    const [audio,setAudio] = useState(null) /*audio player*/
    const [preUrl,setPreUrl] = useState(false) /* url */
    const [playing,setPlaying] = useState(false) /* play or pause */

    const params = useParams()

    const searchTracks = async () => {
        await fetch(`${URL}/v1/artists/${params.artistId}/top-tracks?market=IN`, {
            method: "GET",
            headers:{
                Authorization: `Bearer ${key}`
            }
        }).then(res => res.json())
        .then(resp => {
            console.log(`data =`, resp)
            setSongs(resp.tracks)
        })
        .catch(err => toast.error(err.message))
    }

    useEffect(() => {
        searchTracks()
    },[])

    /* audio play and pause logic */
    const playAudio = (url) => {
        const myAudio = new Audio(url);
        if(!playing){
            // initial play
            myAudio.play()
            setPlaying(true)
            setAudio(myAudio)
            setPreUrl(url)
        } else {
            // pause
            audio.pause()
            if(preUrl === url ) {
                setPlaying(false)
            }else {
                // pause to play
                myAudio.play()
                setPlaying(true)
                setAudio(myAudio)
                setPreUrl(url)
            }
        }
    }

    const genIcon = (url) => {
        if( !url) //if song url is not present
           return <span className="text-danger"> <i className="bi bi-bell-slash-fill"></i> </span>
        if(playing && preUrl === url) // song is playing
            return <span className="text-warning"> <i className="bi bi-pause-circle"></i> </span>  
         return <span className="text-success"> <i className="bi bi-play-circle"></i> </span>
    }

   


    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Music</h3>
                </div>
            </div>
            <div className="row">
                {
                    songs && songs.map((item,index) => {
                        return(
                            <SongItem key={index} {...item} iconHandler={genIcon} songHandler={playAudio} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Music