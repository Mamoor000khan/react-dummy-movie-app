import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails/MovieDetails';


function Specific() {
    console.log('[specific.js]');
    const [fetchedDetailData, setFetchedDetailData] = useState();
    const [youtubeVideo, setYoutubeVideo] = useState();
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {

        const fetchDetail = async () => {
            if(fetchedDetailData) {
                setFetchedDetailData({image: 'https://www.movienewsletters.net/photos/000000h1.jpg'})
            }

            setLoading(true);
            const res = await fetch(`https://api.themoviedb.org/3/${params.type}/${params.movieId}?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US`)
            const data = await res.json();
             console.log(data);
            setFetchedDetailData({
                title: data.title || data.original_title || data.name,
                genres: data.genres,
                image: data.poster_path,
                release_date: data.release_date || data.last_air_date,
                status: data.status,
                tagline: data.tagline,
                rating: data.vote_average,
                text: data.overview,
                background: data.backdrop_path
            });
            setLoading(false);
        }

        


        const fetchTrailerId = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/${params.type}/${params.movieId}/videos?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US`);
            const data = await res.json();
            setYoutubeVideo(data.results[data.results.length - 1]);
        }

    

        fetchDetail();
        fetchTrailerId();
                
        document.getElementById('App') && document.getElementById('Nav').scrollIntoView({ behavior: 'smooth' });

    }, [params.movieId, params.type]);


return (
        <React.Fragment>
            {fetchedDetailData &&
                <MovieDetails
                    text={fetchedDetailData.text}
                    details={fetchedDetailData}
                    VideoId={youtubeVideo && youtubeVideo.key}
                    type={params.type}
                    loading={loading}
                />}

        </React.Fragment>
    )
}

export default Specific;

