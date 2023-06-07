import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

import officeImage from './office-prepared-team-work-project.jpg'

const MyComponent = () => {

    return (
        <div className="card m-auto" style={{ width: 400, }}>
            <img src={officeImage} alt="icon" className="img-fluid" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
};

export default MyComponent;

const MyWebComponent = reactToWebComponent(MyComponent, React, ReactDOM);

customElements.define('my-web-component', MyWebComponent);
