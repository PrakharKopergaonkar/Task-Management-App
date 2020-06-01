import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import {Provider} from 'react-redux'
import store from './store'
import ItemModal from './components/ItemModal'
import {Container} from 'reactstrap'
import LoadingButton from './components/LoadingButton';
import {loadUser} from './Actions/AuthActions'
import Footer from './components/Footer';
class App extends Component{
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <main>
        <AppNavbar/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
            <LoadingButton/>
          </Container>
        </main>
          <Footer/>
      </Provider>
    );
  }
}

export default App;
