import React from 'react';
import Button from 'react-bootstrap/Button';
import './main.css';

export default class Intro extends React.Component{
    render(){
        return(
            <div className="center">
                <h1>Cover Letter Template</h1>
                <h3>let me help you defeat your anxiety together.</h3>
                <Button variant="info" size="lg">Begin</Button>
            </div>
        )
    }
}
