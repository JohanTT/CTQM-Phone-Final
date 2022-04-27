import * as React from 'react';
import styles from './login/styles';
import {Text, View, Image,TouchableWithoutFeedback, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Login({navigation}) {
    const userName1 = 'admin';
    const passWord2 = 'pass12345';

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    
    function kiemtra(){
        if (userName == userName1 && passWord == passWord2) {
            navigation.navigate('home')
            console.log("DDUNGS");
        }
        else console.log("SAI");
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}> 
            <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                         source ={require('./images/CTQM.png')}
                        >  
                    </Image>
                    <Text style={styles.title}>Account Information</Text>

            </View>
            <View style={styles.down}>
                <View style={styles.textInputContainer}>
                    {/* Tai Khoan */}
                    <TextInput 
                    style={styles.textInput}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    value={userName}
                    onChangeText={(setUserName)}
                    secureTextEntry
                    >
                    </TextInput>
                </View>
                <View style={styles.textInputContainer}> 
                {/* Mat khau */}
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your passwrod"
                        secureTextEntry={true}
                        value={passWord}
                        onChangeText={(setPassWord)}
                    >
                </TextInput>
                </View>
                <TouchableOpacity 
                style={styles.loginButton}
                    onPress={kiemtra}
                >
                    <Text style={styles.loginButtonTitle}> LOGIN </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.signup}> By continuing, you agree to accept our </Text>
                <TouchableOpacity 
                    style={styles.sginupButton}
                >
                    <Text style={styles.logiinButtonTitle}> Privacy Policy & Terms of Service </Text>
                    </TouchableOpacity>
            </View>

        </View>
        </TouchableWithoutFeedback>
    )
}