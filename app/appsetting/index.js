import React from 'react';
import {View, StatusBar, ScrollView, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../style/index';
class AppSetting extends React.Component {
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#18ce96'}}>
                <View style={styles.head_container}>
                    <View style={styles.head_left}></View>
                    <View style={styles.head_center}>
                        <Image source={require('../../assets/logo.png')} style={styles.head_logo} />
                    </View>
                    <TouchableOpacity style={styles.head_right} disabled={true} >
                        {/* <Text style={{textAlign:'center', color:'#fff', fontSize:13, fontWeight:'500'}}>Setting</Text> */}
                    </TouchableOpacity> 
                </View>
                <ScrollView style={{flex:1, backgroundColor:'white'}}>
                    <View style={styles.card_view}>
                        <TouchableOpacity style={styles.goProBtn}>
                            <Text style={styles.goProBtnText}>Upgrade to Pro</Text>
                        </TouchableOpacity>
                        <Text style={styles.setting_heading}>Customize</Text>
                        <TouchableOpacity style={styles.setting_menu_container}>
                            <Text style={styles.setting_menu_container_text}>Weekly Performance Report</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.setting_menu_container}>
                            <Text style={styles.setting_menu_container_text}>Set Practice Targets</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.setting_menu_container}>
                            <Text style={styles.setting_menu_container_text}>Weekly Performance Report</Text>
                        </TouchableOpacity>
                        <Text style={styles.setting_heading}>Account Details</Text>
                        <TouchableOpacity style={styles.setting_menu_container}>
                            <Text style={styles.setting_menu_container_text}>Update Account Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.setting_menu_container}>
                            <Text style={styles.setting_menu_container_text}>Logout</Text>
                        </TouchableOpacity>
                        <Text style={styles.setting_heading}>General Info</Text>
                        <TouchableOpacity style={styles.setting_menu_container}>
                            <Text style={styles.setting_menu_container_text}>Terms of Service</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.setting_menu_container}>
                            <Text style={styles.setting_menu_container_text}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.setting_menu_container}>
                            <Text style={styles.setting_menu_container_text}>Restore Purchases</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </View>
        )
    }
}

export default AppSetting;