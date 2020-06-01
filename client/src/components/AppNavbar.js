import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, 
    NavItem,
    Container
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal'
import Logout1 from './auth/Logout';
import LoginModal from './auth/LoginModal';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                 <NavItem>
                    <Logout1/>
                </NavItem>
            </Fragment>
        )
        const guestLinks = (
            <Fragment>
                 <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
            </Fragment>
        )
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5"> 
                    <Container style={{marginLeft: 0}}>
                    <img src={require('./assests/taskicon.png')} style={{width: '4%'}} href="/"/>
                        <NavbarBrand href="/" style={{marginLeft: '8px'}}>
                            Task Memo
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                {isAuthenticated? authLinks:guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(AppNavbar);