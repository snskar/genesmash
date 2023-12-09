import React from 'react';
import '../css/playButton.css';


const PlayButton = () => {

    const handlePlayButton = () => {};
    const handleMouseEnter = () => {};
    const handleMouseLeave = () => {};

    return (
    <div>
        <div className = 'play-button'>
            <button onClick={handlePlayButton} id = 'main-play-button'>
                <img src={ process.env.PUBLIC_URL + '/icons/play/play-pink.png' } 
                    alt="Play Button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} />
            </button>
        </div>    
        <div id = 'play-button-desc'>
            <h2>PLAY</h2>
        </div>
    </div>  
    );  
};

export default PlayButton;