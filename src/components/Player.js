import React, { useState, useEffect } from 'react';
import {CaretRightOutlined, PauseOutlined} from '@ant-design/icons'

const MP3_URL =  'https://www.babysleepsite.com/downloads/noise-only.mp3';

const useAudio = () => {
    const [audio] = useState(new Audio(MP3_URL));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
  
    return [playing, toggle];
  };
  
  const Player = () => {

    const [playing, toggle] = useAudio(MP3_URL);
  
    return (
        <span onClick={toggle}>{playing ?  
        <PauseOutlined /> : <CaretRightOutlined /> }</span>
    );
  };
//<audio useref="audio_tag" src={MP3_URL} controls autoPlay/>
export default Player