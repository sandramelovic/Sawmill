import React from 'react'
import './Campus.css'
import { useState } from 'react'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpg'
import gallery_3 from '../../assets/gallery-3.jpg'
import gallery_4 from '../../assets/gallery-4.jpeg'
import white_arrow from '../../assets/white-arrow.png'
import Gallery from '../Gallery/Gallery'

const Campus = () => {

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);

  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn' onClick={openGallery}>
        Vidi više <img src={white_arrow} />
      </button>

      {isGalleryOpen && <Gallery onClose={closeGallery} />}
    </div>
  )
}

export default Campus
