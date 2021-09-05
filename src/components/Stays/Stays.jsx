import React, { Component } from 'react';
import Hotel from './hotel';
import './Stays.scss';
import data from './staysData.json';

class Stays extends Component {
    state = {}

    render() {
        const hotels = [...data].slice(0, 6);
        return (
            <div className="stays-holder">
                <div className="stays-header">
                    <header className="left">Stays In Egypt</header>
                    <header className="right">{data.length}+ Stays</header>
                </div>
                <div className="stays">
                    {hotels.map(stay => <Hotel key={stay.photo} hotel={stay} />)}
                </div>
            </div>
        );
    }
}

export default Stays;