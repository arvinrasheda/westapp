//This is an example code for Bottom Navigation//
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import react in our code.
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
//import all the basic component we have used

export default class Home extends React.Component {
    //Home Screen to show in Home Option
    render() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '40%'
            }}>
                <View style={{
                    borderRadius: 8,
                    backgroundColor: 'white',
                    elevation: 8,
                    width: '80%',
                    position: 'relative',
                    padding: 16,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image
                            source={require('../assets/images/profile.jpg')}
                            style={{
                                width: 66,
                                height: 60,
                                borderRadius: 1000,
                                resizeMode: 'center',
                            }}
                        />
                        <View style={{marginRight:65}}>
                            <Text style={{
                                marginLeft: 5,
                                color: '#2ECC71',
                                fontWeight: 'bold',
                                fontSize: 15
                            }}>Arvin Rasheda</Text>
                            <Text style={{
                                marginLeft: 5,
                                color: '#2ECC71',
                                fontSize: 10
                            }}>+62 8953 5523 1492</Text>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Personal') }}>
                            <Icon name='edit' type='font-awesome' color='#2ECC71' size={25}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 15,
                        flexDirection: 'column'
                        }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('HomeNavigator') }}>
                            <View style={{
                                borderRadius: 8,
                                backgroundColor: '#2ECC71',
                                elevation: 8,
                                width: 255,
                                padding: 16,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        textAlign: 'left',
                                        width: '100%',
                                    }}>         WestPay                              Rp.22.500 </Text>
                                    <Icon raised name='plus' type='font-awesome' color='#2ECC71' size={10}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
