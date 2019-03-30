import React, { Component } from 'react';
import Slider from '../components/Slider/Slider'
import CardBlock from '../components/utils/card_block';

import { connect } from 'react-redux';
import { getProductsBySell, getProductsByArrival } from '../actions/products_actions';

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }

    render() {
        return (
            <div>
                <Slider/>
                <CardBlock
                    list={this.props.products.bySell}
                    title="Best Selling Mobiles"
                />
                                <CardBlock
                    list={this.props.products.byArrival}
                    title="Latest Mobiles"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);