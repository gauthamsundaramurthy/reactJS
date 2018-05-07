import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import './rwd_2.css';

let img1= require('../assets/img1.jpg')
let img2= require('../assets/img2.jpg')
let img3= require('../assets/img3.jpg')
let img4= require('../assets/img4.jpg')
let img5= require('../assets/img5.jpg')
let img6= require('../assets/img6.jpg')
let img7= require('../assets/img7.jpg')
let img8= require('../assets/img8.jpg')


class Rwd2 extends React.Component {
   render() {
      return (
      <div>  
        <MetaTags>
            <title>responsive web design</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </MetaTags>

        <header>
          <div class="page-title">
            <div class="logo"></div>
            <h1>Amazing Space</h1>
            <h5>At Amazing Space, there's always space for you.&trade;</h5>
          </div>
        </header>

        <div className="main">
          
          <p class="page-description clearfix">
            Otherworldly views, uncompromising service, unparallelled luxury. This is Amazing Space, the world's first, and finest, space adventure company. With private and group voyages embarking weekly, you can book your tickets in advance or on the fly.
            <a class="learn-more" href="#">Learn More >></a>
          </p>

          <div className="gallery">
            <figure class="gallery-item">
              <img class="thumbnail" src={img1} />
            </figure>
            <figure class="gallery-item">
              <img class="thumbnail" src={img2}/>
            </figure>
            <figure class="gallery-item">
              <img class="thumbnail" src={img3} />
            </figure>
            <figure class="gallery-item">
              <img class="thumbnail" src={img4}/>
            </figure>
            <figure class="gallery-item">
              <img class="thumbnail" src={img5}/>
            </figure>
            <figure class="gallery-item">
              <img class="thumbnail" src={img6}/>
            </figure>
            <figure class="gallery-item">
              <img class="thumbnail" src={img7}/>
            </figure>
            <figure class="gallery-item">
              <img class="thumbnail" src={img8}/>
            </figure>
          </div>
          
        </div>

        <nav class="footer_section">
          <ul>
            <li>ABOUT</li>
            <li>MISSIONS</li>
            <li>ARCHIVE</li>
          </ul>
          <div class="contact-btn">
            <a>CONTACT US</a>
          </div>
        </nav>

      </div>
        
              );
   }
}

export default Rwd2;