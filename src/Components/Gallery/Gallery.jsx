import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery-1.jpg';
import gallery_2 from '../../assets/gallery-2.jpg';
import gallery_3 from '../../assets/gallery-3.jpg';
import gallery_4 from '../../assets/gallery-4.jpeg';
import gallery_5 from '../../assets/gallery-1.jpg';
import gallery_6 from '../../assets/gallery-2.jpg';
import gallery_7 from '../../assets/gallery-3.jpg';
import gallery_8 from '../../assets/gallery-4.jpeg';
import gallery_9 from '../../assets/gallery-1.jpg';
import gallery_10 from '../../assets/gallery-2.jpg';



const images = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9];

const Gallery = ({ onClose }) => {
  return (
    <div className='full-gallery-overlay'>
              <button className='close-btn' onClick={onClose}>X</button>
      <div className='full-gallery'>
        <div className="album">
          <div className="responsive-container-block bg">
            <div className="responsive-container-block img-cont">
              {images.slice(0, 3).map((image, index) => (
                <img className="img" src={image} alt={`Gallery ${index}`} key={index} />
              ))}
            </div>
            <div className="responsive-container-block img-cont">
              {images.slice(3, 5).map((image, index) => (
                <img className="img img-big" src={image} alt={`Gallery ${index}`} key={index} />
              ))}
            </div>
            <div className="responsive-container-block img-cont">
              {images.slice(5).map((image, index) => (
                <img className="img" src={image} alt={`Gallery ${index}`} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
