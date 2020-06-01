import React, { Component } from 'react';
import {
    Container, 
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap'
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'
import {connect} from 'react-redux';
import {getItems, deleteItems} from '../Actions/ItemActions'
import PropTypes from 'prop-types'
import HomeScreen from './HomeScreen';
class ShoppingList extends Component {
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
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="Fade">
                                <ListGroupItem>
                                 <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                > &times;</Button> 
                                    {name}
                                </ListGroupItem>
                            </CSSTransition> 
                        ))}
                    </TransitionGroup>
                </ListGroup>
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