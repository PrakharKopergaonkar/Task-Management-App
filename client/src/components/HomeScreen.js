import React, { Component } from 'react';
import './assests/HomeScreen.css';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1 className="lead text-center" style={{fontWeight:'bold'}}>Welcome To Task Management App Task Memo</h1>
                <div className="bodydiv">
                    <img src={require('./assests/task.png')} className="taskimage" style={{marginTop: '45px'}}/>
                 </div>
            </div>
        );
    }
}

export default HomeScreen;