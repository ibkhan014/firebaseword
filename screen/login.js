import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import Signup from './signup';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    showdata = () => {
        try {
            firestore()
                .collection('Users')
                .where('username', '==', this.state.username).where('password', '==', this.state.password.toString())
                .get().then(() => {
                    alert('welcome')
                   
                  
                });
        } catch (e) {
            console.log('data not match')
        }
       

    }
    addeamilAdress = user1 => {
        this.setState({ username:user1 })
    }
    addpassword = password1 => {
        this.setState({ password:password1 })
      }
    render() {

        return (
            <View>
                <TextInput placeholder="email" keyboardType='email-address' style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} value={this.state.username}
                    onChangeText={entermail => {
                        this.addeamilAdress(entermail)
                    }} />
                <TextInput placeholder="password" value={this.state.password} secureTextEntry={true} keyboardType="visible-password" onChangeText={enterpass => { this.addpassword(enterpass) }} style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} />



                <TouchableOpacity onPress={() => this.showdata()} style={{ borderWidth: 1, alignContent: 'center' }}>
                    <Text style={{ fontSize: 28, textAlign: 'center' }}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} >
                    <Text style={{ fontSize: 20, textAlign: 'center' }}> Signup heree </Text>
                </TouchableOpacity>
            </View>

        )
    }
}
