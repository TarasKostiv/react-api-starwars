import React, {Component} from 'react';
import ApiService from "../../services/api-service";

export default class RandomPerson extends Component {

    apiService = new ApiService();

    state = {
        name: null,
        gender: null,
        birthYear: null,
        mass: null,
        homeWorld: null,
    }

    constructor() {
        super();
        this.updatePeople();
    }

    updatePeople = () => {
        const id = Math.floor(Math.random() * 10 + 1)
        this.apiService
            .getPerson(id)
            .then((person) => {
                this.setState({
                    name: person.name,
                    gender: person.gender,
                    birthYear: person.birth_year,
                    mass: person.mass,
                    homeWorld: person.homeworld,
                })
        })
    }

    render() {
        const {name, gender, birthYear, mass, homeWorld} = this.state
        return (
            <div className="random-person random-block">
                <h2 className="random-person__header random-block__header">Random person</h2>
                <ul className="random-person__list random-block__list" >
                    <li className="random-person__list-item random-block__list-item">
                        Name: {name}
                    </li>
                    <li className="random-person__list-item random-block__list-item">
                        Gender: {gender}
                    </li>
                    <li className="random-person__list-item random-block__list-item">
                        Birth year: {birthYear}
                    </li>
                    <li className="random-person__list-item random-block__list-item">
                        Mass: {mass}
                    </li>
                    <li className="random-person__list-item random-block__list-item">
                        Home world: {homeWorld}
                    </li>
                </ul>
            </div>
        );
    }
}
