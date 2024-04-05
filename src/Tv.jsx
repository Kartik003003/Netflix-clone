import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './tv.css';


const Tv = () => {
    return (
        <div className=" bg-black">
            <div className="container-in ">

                <div className="heading">
                    <h1>Enjoy on your TV</h1>
                    <h3>Watch on smart TVs, PlayStation, Xbox,<br /> Chromecast, Apple TV, Blu-ray players and<br /> more.</h3>
                </div>
                <div className="media">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Image" />
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay ></video>
                </div>
            </div>

            <div className="container-in ">

                <div className="media1">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Image" />
                    <div className="innerimg">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="Image" />
                        <h3>Download...</h3>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="gif" />
                    </div>
                </div>
                <div className="heading">
                    <h1>Download your<br /> shows to watch<br /> offline</h1>
                    <h3>Save your favourites easily and always have<br /> something to watch.</h3>
                </div>
            </div>
        </div>
    )
}

export default Tv