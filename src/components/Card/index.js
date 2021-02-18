import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { colors, indianRupees } from '../../constants';
import { Image } from '../Image';
import styles from './styles';

export class Card extends Component {
    render() {
        const { image: url, funds, goals, ends, category } = this.props;
        return (
            <View style={styles.container}>
                <Image url={url} />

                <View style={styles.body}>
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.row}>
                                <Text style={styles.amountValue}>
                                    {indianRupees(funds)}
                                </Text>
                                <Text style={styles.amountValue}>
                                    {indianRupees(goals)}
                                </Text>
                                <Text style={styles.amountValue}>
                                    {indianRupees(ends)}
                                </Text>
                            </View>
                            <View style={[styles.row, styles.amountLabels]}>
                                <Text style={styles.amountTitle}>FUNDED</Text>
                                <Text style={styles.amountTitle}>GOALS</Text>
                                <Text style={styles.amountTitle}>ENDS IN</Text>
                            </View>
                        </View>

                        <View style={styles.center}>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>
                                    {category}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
