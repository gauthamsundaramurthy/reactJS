import React from 'react'
import PropTypes from 'prop-types'
import './PreviewImage.css'

export class PreviewImage extends React.Component {
  constructor () {
    super()
    this.state = {
      toggleView: 'show'
    }
    this.toggleImage = this.toggleImage.bind(this)
  }
  toggleImage () {
    if (this.state.toggleView === 'show') {
      this.setState({
        toggleView: 'hide'
      })
    } else {
      this.setState({
        toggleView: 'show'
      })
    }
  }
  render () {
    let imageCss = this.props.imageStyling === 'primary' ? {
      'box-shadow': '0 0 5px 0 rgba(245,245,245,0.9)'} : {'border': 'none'}
    return (
      <div className='screen'>
        <h1>{this.props.title}</h1>
        <button className='btn' onClick={this.toggleImage} > Show images </button>
        { this.state.toggleView === 'show'
          ? <div className='image-preview-container'>
            {this.props.imageUrls.map((url, index) =>
              <img style={imageCss} src={url} alt='superman' key={index} className='image' />
            )}
          </div>
          : null }
        <Footer footerMessage='Thanks for visiting' />
      </div>
    )
  }
}

PreviewImage.defaultProps = {
  imageUrls: ['https://d1nao0k9edgivc.cloudfront.net/wp-content/uploads/2013/04/Man-Of-Steel-new-picture.jpg',
    'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',  
    'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
    'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://www.planwallpaper.com/static/images/6775415-beautiful-images.jpg',
    'https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk='
  ],
  imageStyling: 'default',
  title: 'Image Previewer'
}

PreviewImage.propTypes = {
  imageUrls: PropTypes.array.isRequired,
  title: PropTypes.string
}

const Footer = (props) => <div className='footer'> {props.footerMessage} </div>
