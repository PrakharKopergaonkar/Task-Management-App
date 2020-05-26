import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import {setItemsLoading} from '../Actions/ItemActions'
import {connect} from 'react-redux';
class LoadingButton extends Component {
    render() {
        const {loading} = this.props.item
        console.log(loading)
        return (
            <div>
                 {loading && <Spinner size="sm" color="secondary"/>}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, {setItemsLoading})(LoadingButton);;