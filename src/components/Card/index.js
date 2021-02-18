import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { colors, indianRupees } from '../../constants';
import { Image } from '../Image';
import styles from './styles';

export class Card extends Component {
    render() {
        const {
            mainImageURL: url,
            collectedValue,
            totalValue,
            startDate,
            endDate
        } = this.props;

        const date1 = moment(startDate, 'DD.MM.YYYY');
        const date2 = moment(endDate, 'DD.MM.YYYY');
        const endsIn = date2.diff(date1, 'days');

        return (
            <View style={styles.container}>
                <Image url={url} />

                <View style={styles.body}>
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.row}>
                                <Text style={styles.amountValue}>
                                    {indianRupees(collectedValue)}
                                </Text>
                                <Text style={styles.amountValue}>
                                    {indianRupees(totalValue)}
                                </Text>
                                <Text style={styles.amountValue}>{endsIn}</Text>
                            </View>
                            <View style={[styles.row, styles.amountLabels]}>
                                <Text style={styles.amountTitle}>FUNDED</Text>
                                <Text
                                    style={[
                                        styles.amountTitle,
                                        styles.textCenter
                                    ]}
                                >
                                    GOALS
                                </Text>
                                <Text style={styles.amountTitle}>ENDS IN</Text>
                            </View>
                        </View>

                        <View style={styles.center}>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>PLEDGE</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
