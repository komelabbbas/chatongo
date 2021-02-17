/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Card } from '../../components';

export  class Dashboard extends Component {

    componentDidMount(){

        
    }
  render() {
    return (
      <View>
          <Card />
            <Text> textInComponent </Text>
      </View>
    );
  }
}
