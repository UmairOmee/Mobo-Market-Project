import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="jumbotron">
            <h1 className="display-4">Mobo Market</h1>
            <p className="lead">Pakistan No.1 Mobile Phone Seller Webiste.</p>
            <hr className="my-4"/>
            <span className="fa-stack fa-lg">
 
            <i className="fa fa-twitter-square fa-1x" aria-hidden="true"></i>
            </span>
            www.twitter/mobomarket.com<br/>
            <span className="fa-stack fa-lg">
            <i className="fa fa-facebook-official fa-1x" aria-hidden="true"></i>
            </span>
            www.facebook.com/mobomarket.com<br/>
            < span className = "fa-stack fa-lg" >
            <i className="fa fa-youtube-play fa-1x" aria-hidden="true"></i>
            </span>
             www.youtube.com/mobomarket.com<br/>
            <p><i className="fas fa-address-card fa-2x"> Arfa Towar Near Ravi Bridge , Lahore</i>    </p>
            <p><i className="fas fa-phone-volume fa-2x">+92 3035690513</i> </p>
            
 
          </div>
        );
    }
}

export default About;