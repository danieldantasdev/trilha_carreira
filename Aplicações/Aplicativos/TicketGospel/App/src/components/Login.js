import React, { Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    Alert
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import checkLogin from '../api/checkLogin'
import getToken from '../api/getToken'
import LoginApi from '../api/LoginApi'

class Login extends Component {
    static navigationOptions = {
        title: 'Log In'
    }

    constructor(props) {
        super(props)
        this.state = {
            url: 'https://www.ticketgospel.com.br//',
            user: '',
            pass: ''
        }
    }

    _validate() {
        const { url, user, pass } = this.state

        if (url == '') {
            alert('Digite uma URL válida')
            return false
        }

        // if ((user || pass) == '') {
        //     Alert.alert(
        //         'Não digitou nada',
        //         'Digite novamente seu usuário e senha',
        //         [
        //             {
        //                 text: 'OK',
        //                 onPress: () => console.log('OK Pressed')
        //             }
        //         ]
        //     )
        //     return false
        // }

        // if (user == '') {
        //     Alert.alert('Usuário não digitado', 'Digite seu usuário', [
        //         {
        //             text: 'OK',
        //             onPress: () => console.log('OK Pressed')
        //         }
        //     ])
        //     return false
        // }

        // if (pass == '') {
        //     Alert.alert('Senha não digitada', 'Digite sua senha', [
        //         {
        //             text: 'OK',
        //             onPress: () => console.log('OK Pressed')
        //         }
        //     ])
        //     return false
        // }
    }

    _onLogin = async () => {
        this._validate()

        const { navigate } = this.props.navigation

        const { url, user, pass } = this.state

        await LoginApi(url, user, pass)
            .then((resjson) => {
                if ((user || pass) == '') {
                    Alert.alert(
                        'Não digitou nada',
                        'Digite novamente seu usuário e senha',
                        [
                            {
                                text: 'OK',
                                onPress: () => console.log('OK Pressed')
                            }
                        ]
                    )
                    return false
                }

                if (user == '') {
                    Alert.alert('Usuário não digitado', 'Digite seu usuário', [
                        {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed')
                        }
                    ])
                    return false
                }

                if (pass == '') {
                    Alert.alert('Senha não digitada', 'Digite sua senha', [
                        {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed')
                        }
                    ])
                    return false
                }
                if (
                    resjson.status === 'SUCCESS' &&
                    this.saveToStorage(resjson.token)
                ) {
                    // alert(resjson.msg)
                    Alert.alert(
                        'Seja bem-vindo!',
                        'Login efetuado com sucesso!',
                        [
                            {
                                text: 'OK',
                                onPress: () => console.log('OK Pressed')
                            }
                        ]
                    )
                    navigate('Events')
                } else if (resjson.status === 'FAIL') {
                    // alert(resjson.msg)

                    Alert.alert(
                        'Usuário ou senha incorreta',
                        'Digite novamente para  concluir seu login',
                        [
                            {
                                text: 'OK',
                                onPress: () => console.log('OK Pressed')
                            }
                        ]
                    )
                }
            })

            .catch((err) => {
                console.log(err)
            })
    }

    async saveToStorage(token) {
        if (token) {
            await AsyncStorage.setItem('@token', token)
            await AsyncStorage.setItem('@isLoggedIn', '1')
            await AsyncStorage.setItem('@url', this.state.url)

            return true
        }

        return false
    }

    render() {
        const { url, user, pass } = this.state

        return (
            <ImageBackground
                source={require('../../assets/img/BG.png')}
                style={styles.imageBackground}
            >
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <SafeAreaView>
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}
                        >
                            <Image
                                source={require('../../assets/img/ticketBranco.png')}
                                style={styles.imageForeground}
                            />

                            <TextInput
                                style={styles.inputOcult}
                                placeholder="WordPress Installtation URL"
                                onChangeText={(url) => this.setState({ url })}
                                autoCapitalize="none"
                                value={url}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Usuário"
                                autoCapitalize="none"
                                onChangeText={(user) => this.setState({ user })}
                                value={user}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Senha"
                                autoCapitalize="none"
                                onChangeText={(pass) => this.setState({ pass })}
                                value={pass}
                                secureTextEntry
                                keyboardType="default"
                            />
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={this._onLogin.bind(this)}
                            >
                                <Text style={styles.btn_text}>Entrar</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50

        // backgroundColor: '#c0d6f1'
    },

    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    imageForeground: {
        // width: 300,
        // height: 55,
        padding: 10,
        margin: 5,
        height: 30,
        width: 160,
        // margin: 68,
        alignSelf: 'center',
        marginVertical: 60,
        resizeMode: 'stretch'
    },

    scrollView: {
        // backgroundColor: Colors.dark,
        padding: 40
    },

    input: {
        height: 40,
        width: 220,
        alignSelf: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: '#fff',
        color: '#000000'
    },

    inputOcult: {
        height: 40,
        width: 220,
        alignSelf: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: '#fff',
        color: '#000000',
        opacity: 0,
        display: 'none'
    },

    btn: {
        height: 40,
        width: 120,
        backgroundColor: '#f89406',
        borderColor: '#e86c60',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20
        // marginHorizontal: 90
    },

    btn_text: {
        color: '#fff',
        fontSize: 16,
        borderRadius: 5
    }
})

export default Login
