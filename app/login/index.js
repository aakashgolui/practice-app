import React from 'react';
import {View, StatusBar, ScrollView, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../style/index';
class Login extends React.Component {
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#18ce96'}}>
                <View style={styles.head_container}>
                    <View style={styles.head_left}></View>
                    <View style={styles.head_center}>
                        <Image source={require('../../assets/logo.png')} style={styles.head_logo} />
                    </View>
                    <TouchableOpacity style={styles.head_right} onPress={()=>this.props.navigation.navigate('RegisterScreen')}>
                        <Text style={{textAlign:'center', color:'#fff', fontSize:13, fontWeight:'500'}}>New Account</Text>
                    </TouchableOpacity> 
                </View>
                <ScrollView style={{flex:1, backgroundColor:'white'}}>
                    <View style={styles.card_view}>
                        <Text style={styles.login_container_title}>Login</Text>
                        <View style={{flexDirection:'row', alignItems:'center',marginTop:20}}>
                            <View style={styles.lableContainer}>
                                <Text style={styles.inputLabel}>Email</Text>
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
                                <TextInput style={styles.inputBox} secureTextEntry={true}/>
                            </View>
                            
                        </View>

                        <TouchableOpacity style={styles.login_btn} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                            <Text style={styles.login_btn_text}>Continue</Text>
                        </TouchableOpacity>

                        
                    </View>
                    <TouchableOpacity style={[styles.login_btn, {backgroundColor:'#fff', marginTop:5}]}>
                        <Text>Forget password?</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default Login;