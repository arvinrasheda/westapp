//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput, Button} from 'react-native';
import {Badge, Icon} from 'react-native-elements';
import {Rating} from 'react-native-ratings';
//import all the basic component we have used

export default class DetailOrder extends React.Component {
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
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Order') }}>
                            <Icon name='arrow-left' type='font-awesome' color='#2ECC71' size={25}/>
                        </TouchableOpacity>
                        <Text style={{
                            padding: 15,
                            color: '#2ECC71',
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            fontSize: 40
                        }}>Detail Order</Text>
                    </View>
                   <View style={{
                       alignItems: 'flex-start',
                       justifyContent: 'flex-start',
                       width: '80%',
                   }}>
                       <Text style={{ color: '#2ECC71', fontWeight: 'bold', }}>Address To</Text>
                       <TextInput style={{ width: '100%', }} placeholder="Address To" underlineColorAndroid={'#2ECC71'} value={"Jl. Pamitran 5 no 48"} />
                       <Text style={{ marginTop: 10, color: '#2ECC71', fontWeight: 'bold', }}>What You Will Send</Text>
                       <TextInput style={{ width: '100%', }} placeholder="What You Will Send" underlineColorAndroid={'#2ECC71'} value={"Oil Lubricant"} />
                       <Text style={{ marginTop: 10, color: '#2ECC71', fontWeight: 'bold', }}>Weight *estimation (g)</Text>
                       <TextInput style={{ width: '100%', }} placeholder="Weight *estimation" underlineColorAndroid={'#2ECC71'} value={"568"} />
                       <Text style={{ marginTop: 10, color: '#2ECC71', fontWeight: 'bold', marginBottom: 10}}>Status</Text>
                       <Badge value="Completed" status="success" />
                       <Text style={{ marginTop: 10, color: '#2ECC71', fontWeight: 'bold', marginBottom: 10}}>Rate Our Messanger</Text>
                       <Rating imageSize={25} fractions="{1}" startingValue="{3.3}" />
                   </View>
                </View>
            </View>
        );
    }
}
