import React, { Component } from 'react';


export default class TotalPrice extends Component {

    // constructor() {
    //     super()
    //     this.total = this.total.bind(this)
    // }

    // total( {selected} ) {
    //      return Object.keys(selected)
    //       .reduce((acc, curr) => acc + selected[curr].cost, 0);
    // }   
    


    render() {

    const total = Object.keys(this.props.selected)
    .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);    

        return (
            <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(total)}
                </div>
          </div>
        )
    }
}