import React, {Component} from 'react';
import ApiService from "../../services/api-service";

export default class People extends Component {
    apiService = new ApiService();

    state = {
        items: null,
    }

    constructor() {
        super();
        this.updatePeople()
    }

    updatePeople = () => {
        this.apiService
            .getPeople()
            .then((response) => {
                this.setState({
                    items: response.json()
                })
            })
        console.log(typeof this.state.items)
    }

    iterating = () => {
        this.state.items.map(item => {
            return <li>{item.name}</li>
        })
    }

    render() {
        const {items} = this.state
        console.log(items);
        return (

            <div>
                <ul>
                    <li>{this.iterating()}</li>
                </ul>

            </div>
        );
    }
}