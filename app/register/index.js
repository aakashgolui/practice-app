import React from 'react';
import {View, StatusBar, ScrollView, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../style/index';
class Register extends React.Component {
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#18ce96'}}>
                <View style={styles.head_container}>
                    <View style={styles.head_left}></View>
                    <View style={styles.head_center}>
                        <Image source={require('../../assets/logo.png')} style={styles.head_logo} />
                    </View>
                    <TouchableOpacity style={styles.head_right} onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                        <Text style={{textAlign:'center', color:'#fff', fontSize:13, fontWeight:'500'}}>Login</Text>
                    </TouchableOpacity> 
                </View>
                <ScrollView style={{flex:1, backgroundColor:'white'}}>
                    <View style={styles.card_view}>
                        <Text style={styles.login_container_title}>Sign Up</Text>
                        <View style={{flexDirection:'row', alignItems:'center',marginTop:20}}>
                            <View style={styles.lableContainer}>
                                <Text style={styles.inputLabel}>Your Name</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <TextInput style={styles.inputBox} />
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center',marginTop:20}}>
                            <View style={styles.lableContainer}>
                                <Text style={styles.inputLabel}>Your Email</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <TextInput style={styles.inputBox} />
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center',marginTop:20}}>
                            <View style={styles.lableContainer}>
                                <Text style={styles.inputLabel}>Password</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <TextInput style={styles.inputBox} />
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center',marginTop:20}}>
                            <View style={styles.lableContainer}>
                                <Text style={styles.inputLabel}>Your Child's Name</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <TextInput style={styles.inputBox} />
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center',marginTop:20}}>
                            <View style={styles.lableContainer}>
                                <Text style={styles.inputLabel}>What instrument do they play?</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <TextInput style={styles.inputBox} />
                            </View>
                            
                        </View>

                        <View style={styles.checkContainer}>
                            <Image source={require('../../assets/check-icon.png')} style={{height:25, width:25, resizeMode:'contain'}} />
                            <Text style={{fontSize:13, marginLeft:10}}>Check the box to agree to our Terms of Service and Privacy Policy</Text>
                        </View>

                        <TouchableOpacity style={styles.login_btn} onPress={()=>this.props.navigation.navigate('SetTargetScreen')}>
                            <Text style={styles.login_btn_text}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Register;