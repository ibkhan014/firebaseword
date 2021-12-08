import React, { Component } from 'react'
import { Text, View,Button,Image } from 'react-native'

import ImagePicker from 'react-native-image-crop-picker';

export default class camera extends Component {
  constructor(props){
    super(props);
    this.state={
      img1:null,
    
    }
  }
 openpicker=()=>{ ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
    multiple:true
  }).then(image => {
    console.log(image);
    this.setState({img1:image.path})
  });}
  opencamer=()=>{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({img1:image.path})
    });
  }
  render() {
    return (
      <View>
        <Image source= {{uri:this.state.img1}} style={{height:200, width:200}}/>
      <Button title="open" onPress={()=>this.openpicker()}/>
      <Button title="open" onPress={()=>this.opencamer()}/>
      </View>
    )
  }
}
