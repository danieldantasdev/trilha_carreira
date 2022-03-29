import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
    StyleSheet,
    GoBack,
    Text,
    View,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    ActivityIndicator
} from 'react-native'

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

import Login from './src/components/Login'
import Events from './src/components/Events'
import ListTickets from './src/components/ListTickets'
import AuthLoadingScreen from './src/components/AuthLoadingScreen'
import ScanBarcode from './src/components/ScanBarcode'

const AuthStack = createStackNavigator({ Login: Login })

const AppNavigator = createStackNavigator(
    {
        Events: Events,
        ListTickets: ListTickets,
        ScanBarcode: ScanBarcode
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'flex-start',
                flex: 1
            },
            headerBackTitle: 'Voltar'
            // headerBackTitleVisible: false
        }
    }
)

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: AppNavigator,
            Auth: AuthStack
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5

        // backgroundColor: '#c0d6f1'
    }
})

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <StatusBar style="auto" />

//             <ImageBackground
//                 source={require('./assets/img/BG.png')}
//                 style={styles.imageBackground}
//             >
//                 <SafeAreaView>
//                     <ScrollView
//                         contentInsetAdjustmentBehavior="automatic"
//                         style={styles.scrollView}
//                     >
//                         <View style={styles.containerTwo}>
//                             {/* <Image
//                         source={require('./assets/img/ticket.png')}
//                         style={styles.imageForeground}
//                     /> */}
//                             <Image
//                                 source={require('./assets/img/ticketBranco.png')}
//                                 style={styles.imageForeground}
//                             />
//                             {/* <AuthStack></AuthStack> */}

//                             {/* <Text style={styles.text}>React Native</Text> */}
//                         </View>

//                         {/* <Header />
//                         {global.HermesInternal == null ? null : (
//                             <View style={styles.engine}>
//                                 <Text style={styles.footer}>
//                                     Engine: Hermes
//                                 </Text>
//                             </View>
//                         )}
//                         <View style={styles.body}>
//                             <View style={styles.sectionContainer}>
//                                 <Text style={styles.sectionTitle}>
//                                     Step One
//                                 </Text>
//                                 <Text style={styles.sectionDescription}>
//                                     Edit{' '}
//                                     <Text style={styles.highlight}>App.js</Text>{' '}
//                                     to change this screen and then come back to
//                                     see your edits.
//                                 </Text>
//                             </View>
//                             <View style={styles.sectionContainer}>
//                                 <Text style={styles.sectionTitle}>
//                                     See Your Changes
//                                 </Text>
//                                 <Text style={styles.sectionDescription}>
//                                     <ReloadInstructions />
//                                 </Text>
//                             </View>
//                             <View style={styles.sectionContainer}>
//                                 <Text style={styles.sectionTitle}>Debug</Text>
//                                 <Text style={styles.sectionDescription}>
//                                     <DebugInstructions />
//                                 </Text>
//                             </View>
//                             <View style={styles.sectionContainer}>
//                                 <Text style={styles.sectionTitle}>
//                                     Learn More
//                                 </Text>
//                                 <Text style={styles.sectionDescription}>
//                                     Read the docs to discover what to do next:
//                                 </Text>
//                             </View>
//                             <LearnMoreLinks />
//                         </View> */}
//                     </ScrollView>
//                 </SafeAreaView>
//             </ImageBackground>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column'
//         // backgroundColor: '#fff',
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         // Background: '',
//     },

//     // logo:{
//     //   width:40,
//     //   height:40,

//     // },

//     // background:{
//     //   width:400,
//     //   height:400,
//     // },

//     imageBackground: {
//         flex: 1,
//         resizeMode: 'cover',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },

// imageForeground: {
//     width: 280,
//     height: 50
// },

//     text: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },

//     scrollView: {
//         // backgroundColor: Colors.dark
//         padding: 20
//     },

//     engine: {
//         position: 'absolute',
//         right: 0
//     },

//     body: {
//         backgroundColor: Colors.white
//     },

//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24
//     },

//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black
//     },

//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: Colors.dark
//     },

//     highlight: {
//         fontWeight: '700'
//     },

//     footer: {
//         color: Colors.dark,
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right'
//     }
// })
