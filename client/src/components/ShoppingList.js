import React, { Component } from 'react';
import {
    Container, 
    Button,
    Table,
    Input,
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
            itemsearch: ''
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
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {items} = this.props.item
        const filtereditems = items.filter(
            (item) => {
                if(this.state.itemsearch.length !== 0) {
                    return item.name.toLowerCase().indexOf(this.state.itemsearch.toLowerCase()) !== -1
                }
                else {
                    return item.name
                }
            }
        );
        console.log(filtereditems)
        return (
            <Container>
                {this.props.isAuthenticated ?
                    <TransitionGroup className="Todo-list">
                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '43px', marginBottom: '20px'}}>
                        <Input 
                            type="text"
                            name="itemsearch"
                            id="item"
                            placeholder="Search"
                            onChange={this.onChange}
                            style={{width: '50%'}}
                        />
                    </div>
                    <Table striped bordered responsive size="3">
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th> Date Created</th>
                            <th> Due Date</th>
                            <th> Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filtereditems.map(({_id, name, date, DueDate}) => (
                            <tr>
                            <td>{name}</td> 
                            <td>{date.substring(0,10)}</td>  
                            <td> {DueDate.substring(0,10)} </td> 
                            <td>
                                  <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                > &times; </Button> 
                            </td>
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