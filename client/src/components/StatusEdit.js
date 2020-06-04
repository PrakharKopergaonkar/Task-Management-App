import React, { Component } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {updateItems, deleteItems} from '../Actions/ItemActions'
class StatusEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statuseditOpen: false
        }
    }
    static propTypes = {
        deleteItems: PropTypes.func.isRequired,
        updateItems: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    togglestatusedit = () => {
        this.setState({statuseditOpen: !this.state.statuseditOpen})
    }
    onselectstatusedit = (_id, status) => {
        console.log(_id, status)
        const newstatus = {
            status: status
        }
        console.log(this.props)
        this.props.updateItems(_id, newstatus)
        window.location.reload(false);
    }
    render() {
        const {status, _id} = this.props
        return (
            <Dropdown isOpen={this.state.statuseditOpen} toggle={this.togglestatusedit}>
            <DropdownToggle caret>
            {status}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem  onClick={() => this.onselectstatusedit(_id,"New")}>New</DropdownItem>
                <DropdownItem onClick={() => this.onselectstatusedit(_id, "In progress")}>In progress</DropdownItem>
                <DropdownItem onClick={() => this.onselectstatusedit(_id, "Completed")}>Completed</DropdownItem>    
            </DropdownMenu>
        </Dropdown>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
})
export default connect(mapStateToProps, {updateItems, deleteItems})(StatusEdit); 