import React from 'react'
import './Images.css'

import Image1 from '../../assets/images/img1.jpeg'
import Image2 from '../../assets/images/img2.jpeg'
import Image3 from '../../assets/images/img3.jpg'
import Image4 from '../../assets/images/img4.jpeg'

class Images extends React.Component {
  render () {
    return (
      <div className='image-container'>
        <img src={Image1} alt='img1' className='image' /> 
        <img src={Image2} alt='img2' className='image' /> 
        <img src={Image3} alt='img3' className='image' /> 
        <img src={Image4} alt='img4' className='image' /> 
      </div>
    )
  }
}

export default Images