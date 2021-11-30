import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import axios from 'axios';

export default class ApiSignUP extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      address: '',
      username: ''
    }
  }

  SignUP = () => {


    axios.post('https://apis.jahanzaibb.online/api/register', {
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      username: this.state.username
    })
      .then
    { this.props.navigation.navigate('LoginApi') }

  //   fetch('https://apis.jahanzaibb.online/api/register', {
  //     method: 'POST',

  //     email: this.state.email,
  //     password: this.state.password,
  //     address: this.state.address,
  //     username: this.state.username

  //   }).then
  //   {
  //     this.props.navigation.navigate('LoginApi')
  //   }


  // }

  }

  addeamilAdress = email1 => {
    this.setState({ email: email1 })
  }
  addpassword = password1 => {
    this.setState({ password: password1 })
  }

  addAdress = address1 => {
    this.setState({ address: address1 })
  }
  addUsername = username1 => {
    this.setState({ username: username1 })
  }
  render() {

    // console.warn(this.state.email)


    return (
      <View>
        <TextInput placeholder="email" keyboardType='email-address' style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} value={this.state.email}
          onChangeText={entermail => {
            this.addeamilAdress(entermail)
          }} />


        <TextInput placeholder="password" secureTextEntry={true} keyboardType="visible-password" onChangeText={enterpass => { this.addpassword(enterpass) }} style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} />

        <TextInput placeholder="address" onChangeText={enteaddres => { this.addAdress(enteaddres) }} style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} />

        <TextInput placeholder="username" onChangeText={enterUsername => { this.addUsername(enterUsername) }} style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} />



        <Button title="SignUP" onPress={() => this.SignUP()}></Button>
        <Button title="go for Login" onPress={() => this.props.navigation.navigate('LoginApi')} />


      </View>
    );
  }
};






  // try {
    //   axios({
    //     method: 'post',
    //     url: 'http://apis.jahanzaibb.online/api/register',
    //     data: {
    //      email:this.state.email,
    //      password:this.state.password,
    //      address:this.state.address,
    //      username:this.state.username
    //     }
    //   })

    // }

    // catch (error) {
    //   console.log(error);
    // }

    // }