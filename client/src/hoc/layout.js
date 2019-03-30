import React, { Component } from 'react';
import App from '../App'
import Footer from '../Header-footer/footer'

class Layout extends Component {
    render() {
        return (
            <div>
                
                <App/>
                
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer/>
                
            </div>
        );
    }
}

export default Layout;
