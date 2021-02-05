import React, {Component} from 'react';
import ApiService from "../../services/api-service";

export default class RandomStarship extends Component {

    apiService = new ApiService();

    state = {
        name: null,
        model: null,
        manufacturer: null,
        pilots: null,
    }
    constructor(){
        super();
        this.updateRandomStarship();
    }

    updateRandomStarship = () => {
        const id = Math.floor(Math.random() * 10 + 1)
        this.apiService
            .getStarship(id)
            .then((starship) => {
                this.setState({
                    name: starship.name,
                    model: starship.model,
                    manufacturer: starship.manufacturer,
                    pilots: starship.pilots,
                })
            })

    }

    render() {
        const {name, model, manufacturer, pilots} = this.state;
        return (
            <div className="random-starships random-block">
                <h2 className="random-starships__header random-block__header">Random starships</h2>
                <ul className="random-starships__list random-block__list">
                    <li className="random-starships__list-item random-block__list-item">
                        Name: {name}
                    </li>
                    <li className="random-starships__list-item random-block__list-item">
                        Model: {model}
                    </li>
                    <li className="random-starships__list-item random-block__list-item">
                        Manufacturer: {manufacturer}
                    </li>
                    <li className="random-starships__list-item random-block__list-item">
                        Pilots: {pilots}
                    </li>
                </ul>
            </div>
        );
    }
}