import React, { Component } from 'react';
import {
    Button, 
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addItem} from '../Actions/ItemActions'
class ItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: ''
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle =  () => {
        this.setState({modal: !this.state.modal})
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            name:this.state.name
        }

        //Add item via addItem action
        this.props.addItem(newItem);

        // Close toggle
        this.toggle();
    }
    render() {
        return (
            <div>
                {this.props.isAuthenticated ?  <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Task
                </Button> : null
                } 
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>New Task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="Item">Task </Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add New Task"
                                    onChange={this.onChange}
                                />
                                <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    items: state.item,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {addItem})(ItemModal);