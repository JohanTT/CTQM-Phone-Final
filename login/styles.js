import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'pink'
    },
    logoContainer: {
        alignItems: 'center',
        //justifyContent: 'center',
       marginTop: 20,
       //flex: 1
   },
   logo:{
       width: 128,
       height: 80,
   },
    up:{
        //flex: 3,
        flexDirection: 'column',
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    down:{
        //flex: 7,
        flexDirection: 'column',
        //backgroundColor: 'green',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title:{
        color: 'white',
        color: 'rgb(255,119,34)',
        textAlign: 'center',
        width: 400,
        fontSize: 23,
    },
    textInputContainer: {
        borderRadius: 6,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        marginBottom: 20, 
        marginTop: 7
    },
    textInput:{
        width:280,
        height: 45
    },
    loginButton:{
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
    },
    loginButtonTitle:{
        fontSize: 18,
        color: 'black'
    },
    facebookButton:{
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
    },
    // line:{
      //   flex: 2,
    //     height: 1,
    //     backgroundColor: 'black'
    // },
    // textOR:{
    //     flex:1,
    //     textAlign: 'center',
    // },
    // divider:{
    //     flexDirection: 'row',
    //     height: 40,
    //     width: 298,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    logiinButtonTitle:{
        fontSize: 15,
        color: 'black'
    }
});

export default styles;