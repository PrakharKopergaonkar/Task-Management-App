import React, { Component } from 'react';
import {
    Button, 
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
class AboutUsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }
    toggle = () => {
        this.setState({modal: !this.state.modal})
    }
    render() {
        return (
            <div>
              <NavLink onClick={this.toggle} href="#">
                  About Us
              </NavLink>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>About us </ModalHeader>
                    <ModalBody>
                        <p> about us </p>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AboutUsModal;