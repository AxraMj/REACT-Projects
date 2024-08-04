import React, { useState, useEffect } from 'react';
import './RowPost.css';
import axios from '../../axios';
import Youtube from 'react-youtube';
import { imageUrl, API_KEY } from '../../constants/constants';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlid, setUrlid] = useState('');

    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data);
            setMovies(response.data.results);
        }).catch(err => {
            alert("Network error!!");
        });
    }, [props.url]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    const handleMovieTrailer = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlid(response.data.results[0]);
            } else {
                console.log('Array empty');
            }
        }).catch(err => {
            console.error("Failed to fetch video details", err);
        });
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img 
                        key={obj.id}
                        onClick={() => handleMovieTrailer(obj.id)} 
                        className={props.isSmall ? 'small_poster' : 'poster'} 
                        alt='poster' 
                        src={`${imageUrl + obj.backdrop_path}`} 
                    />
                )}
            </div>
            {urlid && <Youtube opts={opts} videoId={urlid.key} />}
        </div>
    );
}

export default RowPost;
