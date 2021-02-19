import React, { Component } from 'react';
import { Text, View, Image as RnImage } from 'react-native';
import moment from 'moment';
import { colors, indianRupees } from '../../constants';
import { Image } from '../Image';
import styles from './styles';

export class Card extends Component {
    render() {
        const {
            title,
            shortDescription,
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
                                <Text style={styles.symbol}>₹</Text>
                                <Text style={styles.amountValue}>
                                    {collectedValue}
                                </Text>
                                <Text style={styles.symbol}>₹</Text>
                                <Text style={styles.amountValue}>
                                    {totalValue}
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

                <View style={styles.absoluteContainer}>
                    <View style={styles.content}>
                        <View style={styles.heading}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.description}>
                                {shortDescription}
                            </Text>
                        </View>
                        <View style={styles.likeContainer}>
                            <RnImage
                                style={styles.likeImage}
                                source={require('../../assets/heart.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Text style={styles.circleText}>100 %</Text>
                        </View>
                    </View>
                    <View></View>
                </View>
            </View>
        );
    }
}
