import React, { Component } from 'react';
import { 
    Modal,
    ModalHeader,
    ModalBody,
    NavLink,
} from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';
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
              <NavLink onClick={this.toggle} href="#" style={{fontSize: '15px'}}>
                  About 
              </NavLink>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}><img src={require('./assests/list.png')} style={{width:"25%"}}/> <strong className="text-dark"> ABOUT </strong> </ModalHeader>
                    <ModalBody>
                        <div style={{flexDirection: 'row', flex: 1}}>
                        <div>   
                        <p className="text-capitalize"> Task Memo is a Web based app for managing your daily tasks. <br/> Features of Task Memo includes : </p>
                        <ListGroup>
                            <ListGroupItem color="success">Adding/Managing Tasks</ListGroupItem>
                            <ListGroupItem color="info">Setting their due date</ListGroupItem>
                            <ListGroupItem color="warning">Adding label (ex: Work, personal, others etc)</ListGroupItem>
                            <ListGroupItem color="danger">Adding Status (ex: Started, In-progress, Completed)</ListGroupItem>
                        </ListGroup>
                        </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AboutUsModal;