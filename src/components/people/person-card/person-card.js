import React, {Component} from 'react';

export default class PersonCard extends Component {


    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.gender}</li>
                    <li>{this.props.birthYear}</li>
                    <li>{this.props.mass}</li>
                    <li>{this.props.homeWorld}</li>
                </ul>
            </div>
        );
    }
}

