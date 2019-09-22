import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    head_container:{
        height:window.height * 0.1,
        backgroundColor:'#18ce96',
        marginTop: StatusBar.currentHeight,
        elevation:5,
        flexDirection:'row'
    },
    head_left:{
        width:70
    },
    head_center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    head_right:{
        width:70,
        justifyContent:'center',
        alignItems:'center'
    },
    head_logo:{
        resizeMode:'contain',
        // height: window.height * 0.8,
        width: window.width - 150
    },
    card_view:{
        // height:200,
        marginHorizontal:20,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#fff',
        elevation:5,
        borderRadius:10,
        padding:20
    },
    login_container_title:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'500'
    },
    lableContainer:{
        width: window.width * 0.25,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    inputLabel:{
        fontSize:13,
        color:'#000',
        fontWeight:'400',
        textAlign:'right'
    },
    inputBox:{flex:1, borderBottomColor:'#727272', borderBottomWidth:2, marginLeft:10},
    login_btn:{
        marginHorizontal:40,
        height: window.height * 0.08,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F0EFEF',
        marginTop:25,
        borderRadius:15,
    },
    login_btn_text:{
        color:'#868686',
        fontSize:18,
        fontWeight:'500'
    },
    checkContainer:{flexDirection:'row', marginTop:10, justifyContent:'center', marginHorizontal:20, alignItems:'center'},
    plus_minus_container:{
        height: window.height * 0.07,
        marginTop:20,
        marginHorizontal:40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    plusMinusIcon:{
        height:window.height * 0.06,
        width:window.height * 0.06,
        resizeMode:'contain'
    },
    plusMinusMiddleText:{
        fontSize:20,
        fontWeight:'500'
    },
    weeklyPerformLink:{
        fontSize:16,
        marginTop:20,
        textAlign:'center',
        color:'#18ce96',
        fontWeight:'500'
    },
    rating_img:{
        width:window.height * 0.15,
        resizeMode:'contain'
    },
    arrow_img:{
        resizeMode:'contain',
        width:window.height * 0.05,
    },
    homeIconTabContainer:{
        height: window.height * 0.26,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:10
    },
    card_viewIcon:{
        flex:1,
        marginHorizontal:10,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#fff',
        elevation:5,
        borderRadius:10,
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    homeTabIcon:{
        width:window.height * 0.15,
        height:window.height * 0.07,
        resizeMode:'contain'
    },
    homeTabText:{
        fontSize:15,
        fontWeight:'500',
        color:'#707070',
        marginTop:10
    },
    goProBtn:{
        backgroundColor:'#18ce96',
        height: window.height * 0.09,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        elevation:5
    },
    goProBtnText:{
        fontSize:18,
        fontWeight:'500',
        color:'#fff'
    },
    setting_heading:{
        color:'#999999',
        fontSize:16,
        fontWeight:'400',
        textAlign:'center',
        marginTop:15
    },
    setting_menu_container:{
        height: window.height * 0.08,
        justifyContent:'center',
        alignItems:'center',
    },
    setting_menu_container_text:{
        color:'#000',
        fontSize:20,
        fontWeight:'400',
        marginTop:10
    }
});

export default styles;