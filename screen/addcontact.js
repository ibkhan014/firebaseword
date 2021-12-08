import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { Modal, Text, TextInput, View, Image, Button, TouchableOpacity, } from 'react-native'

export default class Addcontact extends Component {
    state = {
        firstname: '',
        lastname: '',
        phone: '',
    };
    storeData = async () => {
        const { firstname, lastname, phone } = this.state
        var newObj = { firstName: firstname, lastName: lastname, number: phone }
        var contactArray = await AsyncStorage.getItem("contactArray")
        var tempArray = []
        if (contactArray != null) {
            contactArray = JSON.parse(contactArray)
            tempArray = contactArray
            tempArray.push(newObj)
        } else {
            tempArray.push(newObj)
        }
        await AsyncStorage.setItem("contactArray", JSON.stringify(tempArray))
       
    };
    getData = async () => {
       
    };
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <View>
                {/* <Modal> */}
                <Text style={{ fontSize: 30, borderBottomWidth: 1, marginVertical: 20 }}> New Contact </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={require('../image/addphoto.jpg')}
                            style={{ width: 60, height: 60, borderRadius: 50, marginHorizontal: 20, marginVertical: 20 }}
                        />
                    </View>
                    <View>
                        <TextInput placeholder='First Name '
                            value={this.state.firstname}
                            onChangeText={(firstname) => {
                                this.setState({ firstname });
                            }}
                            style={{ marginHorizontal: 10, borderBottomWidth: 0.5, fontSize: 15 }}>
                        </TextInput>
                        <TextInput placeholder='Last Name  '
                            value={this.state.lastname}
                            onChangeText={(lastname) => {
                                this.setState({ lastname });
                            }}
                            style={{ marginHorizontal: 10, borderBottomWidth: 0.5, fontSize: 15 }}></TextInput>
                        <TextInput placeholder='Phone  '
                            value={this.state.phone}
                            onChangeText={(phone) => {
                                this.setState({ phone });
                            }}
                            style={{ marginHorizontal: 10, borderBottomWidth: 0.5, fontSize: 15 }}></TextInput>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={this.storeData}
                    style={{ alignItems: 'center', backgroundColor: 'skyblue', marginVertical: 20, }}>
                    <Text style={{ fontSize: 30 }}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'skyblue', marginVertical: 20, }}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{ fontSize: 30 }}>Goto Back</Text>
                </TouchableOpacity>
                {/* </Modal> */}
            </View>
        )
    }
}