import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './UserContext';
import names from '../utils'; // Assuming this contains your navigation names

const users = [
  { firstName: 'Tom', lastName: 'Shelby', phoneNumber:'0712345678', email: 'rep1@ex.com', password: 'password1', role: 'reporter', icon: 'https://example.com/reporter1-icon.png' },
  { email: 'reporter2@example.com', password: 'password2', role: 'reporter', name: 'Reporter Two', icon: 'https://example.com/reporter2-icon.png' },
  { firstName: 'Chris', lastName: 'Hemsworth', phoneNumber:'0787654321', email: 'pol1@ex.com', password: 'password3', role: 'police', icon: 'https://example.com/police1-icon.png' },
  // Add more users as needed
];

const Login = ({ navigation }) => {
  const { updateUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      try {
        const userToken = 'dummy-auth-token'; // Replace with token from your backend
        await AsyncStorage.setItem('userToken', userToken);
        updateUser(user); // Set user information in context

        // Navigate based on user role
        if (user.role === 'reporter') {
          navigation.navigate(names.HOME);
        } else if (user.role === 'police') {
          navigation.navigate(names.AWAY);
        } else {
          alert('Unknown user role. Please contact support.');
        }
      } catch (error) {
        console.error('Error authenticating:', error.message);
        alert('Login failed. Please try again.');
      }
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile-user.png')} style={styles.logo} />
      <Text style={styles.text}>Log in</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <View style={styles.rememberMe}>
        <TouchableOpacity>
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate(names.REGISTRATION) }}>
          <Text style={styles.signupButton}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  rememberMe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  rememberMeText: {
    color: '#fff',
  },
  forgotPasswordText: {
    color: '#fff',
  },
  loginButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#F44336',
  },
  signupTextContainer: {
    flexDirection: 'row',
  },
  signupText: {
    color: '#000',
  },
  signupButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;
