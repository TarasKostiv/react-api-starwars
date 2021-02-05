import React, {Component} from 'react';
import './random-planet.css';
import ApiService from "../../services/api-service";

export default class RandomPlanet extends Component {

    apiService = new ApiService();

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 10 + 1);
        this.apiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter,
                })
            })
    }

        render() {
            const {name, population, rotationPeriod, diameter} = this.state;
        return (
            <div className="random-planet random-block">
                <h2 className="random-planet__header random-block__header">Random planet</h2>
                <ul className="random-planet__list random-block__list">
                    <li className="random-planet__list-item random-block__list-item">
                        Name: {name}
                    </li>
                    <li className="random-planet__list-item random-block__list-item">
                        Population: {population}
                    </li>
                    <li className="random-planet__list-item random-block__list-item">
                        Rotation period: {rotationPeriod}
                    </li>
                    <li className="random-planet__list-item random-block__list-item" >
                        Diameter: {diameter}
                    </li>
                </ul>
            </div>
        );
    }
}