import React, {Component} from 'react';
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav__logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React logo" className="nav__pict"/>
                    <h2 className="nav__header">React Api</h2>
                </div>

                <ul className="nav__list">
                    <li className="nav__list-item"><a href="" className="nav__link">Random people</a></li>
                    <li className="nav__list-item"><a href="" className="nav__link">Random planets</a></li>
                    <li className="nav__list-item"><a href="" className="nav__link">Random starships</a></li>
                    <li className="nav__list-item"><a href="" className="nav__link">People</a></li>
                    <li className="nav__list-item"><a href="" className="nav__link">Planets</a></li>
                    <li className="nav__list-item"><a href="" className="nav__link">Starships</a></li>
                </ul>
            </nav>
        );
    }
}