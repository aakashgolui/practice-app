import React from 'react';
import {View, StatusBar, ScrollView, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../style/index';
class SetTarget extends React.Component {
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#18ce96'}}>
                <View style={styles.head_container}>
                    <View style={styles.head_left}></View>
                    <View style={styles.head_center}>
                        <Image source={require('../../assets/logo.png')} style={styles.head_logo} />
                    </View>
                    <TouchableOpacity style={styles.head_right} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                        <Text style={{textAlign:'center', color:'#fff', fontSize:13, fontWeight:'500'}}>Skip</Text>
                    </TouchableOpacity> 
                </View>
                <ScrollView style={{flex:1, backgroundColor:'white'}}>
                    <View style={styles.card_view}>
                        <Text style={styles.login_container_title}>Set practice targets for Ryan</Text>
                        
                        <Text style={{marginTop:20, textAlign:'center'}}>Total minutes to practice in a week</Text>
                        <View style={styles.plus_minus_container}>
                        
                            <Image source={require('../../assets/minius-icon.png')} style={styles.plusMinusIcon} />
                            <Text style={styles.plusMinusMiddleText}>40 <Text style={{color:'#9B9B9B'}}>min</Text></Text>
                            <Image source={require('../../assets/plus-icon.png')} style={styles.plusMinusIcon} />
                        </View>

                        <Text style={{marginTop:20, textAlign:'center'}}>Number of days to practice in a week</Text>
                        <View style={styles.plus_minus_container}>
                            <Image source={require('../../assets/minius-icon.png')} style={styles.plusMinusIcon} />
                            <Text style={styles.plusMinusMiddleText}>5 <Text style={{color:'#9B9B9B'}}>days</Text></Text>
                            <Image source={require('../../assets/plus-icon.png')} style={styles.plusMinusIcon} />
                        </View>
                        <TouchableOpacity style={styles.login_btn}>
                            <Text style={styles.login_btn_text}>Save</Text>
                        </TouchableOpacity>

                        <Text style={styles.weeklyPerformLink}>Enable Weekly Performance Reports</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default SetTarget;