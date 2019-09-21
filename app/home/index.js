import React from 'react';
import {View, StatusBar, ScrollView, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../style/index';
class Home extends React.Component {
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#18ce96'}}>
                <View style={styles.head_container}>
                    <View style={styles.head_left}></View>
                    <View style={styles.head_center}>
                        <Image source={require('../../assets/logo.png')} style={styles.head_logo} />
                    </View>
                    <TouchableOpacity style={styles.head_right} >
                        <Text style={{textAlign:'center', color:'#fff', fontSize:13, fontWeight:'500'}}>Setting</Text>
                    </TouchableOpacity> 
                </View>
                <ScrollView style={{flex:1, backgroundColor:'white'}}>
                    <View style={styles.card_view}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={styles.login_container_title}>Ryan</Text>
                            <Image source={require('../../assets/rating-img.png')} style={styles.rating_img} />
                            
                        </View>    
                        <Text style={{marginTop:10, color:'#A1A1A1'}}>member since July 4th 2019</Text>
                        <Text style={{marginTop:15, color:'#000', fontSize:15, fontWeight:'500'}}>Practice make perfect. As long as you reflect each time." - Old English Proverb</Text>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                            <Text style={[styles.login_container_title, {fontSize:17, fontWeight:'500', color:'#18ce96'}]}>Start Practice</Text>
                            <Image source={require('../../assets/arrow.png')} style={styles.arrow_img} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.homeIconTabContainer}>
                        <TouchableOpacity style={styles.card_viewIcon}>
                            <Image source={require('../../assets/audio-note.png')} style={styles.homeTabIcon} />
                            <Text style={styles.homeTabText}>Audio Notes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card_viewIcon}>
                            <Image source={require('../../assets/practice-log.png')} style={styles.homeTabIcon} />
                            <Text style={styles.homeTabText}>Practice Log</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home;