import React, { useRef, useState } from 'react';
import './Programs.css';
import program_video_1 from '../../assets/program_video_1.mp4';
import program_video_2 from '../../assets/program_video_2.mp4';
import program_video_3 from '../../assets/program_video_3.mov';
import program_video_4 from '../../assets/program_video_4.mov';
import program_video_5 from '../../assets/program_video_5.mov';
import program_video_6 from '../../assets/program_video_6.mov';
import program_video_7 from '../../assets/program_video_7.mov';
import program_video_8 from '../../assets/program_video_8.mov';
import play_icon from '../../assets/play-icon.png';

const Programs = () => {
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(Array(8).fill(false)); 

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    const updatedPlayState = [...isPlaying];

    if (video.paused) {
      video.play();
      updatedPlayState[index] = true;
    } else {
      video.pause();
      updatedPlayState[index] = false;
    }

    setIsPlaying(updatedPlayState); 
  };

  const videos = [
    program_video_2,
    program_video_3,
    program_video_4,
    program_video_5,
    program_video_6,
    program_video_7,
    program_video_8,
    program_video_1,
  ];

  return (
    <div>
      <p className='programs-text'>
        Pružamo širok spektar usluga kako bismo zadovoljili sve Vaše potrebe u vezi sa drvetom. Specijalizovani za sečenje, obrezivanje i obradu drveta prema Vašim specifikacijama. Ponuda uključuje:
        <br /><br />
        <ul>
          <hr />
          <li>
            <span className="item-name"><b>Sečenje drveta</b></span>
            <span className="item-description">Precizno i efikasno sečenje različitih vrsta drveta u željenim dimenzijama i oblicima, u skladu sa Vašim potrebama.</span>
            <span className="price">5000,00 €</span>
          </li>
          <hr />
          <li>
            <span className="item-name"><b>Obrada drveta</b></span>
            <span className="item-description">Visokokvalitetna obrada drveta uključujući brušenje, lakiranje i impregnaciju, kako bismo osigurali dugotrajnost i estetski izgled.</span>
            <span className="price">8000,00 €</span>
          </li>
          <hr />
          <li>
            <span className="item-name"><b>Prilagođene usluge</b></span>
            <span className="item-description">Nudimo prilagođene rešenja za specifične projekte, uključujući izradu drvenih elemenata po narudžbi i kompleksne obrade.</span>
            <span className="price">Na upit</span>
          </li>
          <hr />
          <li>
            <span className="item-name"><b>Saveti i konsultacije</b></span>
            <span className="item-description">Naš tim stručnjaka je uvek spreman da vam pruži savete i podršku u vezi sa izborom materijala i procesom obrade drveta.</span>
            <span className="price">2000,00 €</span>
          </li>
        </ul>
      </p>

      <div className='programs'>
        {videos.map((videoSrc, index) => (
          <div className="program" key={index}>
            <div className="video-container">
              <video
                ref={(el) => (videoRefs.current[index] = el)}  
                src={videoSrc}
                onClick={() => handleVideoClick(index)}  
                muted
                loop
              />
              {!isPlaying[index] && (
                <img
                  src={play_icon}
                  alt="Play icon"
                  className="play-icon"
                  onClick={() => handleVideoClick(index)}  
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
