import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

   


    showdata = () => {
        firestore()
            .collection('Users')
             .where('username', '==', this.state.username).where('password', '==', this.state.password.toString())
            .get().then((querySnapshot) => {
                alert(querySnapshot.size)
              });
      

    }

    componentDidMount(){
        firestore()
        .collection('Users')
        .get()
        .then(querySnapshot => {
          console.log('Total users: ', querySnapshot.size);
      
          querySnapshot.forEach(documentSnapshot => {
            console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          });
        });    

    }     
    render() {
        {console.warn(this.state.username)}
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
            </View>

        )
    }
}
