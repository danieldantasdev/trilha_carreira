import React, { Component } from 'react'
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
    ImageBackground
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import getToken from '../api/getToken'
import checkLogin from '../api/checkLogin'

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props)
        this._loadData()
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/img/BG.png')}
                style={styles.imageBackground}
            >
                <View style={styles.container}>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                </View>
            </ImageBackground>
        )
    }

    _loadData = async () => {
        getToken()
            .then((token) => checkLogin(token))
            .then((res) => {
                this.props.navigation.navigate(
                    res.status === 'SUCCESS' ? 'App' : 'Auth'
                )
            })
            .catch((err) => this.props.navigation.navigate('Auth'))
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
        // backgroundColor: '#c0d6f1'
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})
