import React, {Component} from 'react';
import './footer.css'
import '../navbar/navbar.css'
import github from'../../img/github.svg'
import instagram from'../../img/instagram.svg'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer nav">
                <div className="nav__logo footer__logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React logo" className="nav__pict footer__pict"/>
                    <h2 className="nav__header footer__header">React Api</h2>

                    <div className="social">
                        <ul className="social__list">
                            <li className="social__list-item"><a href="" className="social__link"><img src={github} alt="GitGub" className="social__icon"/></a></li>
                            <li className="social__list-item"><a href="" className="social__link"><img src={instagram} alt="Instagram" className="social__icon"/></a></li>
                        </ul>
                    </div>
                </div>



                <ul className="nav__list footer__list">
                    <li className="nav__list-item footer__list-item"><a href="" className="nav__link footer__link">Random people</a></li>
                    <li className="nav__list-item footer__list-item"><a href="" className="nav__link footer__link">Random planets</a></li>
                    <li className="nav__list-item footer__list-item"><a href="" className="nav__link footer__link">Random starships</a></li>
                    <li className="nav__list-item footer__list-item"><a href="" className="nav__link footer__link">People</a></li>
                    <li className="nav__list-item footer__list-item"><a href="" className="nav__link footer__link">Planets</a></li>
                    <li className="nav__list-item footer__list-item"><a href="" className="nav__link footer__link">Starships</a></li>
                </ul>
            </footer>
        );
    }
}

