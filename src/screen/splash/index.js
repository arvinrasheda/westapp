import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

class SplashScreen extends Component {
    render() {
        return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2ECC71',
            height: '100%'
        }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }}>
                <Image style={{
                    width: 273,
                    height: 350,
                    resizeMode: 'center',
                }} source={require('../../assets/images/splash.png')}/>
            </TouchableOpacity>
        </View>
        );
    }
}

export default SplashScreen;
