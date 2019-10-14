import React from 'react'
import studyImg from './studying.svg';

export default function About() {
    return (
        <React.Fragment>  
            <div className='container about'>
                <div className='row'>
                    <div className="jumbotron text-center">
                        <h1>About</h1>
                        <img src={studyImg} />
                        <p>Just Learning React and this my first app from React Crash Course.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
