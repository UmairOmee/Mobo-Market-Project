import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
            <div className="not_found_container">
            <FontAwesomeIcon icon={faExclamationCircle}/>
            <div>
            Opp! Page Not Found
            </div>
            </div>
            </div>
        );
    }
}

export default PageNotFound;