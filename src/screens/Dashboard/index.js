/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, ScrollView, StatusBar } from 'react-native';
import Request from '../../api/request';
import { Card } from '../../components';
import { colors } from '../../constants';
import styles from './styles';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        Request.get()
            .then((response) => {
                this.setState({ data: response.data.Records });
            })
            .catch((e) => {});
    }

    render() {
        console.log(this.state.data);
        return (
            <View style={styles.mainContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor={colors.black}
                    barStyle={'light-content'}
                />
                <View style={styles.container}>
                    <Text style={styles.heading}>Record List</Text>
                </View>
                <ScrollView>
                    <View style={styles.cards}>
                        {this.state.data.map((item, index) => {
                            return <Card key={index} {...item} />;
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
