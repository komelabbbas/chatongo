import React, { Component, Fragment } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';

export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        const { url } = this.props;
        let loading = <Fragment />;

        if (this.state.loading) {
            loading = (
                <ActivityIndicator
                    size="large"
                    color={colors.primary}
                    style={{
                        position: 'absolute',
                        width: SCREEN_WIDTH,
                        height: SCREEN_HEIGHT / 3,
                        zIndex: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                />
            );
        }

        return (
            <>
                {loading}
                <FastImage
                    source={{ uri: url }}
                    style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 3 }}
                    resizeMode="stretch"
                    onLoad={() => this.setState({ loading: false })}
                />
            </>
        );
    }
}
