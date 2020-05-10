//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput, Button} from 'react-native';
import {Icon} from 'react-native-elements';
//import all the basic component we have used

export default class NewOrder extends React.Component {
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
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
                            <Icon name='arrow-left' type='font-awesome' color='#2ECC71' size={25}/>
                        </TouchableOpacity>
                        <Text style={{
                            padding: 15,
                            color: '#2ECC71',
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            fontSize: 40
                        }}>New Order</Text>
                    </View>
                    <TextInput style={{
                        marginTop: 30,
                        width: '100%',
                    }} placeholder="Address To" underlineColorAndroid={'#2ECC71'} />
                    <TextInput style={{
                        marginTop: 10,
                        width: '100%',
                    }} placeholder="What You Will Send" underlineColorAndroid={'#2ECC71'} />
                    <TextInput style={{
                        marginTop: 10,
                        width: '100%',
                    }} placeholder="Weight *estimation" underlineColorAndroid={'#2ECC71'} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail') }}>
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
                            }}>Order!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
