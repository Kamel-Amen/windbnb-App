import React, { Component } from 'react';
import './Navbar.scss';
import data from '../Stays/staysData.json';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import searchIcon from './searchIcon.svg';


class Navbar extends Component {
    state = {}

    render() {
        return (
            <div className='holder'>
                <div className="logo"><img src={logo} alt="logo" /> windbnb</div>
                <div className="search-bar row">
                    <select className="location col-6">
                        {data.slice(0, 4).map(hotel => <option key={hotel.photo}> {hotel.city}, {hotel.country}</option>)}
                    </select>
                    <div className="guests col-4">Add guests</div>
                    <div className="search-icon col-2"><img src={searchIcon} alt="" /></div>
                </div>
            </div>
        );
    }
}

export default Navbar;