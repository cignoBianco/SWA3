import React, { useState, useEffect } from 'react';

const MP3_URL =  'https://www.babysleepsite.com/downloads/noise-only.mp3';

  
  const Player = () => {
  
    return (
      <div>
           <audio useref="audio_tag" src={MP3_URL} controls autoPlay/>
        </div>
    );
  };

export default Player