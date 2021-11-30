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
        try{
        firestore()
            .collection('Users')
             .where('username', '==', this.state.username).where('password', '==', this.state.password.toString())
            .get().then(() => {
                this.props.navigation.nativgate('Api')
                alert('welcome')
               }); 
            } catch (e){
                console.log('data not match')
            }

    }

    // componentDidMount(){
    //     firestore()
    //     .collection('Users')
    //     .get()
    //     .then(() => {
    //        this.props.navigation.nativgate('Signup')
    //       });    

     
    render() {
      
        return (
            <View>
                <TextInput placeholder='enter username' value={this.state.username} onChangeText={addemail = (email) => {
                    this.setState({ username: email })
                }}
                    style={{ borderWidth: 1, textAlign: 'center', margin: 10 }} />

                <TextInput placeholder='enter Password' value={this.state.password} onChangeText={addpass = (text) => {
                    this.setState({ password: text })
                }}
                    style={{ borderWidth: 1, textAlign: 'center', margin: 10 }} />

                <TouchableOpacity onPress={()=>this.showdata()} style={{ borderWidth: 1, alignContent: 'center' }}>
                    <Text style={{ fontSize: 28, textAlign: 'center' }}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')} >
                    <Text style={{ fontSize: 20, textAlign: 'center' }}> Signup heree </Text>
                </TouchableOpacity>
            </View>

        )
    }
}
