import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Simple Picker for dropdown
import { FontAwesome } from '@expo/vector-icons'; // Icons for authentication
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'; // Reanimated for animation

const SignupScreen = () => {
    const [selectedRole, setSelectedRole] = useState(''); // Dropdown state
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const navigation = useNavigation();

    // Simple validation function
    //more conditions will be added when done with database
    const validateForm = () => {
        if (username && email.includes('@') && password.length >= 6 && selectedRole) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleSignup = () => {
        if (isFormValid) {
            Alert.alert('Success', 'Account created successfully!');
        } else {
            Alert.alert('Error', 'Please fill in all fields correctly.');
        }
    };

    return (
        <View style={styles.container}>
            <Animated.Text style={styles.title} entering={FadeInUp.duration(1000)}>
                Sign Up
            </Animated.Text>

            <Animated.View entering={FadeInDown.duration(1000).delay(200)} style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="gray"
                    value={username}
                    onChangeText={(text) => {
                        setUsername(text);
                        validateForm();
                    }}
                />
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(1000).delay(400)} style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="gray"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        validateForm();
                    }}
                    keyboardType="email-address"
                />
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(1000).delay(600)} style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        validateForm();
                    }}
                    secureTextEntry
                />
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(1000).delay(800)} style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedRole}
                    onValueChange={(itemValue) => {
                        setSelectedRole(itemValue);
                        validateForm();
                    }}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Role" value="" />
                    <Picker.Item label="Employer" value="employer" />
                    <Picker.Item label="Employee" value="employee" />
                </Picker>
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(1000).delay(1000)} style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.signupButton, isFormValid ? styles.signupButtonActive : styles.signupButtonDisabled]}
                    onPress={handleSignup}
                    disabled={!isFormValid}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(1000).delay(1200)} style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <FontAwesome name="google" size={32} color="#DB4437" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <FontAwesome name="facebook" size={32} color="#4267B2" />
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(1000).delay(1400)} style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.push('Login')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1E90FF',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#F0F8FF',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#87CEEB',
    },
    pickerContainer: {
        backgroundColor: '#F0F8FF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#87CEEB',
        marginBottom: 15,
    },
    picker: {
        width: '100%',
        height: 50,
    },
    buttonContainer: {
        marginBottom: 15,
    },
    signupButton: {
        padding: 15,
        borderRadius: 10,
    },
    signupButtonActive: {
        backgroundColor: '#1E90FF',
    },
    signupButtonDisabled: {
        backgroundColor: '#87CEEB',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    iconButton: {
        marginHorizontal: 10,
    },
    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    forgotPasswordText: {
        color: 'gray',
    },
    loginText: {
        color: '#1E90FF',
        marginLeft: 5,
    },
});

export default SignupScreen;
