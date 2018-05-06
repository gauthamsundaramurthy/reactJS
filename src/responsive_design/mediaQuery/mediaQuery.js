import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import './mediaQuery.css';
let img= require('../assets/cup.jpg')

class MediaQuery extends React.Component {
   render() {
      return (
      <div>  
        <MetaTags>
            <title>responsive web design</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </MetaTags>

        <div className="header">
          <h1>Chania</h1>
        </div>

        <div className="row">

            <div className="col-3 menu">
              <ul>
                <li>The Flight</li>
                <li>The City</li>
                <li>The Island</li>
                <li>The Food</li>
              </ul>
            </div>

            <div className="col-6">
              <h1>The City</h1>
              <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
              <img src={img} width="460" height="345"/>
            </div>

            <div className="col-3 right">
              <div className="aside">
                <h2>What?</h2>
                <p>Chania is a city on the island of Crete.</p>
                <h2>Where?</h2>
                <p>Crete is a Greek island in the Mediterranean Sea.</p>
                <h2>How?</h2>
                <p>You can reach Chania airport from all over Europe.</p>
              </div>
            </div>

        </div>

        <div className="footer">
          <p>Resize the browser window to see how the content respond to the resizing.</p>
        </div>

      </div>
        
              );
   }
}

export default MediaQuery;