import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // For icons

const LoginScreen = () => {
    const navigation = useNavigation();

    // Simple validation function to simulate button enable/disable logic
    //will fix this later after database
    const [isFormValid, setIsFormValid] = React.useState(true); // Set to true for demonstration

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image style={styles.backgroundImage} source={require('../assets/images/background.png')} resizeMode="cover" />

            {/* Lights */}
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

            {/* Title and Form */}
            <View style={styles.titleAndFormContainer}>
                {/* Title */}
                <View style={styles.titleContainer}>
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.titleText}>
                        Login
                    </Animated.Text>
                </View>
            </View>

            {/* Form */}
            <View style={styles.formContainer}>
                <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='gray'
                        keyboardType="email-address"
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={[styles.inputContainer, styles.passwordContainer]}>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='gray'
                        secureTextEntry
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={[styles.loginButton, isFormValid ? styles.signupButtonActive : styles.signupButtonDisabled]}
                        // Disabled logic can be added based on form validation
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconButton}>
                        <FontAwesome name="google" size={32} color="#DB4437" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <FontAwesome name="facebook" size={32} color="#4267B2" />
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
        backgroundColor: '#F0F8FF',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#87CEEB',
    },
    input: {
        fontSize: 16,
    },
    passwordContainer: {
        marginBottom: 12,
    },
    buttonContainer: {
        width: '100%',
    },
    loginButton: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
    },
    signupButtonActive: {
        backgroundColor: '#1E90FF',
    },
    signupButtonDisabled: {
        backgroundColor: '#87CEEB',
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
        color: '#1E90FF',
        marginLeft: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    iconButton: {
        marginHorizontal: 10,
    },
});

export default LoginScreen;
