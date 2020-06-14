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
                        }}>Kelompok</Text>
                    </View>
                    <Text h5>- 17180093 Arvin Rasheda</Text>
                    <Text h5>- 17180056 Indra Rukmana</Text>
                    <Text h5>- 17180027 Eka Hendiyana</Text>
                    <Text h5>- 17180035 Abdul Wahab Avrizal</Text>
                    <Text h5>- 17180071 Ady Miftakhuz Zaman</Text>
                </View>
            </View>
        );
    }
}
