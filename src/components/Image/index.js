import React, { Component } from 'react'
import { Text, View,Image as RnImage } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants'

export class Image extends Component {
    render() {
        const {url} = this.props
        console.log({url})
        return (
            <RnImage 
                source = {{uri:url}}
                style = {{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT/3 }}
                resizeMode="stretch"
            />
        )
    }
}
