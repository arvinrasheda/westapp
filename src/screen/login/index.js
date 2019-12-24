import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native';

class LoginScreen extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}>
                <View style={{
                    borderRadius: 8,
                    backgroundColor: 'white',
                    elevation: 8,
                    width: '80%',
                    padding: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{
                        marginTop: 10,
                        width: 64,
                        height: 82,
                        resizeMode: 'center',
                    }} source={require('../../assets/images/splash.png')}/>
                    <TextInput style={{
                        width: '100%',
                    }} placeholder="Nomor Handphone" underlineColorAndroid={'#2ECC71'} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('HomeNavigator') }}>
                        <View style={{
                            borderRadius: 8,
                            backgroundColor: '#2ECC71',
                            elevation: 8,
                            width: 150,
                            padding: 16,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                width: '100%',
                            }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;
