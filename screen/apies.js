import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Apies extends Component {
    getMoviesFromApi = async() => {
        return await fetch('https://reactnative.dev/movies.json')
          .then((response) => response.json())
          .then((json) => {
            return json.movies;
          })
          .catch((error) => {
            console.error(error);
          });
        }
    render() {
        return (
            <View>
               <Button title="open" onPress={this.getMoviesFromApi}></Button>
            </View>
        )
    }
}
