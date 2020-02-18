import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import Button from './ortak/Button';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';

class Main extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    state = { loggedIn: null };
    firebase.initializeApp({
      apiKey: 'AIzaSyBpq5hyDkSA_XOG9CYgSHzVjSUA9m_-ujg',
      authDomain: 'kimlikdogrulama-98d1c.firebaseapp.com',
      databaseURL: 'https://kimlikdogrulama-98d1c.firebaseio.com',
      projectId: 'kimlikdogrulama-98d1c',
      storageBucket: 'kimlikdogrulama-98d1c.appspot.com',
      messagingSenderId: '797820660750',
      appId: '1:797820660750:web:a545a8f745653292f8205f'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  clickLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
          </CardSection>
      );
      case false:
        return (
          <LoginForm />
      );
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
      );

    }
  }

  render() {
    return (
      <View>
        <Header HeaderText="Giriş Ekranı" />
          {this.renderContent()}
      </View>
    );
  }
}

export default Main;
