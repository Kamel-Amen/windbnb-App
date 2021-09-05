import React, { Component } from 'react';
import './Stays.scss';
import imgGrade from './grade.svg';

class Hotel extends Component {
    state = {}
    render() {
        const { hotel } = this.props;
        return (
            <div className="hotel">
                <img src={hotel.photo} alt="hotel" id='hotelPh' />
                <div className="info">
                    {hotel.superHost ? <span className="superHost">Super Host</span> : ''}
                    <span className="type">{hotel.type}.</span>
                    <span className="beds">{hotel.beds} beds</span>
                    <span className="rate">{hotel.rating}</span>
                    <img src={imgGrade} alt="grade" />
                    <br /><strong>{hotel.title}</strong>
                </div>
            </div>
        );
    }
}

export default Hotel;