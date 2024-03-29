import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import "./RowPosts.css"

function RowPosts(props) {
    
    const [poster, setPoster] = useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
                axios.get(props.url).then((response)=>{
                    console.log(response.data);
                    setPoster(response.data.results)
                }).catch(err=>{
                    // alert('Error!')
                })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleMovieTrailer=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('Array Empty');
            }
        })
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    poster.map((obj,index)=>
                        <img onClick={()=>handleMovieTrailer(obj.id)} className={ props.isSmall ?"smallPoster" : "poster"} src={`${imageUrl+obj.backdrop_path}`}  alt="poster" /> 
                    )
                }
                </div>
                { urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default RowPosts
