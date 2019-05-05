import React, { Component } from 'react';
import { ListOfOptions } from '../ListOfOptions/ListOfOptions'
import { UserSelections } from '../UserSelections/UserSelections'


export default class Main extends Component {
    render() {
        return (
            <main>
                <ListOfOptions features={this.props.features} />
                <UserSelections />
            </main>
        )
    }
}