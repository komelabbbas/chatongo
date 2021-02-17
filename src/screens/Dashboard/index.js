/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, ScrollView, StatusBar } from 'react-native';
import Request from '../../api/request';
import { Card } from '../../components';
import { colors } from '../../constants';
import styles from './styles';

export class Dashboard extends Component {

  async componentDidMount() {
    // try {
    //   console.log('mount11')
    //   let response = await fetch(
    //     'http://test.chatongo.in/testdata.json'
    //   );
    //   let data = await response.json();
    //   console.log(data)

    // } catch (error) {
    //   console.log({error})
    // }
    // Request.get().then((response)=>{
    //   console.log('res',response)
    // }).catch((e)=>console.log({e}))
  }

  render() {
    const data = [
      {
        image: "https://picsum.photos/200/300?grayscale",
        title: "Smile Crowfunding",
        description: "This foundation will bring smile on these faces",
        funds: 500,
        goals: 5000,
        ends: 36,
        category: "PLEDGE"
      },
      {
        image: "https://picsum.photos/200/300?grayscale",
        title: "Smile Crowfunding",
        description: "This foundation will bring smile on these faces",
        funds: 500,
        goals: 5000,
        ends: 36,
        category: "PLEDGE"
      },
      {
        image: "https://picsum.photos/200/300?grayscale",
        title: "Smile Crowfunding",
        description: "This foundation will bring smile on these faces",
        funds: 500,
        goals: 5000,
        ends: 36,
        category: "PLEDGE"
      },
      {
        image: "https://picsum.photos/200/300?grayscale",
        title: "Smile Crowfunding",
        description: "This foundation will bring smile on these faces",
        funds: 500,
        goals: 5000,
        ends: 36,
        category: "PLEDGE"
      }
    ]

    return (
      <View>
        <StatusBar
          animated={true}
          backgroundColor={colors.black}
          barStyle={"light-content"}
        />
        <View style={styles.container}>
          <Text style={styles.heading}>Record List</Text>
        </View>
        <ScrollView>
          {data.map((item, index) => {
            return (
              <Card key={index} {...item} />
            )
          })}
        </ScrollView>
      </View>
    );
  }
}
