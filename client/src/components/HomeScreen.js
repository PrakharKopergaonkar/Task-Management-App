import React, { Component } from 'react';
import './assests/HomeScreen.css';
class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Welcome To Task Management App Task Memo</h1>
                <div className="bodydiv">
                    <img src={require('./assests/task.png')} className="taskimage" style={{marginTop: '45px'}}/>
                 </div>
            </div>
        );
    }
}

export default HomeScreen;