import React, { Component } from 'react';
import TotalPrice from '../TotalPrice/TotalPrice'

export default class UserSelections extends Component {

    renderSummary({ selected }) {
        return Object.keys(selected)
        .map(key =>
            <div className="summary__option" key={key}>
                <div className="summary__option__label">{key}  </div>
                <div className="summary__option__value">{selected[key].name}</div>
                <div className="summary__option__cost">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(selected[key].cost) }
                 </div>
            </div>)
    }


    render() {
        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {this.renderSummary(this.props)}
            <TotalPrice selected={this.props.selected}/>
          </section>
        )
    }
}
