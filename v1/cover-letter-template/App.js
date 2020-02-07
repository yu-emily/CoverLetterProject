import React from 'react';
import Button from 'react-bootstrap/Button';

export default class App extends React.Component
{
    render(){
        return(
            <React.Fragment>
                <h1>Cover Letter</h1>
                <h3>let me help you defeat your anxiety.</h3>
                <Button variant="warning" size="lg">Start</Button>
            </React.Fragment>
        )
    }
}