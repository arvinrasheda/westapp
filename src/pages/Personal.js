//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
//import all the basic component we have used

export default class Personal extends React.Component {
    //Profile Screen to show from Open profile button

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
                    position: 'relative',
                    padding: 16,
                    alignItems: 'center',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image
                            source={require('../assets/images/user.png')}
                            style={{
                                width: 66,
                                height: 60,
                                borderRadius: 1000,
                                resizeMode: 'center',
                            }}
                        />
                        <Text style={{
                        padding: 15,
                        color: '#2ECC71',
                        fontWeight: 'bold',
                        textAlignVertical: 'center',
                        fontSize: 40
                    }}>Personal</Text>
                    </View>
                    <TextInput style={{
                        marginTop: 30,
                        width: '100%',
                    }} placeholder="Nama Lengkap" underlineColorAndroid={'#2ECC71'} />
                    <TextInput style={{
                        marginTop: 10,
                        width: '100%',
                    }} placeholder="NIM" underlineColorAndroid={'#2ECC71'} />
                    <TextInput style={{
                        marginTop: 10,
                        width: '100%',
                    }} placeholder="Username" underlineColorAndroid={'#2ECC71'}  />
                    <TextInput style={{
                        marginTop: 10,
                        width: '100%',
                    }} placeholder="Nomor Handphone" underlineColorAndroid={'#2ECC71'}  />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
                        <View style={{
                            borderRadius: 8,
                            backgroundColor: '#2ECC71',
                            elevation: 8,
                            width: 150,
                            padding: 16,
                            marginTop: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                width: '100%',
                            }}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
