import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image style={styles.backgroundImage} source={require('../assets/images/background.png')} resizeMode="cover" />

            {/* lights */}
            <View style={styles.lightsContainer}>
                <Animated.Image
                    entering={FadeInUp.delay(200).duration(1000).springify()}
                    style={styles.light1}
                    source={require('../assets/images/light.png')}
                />
                <Animated.Image
                    entering={FadeInUp.delay(400).duration(1000).springify()}
                    style={styles.light2}
                    source={require('../assets/images/light.png')}
                />
            </View>

            {/* title and form */}
            <View style={styles.titleAndFormContainer}>
                {/* title */}
                <View style={styles.titleContainer}>
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.titleText}>
                        Sign Up
                    </Animated.Text>
                </View>
            </View>

            {/* form */}
            <View style={styles.formContainer}>
            <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.inputContainer}>
                    <TextInput placeholder='Username' placeholderTextColor='gray' />
                </Animated.View>

                <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.inputContainer}>
                    <TextInput placeholder='Email' placeholderTextColor='gray' />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={[styles.inputContainer, styles.passwordContainer]}>
                    <TextInput placeholder='Password' placeholderTextColor='gray' secureTextEntry />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.push('Login')}>
                        <Text style={styles.signUpText}>Login</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    lightsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
    },
    light1: {
        height: 225,
        width: 90,
    },
    light2: {
        height: 160,
        width: 65,
    },
    titleAndFormContainer: {
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: 40,
        paddingBottom: 10,
    },
    titleContainer: {
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 40,
    },
    formContainer: {
        alignItems: 'center',
        marginHorizontal: 16,
    },
    inputContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: 15,
        borderRadius: 20,
        width: '100%',
    },
    passwordContainer: {
        marginBottom: 12,
    },
    buttonContainer: {
        width: '100%',
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#87CEEB',
        padding: 12,
        borderRadius: 20,
        marginBottom: 12,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    forgotPasswordContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    forgotPasswordText: {
        color: 'gray',
    },
    signUpText: {
        color: '#00bcd4',
    },
});

export default SignupScreen;
