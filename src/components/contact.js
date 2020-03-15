import React, { Component } from 'react';

import '../components/css/contact.css'


class Contact extends Component {
    render() {
        return(
            <div class="centered">
            <div class="flip-container">
              <div class="flipper">
                <div class="front"><p>Contact</p></div>
                <div class="back">
                  <div class="cardleft"></div>
                  <h1>Eco Constructions Systems Ltd</h1><hr />
                  <p>Lucas Boklaho</p>
                  <p>Find me at:</p>
                  <p>Mobile: 07538 636020</p>
                  <p>E-mail: ecoconsys@gmail.com</p>
                  <p>Or here:<a href="https://www.checkatrade.com/EcoConstructionSystems">www.checkatrade.com</a></p>
                </div>
              </div>
            </div>
          </div> 
        )
    }
};


export default Contact;

