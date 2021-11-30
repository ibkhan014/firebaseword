import axios from 'axios'
import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export default class ApiSignin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }
    // componentDidMount() {
    //     this.singin()
    // }
    singin = () => {
        axios.get('apis.jahanzaibb.online/api/login')
            .then(
                function (response) {
                    console.warn(response)
                    return response
                    
                })
            .catch(function (error) {
                console.log(error);
            })
    }


    addpassword = password1 => {
        this.setState({ password: password1 })
    }
    addUsername = username1 => {
        this.setState({ username: username1 })
    }
    addemail = email1 => {
        this.setState({ email: email1 })
    }
    render() {
        return (
            <View>
                <TextInput placeholder="username" onChangeText={enterUsername => { this.addUsername(enterUsername) }} style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} />
                <TextInput placeholder="password" secureTextEntry={true} keyboardType="visible-password" onChangeText={enterpass => { this.addpassword(enterpass) }} style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} />
                <TextInput placeholder="Email" secureTextEntry={true} keyboardType="visible-password" onChangeText={enterEmail => { this.addemail(enterEmail) }} style={{ textAlign: 'center', borderWidth: 1, margin: 8 }} />

                <Button title="login" onPress={() => this.singin()} />


                <Button title="go for signup" onPress={() => this.props.navigation.navigate('ApiSignUP')} />
            </View>
        )
    }
}
