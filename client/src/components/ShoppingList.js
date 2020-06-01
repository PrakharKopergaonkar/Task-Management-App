import React, { Component } from 'react';
import {
    Container, 
    Button,
    Table
} from 'reactstrap'
import {
    TransitionGroup
} from 'react-transition-group'
import {connect} from 'react-redux';
import {getItems, deleteItems} from '../Actions/ItemActions'
import PropTypes from 'prop-types'
import HomeScreen from './HomeScreen';
class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            head: 0
        }
    }
    componentDidMount() {
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItems(id);
    }
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    render() {
        const {items} = this.props.item;
        return (
            <Container>
                {this.props.isAuthenticated ?
                    <TransitionGroup className="Todo-list">
                    <Table striped bordered responsive size="10">
                        <thead>
                        <tr>
                            <th>Tasks</th>
                            <th> Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(({_id, name}) => (
                            <tr>
                                <td>{name}</td>   
                            <td>
                                  <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                > &times; </Button> 
                            </td>,
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    </TransitionGroup>
                 : <HomeScreen/> }
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
})

export default connect(mapStateToProps, {getItems, deleteItems})(ShoppingList);