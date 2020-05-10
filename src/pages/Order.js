//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
//import all the basic component we have used

export default class Order extends React.Component {
    //Detail Screen to show from any Open detail button
    render() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}>
                <View style={{
                    borderRadius: 8,
                    backgroundColor: 'white',
                    elevation: 8,
                    width: '80%',
                    minHeight: '80%',
                    position: 'relative',
                    alignItems: 'center',
                    overflow: 'scroll'
                }}>
                    <Text style={{
                        padding: 15,
                        color: '#2ECC71',
                        fontWeight: 'bold',
                        fontSize: 40
                    }}>Order History</Text>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail') }}>
                        <View style={{
                            borderRadius: 8,
                            backgroundColor: 'white',
                            elevation: 8,
                            width: '100%',
                            position: 'relative',
                            padding: 16,
                            flexDirection: 'row'
                        }}>
                            <Icon name='check' type='font-awesome' color='#2ECC71' size={30}/>
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: 15
                            }}>
                                <Text style={{
                                    marginLeft: 5,
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: 15
                                }}>Jl. Pamitran 5 no 48</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: '#2ECC71',
                                    fontSize: 10
                                }}>Complete</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: 'black',
                                    fontSize: 10
                                }}>15 Jan 2019, 06:29 PM</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail') }}>
                        <View style={{
                            borderRadius: 8,
                            backgroundColor: 'white',
                            elevation: 8,
                            width: '80%',
                            position: 'relative',
                            padding: 16,
                            marginTop: 10,
                            flexDirection: 'row'
                        }}>
                            <Icon name='bicycle' type='font-awesome' color='#CCA238' size={25}/>
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: 15
                            }}>
                                <Text style={{
                                    marginLeft: 5,
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: 15
                                }}>Jl. Pamitran 5 no 48</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: '#CCA238',
                                    fontSize: 10
                                }}>Run With Messanger</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: 'black',
                                    fontSize: 10
                                }}>15 Jan 2019, 05:16 PM</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail') }}>
                        <View style={{
                            borderRadius: 8,
                            backgroundColor: 'white',
                            elevation: 8,
                            width: '80%',
                            position: 'relative',
                            padding: 16,
                            marginTop: 10,
                            flexDirection: 'row'
                        }}>
                            <Icon name='bicycle' type='font-awesome' color='#5755cc' size={25}/>
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: 15
                            }}>
                                <Text style={{
                                    marginLeft: 5,
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: 15
                                }}>Jl. Pamitran 5 no 48</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: '#5755cc',
                                    fontSize: 10
                                }}>Waiting Pickup Messanger</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: 'black',
                                    fontSize: 10
                                }}>15 Jan 2019, 04:10 PM</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail') }}>
                        <View style={{
                            borderRadius: 8,
                            backgroundColor: 'white',
                            elevation: 8,
                            width: '80%',
                            position: 'relative',
                            padding: 16,
                            marginTop: 10,
                            flexDirection: 'row'
                        }}>
                            <Icon name='archive' type='font-awesome' color='#CC1025' size={25}/>
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: 15
                            }}>
                                <Text style={{
                                    marginLeft: 5,
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: 15
                                }}>Jl. Pamitran 5 no 48</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: '#cc1025',
                                    fontSize: 10
                                }}>New Order</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: 'black',
                                    fontSize: 10
                                }}>15 Jan 2019, 04:00 PM</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}
