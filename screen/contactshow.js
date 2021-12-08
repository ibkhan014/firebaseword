import React, { Component } from 'react';
import { Text, View, Button, FlatList, SectionList, StyleSheet, Image, navigation, Modal, TextInput, Pressable, ImageBackgroundComponent } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AsyncStorage from '@react-native-async-storage/async-storage';
const array = [
  { firstName: 'John', lastName: "Doe", number: 68628626 },
]
export default class Home extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      // modalVisible: false,
      aray: [],
      allContacts:[],
      searchdata: "",
      FilterName: [],
      data: []
    }
  }
  async componentDidMount() {
    this.props.navigation.addListener('focus', (e) => {
      this.getData()
    });
    this.getData()
  }
  getData=async()=>{
    var contactArray = await AsyncStorage.getItem("contactArray")
    console.log("====contactArray===", JSON.parse(contactArray))
    if (contactArray != null) {
      contactArray = JSON.parse(contactArray)
      this.setState({ aray: contactArray,allContacts:contactArray })
    } else {
      AsyncStorage.setItem("contactArray", JSON.stringify(array))
      this.setState({ aray: array,allContacts:array })
    }
  }
  searching = (name) => {
    const filterdArray = this.state.allContacts.filter(x => x.firstName.includes(name))
    this.setState({ aray: [...new Set(filterdArray)] })
  }
  // datainputsearchdata = text => {
  //   this.setState({ searchdata: text })
  // }
  render() {
    // const { modalVisible } = this.state;
    // console.warn(this.state.FilterName)
    return (
      <View>
        <View style={{ flexDirection: 'row', backgroundColor: '#6883ed', }}>
          <Ionicons name='reorder-three' size={50} style={{ marginVertical: 5, color: 'white' }} />
          <Text style={{ fontSize: 30, marginHorizontal: 50, marginVertical: 10, color: 'white' }}>Contact</Text>
          <AntDesign name='plus' size={30}
            onPress={() => this.props.navigation.navigate('SaveContact')}
            style={{ marginLeft: 30, marginVertical: 14, color: 'white' }} />
          <Entypo name='dots-three-vertical' size={30} style={{ marginVertical: 14, marginLeft: 20, color: 'white' }} />
        </View>
        <View style={{ flexDirection: 'row', borderWidth: 0.5, borderRadius: 40 }}>
          <AntDesign name='search1' size={25}
            style={{ marginVertical: 10, marginLeft: 40, }} />
          <TextInput placeholder='Search in 1054 Contacts'
            // value={this.state.name}
            onChangeText={(value) => this.searching(value)}
            style={{ fontSize: 20, marginLeft: 20 }}>
          </TextInput>
        </View>
        <FlatList
          data={this.state.aray}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', marginHorizontal: 40, marginTop: 20 }} >
                <View>
                  <Image source={require('../image/con.png')}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                </View>
                <View style={{ marginLeft: 30 }}>
                  <Text style={{ fontSize: 25, }}>{item.firstName}{item.lastName}</Text>
                  <Text style={{ fontSize: 15, }}>{item.number}</Text>
                </View>
              </View>
            )
          }}
        />
      </View>
    );
  }
}