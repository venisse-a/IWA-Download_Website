import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import {Menu} from 'semantic-ui-react';
import {Cat_Ser_Select} from '../action/cat_select';
import {Ser_Select} from '../action/ser_select';

class Home_Series extends Component{

    categories_series() {
        return this.props.categories_series.map((category) => {
            return(
                <Menu.Item key={category.name} onClick={() => this.props.Cat_Ser_Select(category)}>
                    <Link to="/category_ser">{category.name}</Link>
                </Menu.Item>
            );
        });
    }

    render() {
        return(
            <div>
                <Header />
                <Menu>{this.categories_series()}</Menu>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories_series: state.categories_series,
        series:state.series
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({Cat_Ser_Select: Cat_Ser_Select,Ser_Select: Ser_Select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_Series);