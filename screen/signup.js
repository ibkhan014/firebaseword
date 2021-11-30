import React, { Component } from 'react'
import { Text, TextInput, View,TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      addres:'',
      phone:'',
      username:'',
      password:''
    }
  }
  adddata = () => {
    firestore()
      .collection('Users')
      .add({
        name: this.state.name,
        age: this.state.age,
        address:this.state.addres,
        phone:this.state.phone,
        username:this.state.username,
        password:this.state.password,
      })
      .then(() => {
        alert("data added")
        
      });
  }
  addName = text => { this.setState({ name: text }) }
  addage = age1 => { this.setState({ age: age1 }) }
  addadress = text => { this.setState({ addadress: text }) }
  addphone = text => { this.setState({ phone: text }) }
  addusername = text => { this.setState({ username: text }) }
  addpasword = text => { this.setState({ password: text }) }
  render() {
    return (
      <View>
        <TextInput placeholder='enter name' value={this.state.name} onChangeText={text => this.addName(text)}
         style={{ borderWidth: 1, textAlign: 'center', margin: 10 }} />

        <TextInput placeholder='enter age' value={this.state.age} onChangeText={age1 => { this.addage(age1) }}
         style={{ borderWidth: 1, textAlign: 'center', margin: 10 }} />

        <TextInput placeholder='enter address' value={this.state.addres} onChangeText={text => { this.addadress(text) }}
         style={{ borderWidth: 1, textAlign: 'center', margin: 10 }} />

        <TextInput placeholder='enter phone' value={this.state.phone} onChangeText={phone => { this.addphone(phone) }}
         style={{ borderWidth: 1, textAlign: 'center', margin: 10 }} />

        <TextInput placeholder='enter username' value={this.state.username} onChangeText={age1 => { this.addusername(age1) }}
         style={{ borderWidth: 1, textAlign: 'center', margin: 10 }} />

        <TextInput placeholder='enter password' value={this.state.password} onChangeText={age1 => { this.addpasword(age1) }} 
        style={{ borderWidth: 1, textAlign: 'center', margin: 10 }} />
        <Text onPress={this.adddata} style=
          {{
            textAlign: 'center', fontSize: 23, margin: 20, borderWidth: 2
          }}> SignUP </Text>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')} style={{ borderWidth: 1, alignContent: 'center' }}>
                    <Text style={{ fontSize: 28, textAlign: 'center' }}> Go For Login </Text>
                </TouchableOpacity>
      </View>
    )
  }
}







