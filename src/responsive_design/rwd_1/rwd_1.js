import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import './rwd_1.css';
let cup= require('../assets/cup.jpg')

let camel= require('../assets/camel_background.jpg')
let google_map= require('../assets/google_map.jpg')
let market= require('../assets/market.jpg')


class Rwd1 extends React.Component {
   render() {
      return (
      <div>  
        <MetaTags>
            <title>responsive web design</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </MetaTags>

        <div id="banner">
          <h1>Bana's Travel Blog</h1>
        </div>


        <div id="blog">
          <div class="post">
            <h2>Saturday Market</h2>
            <h3>January 7th</h3>
            <strong class="opening-line">On Saturday, Dilara took us to the market.</strong>
            <p>It is a wonderfully eclectic mix of goods from all over the world - delightfully random. I dusted off my bargaining skills to buy a metal bracelet with camels on it, and Maggie bought a lapis lazuli necklace from Afghanistan. In the evening, we walked along Gulf Road towards the marina, passed through Marina Mall, and ate dinner at a wonderful little cafe that we will definitely be frequenting. Ive developed a slight obsession with lentil soul... maybe its because I miss Focos Indian lentil chili.</p>
            <div class="image-container">
              <img src={market} />
            </div>
            <p>We took a catamaran from the marina to Failaka Island, where we got to explore a bit, relax on the beach, and go swimming. The water in the Gulf is incredibly still; I havent seen a wave yet, and when you look out on the horizon it seems to go forever. Something about the color of the water and maybe the dust in the air make it seem hazier than the Atlantic coast. I have some cool pictures of the city skyline as we returned on the boat.</p>
            <p>That night, I hung out in a cafe with two friends, drinking traditional lemonade with mint. Its delicious; maybe I should send in a flavor suggestion to Morano Gelato? Then we drove around the city for a while. Cruising around is a really valid way to spend the time when a tank of gas costs about seven bucks. </p>
          </div>
          
          <div class="images">
            <div class="image-container">
              <img src={camel} />
            </div>
            <div class="image-container">
              <img src={google_map} />
            </div>
          </div>
          
        </div>


        <footer>
          <span>&copy; Banas Travel Blog</span>
        </footer>
      </div>
        
              );
   }
}

export default Rwd1;