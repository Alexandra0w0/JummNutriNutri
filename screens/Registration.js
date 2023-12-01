import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';

import { firebase } from '../config';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const registerUser = async (email, password, firstName, lastName) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'https://test-1873a.firebaseapp.com',
          })
            .then(() => {
              alert('Verification email sent');
            }).catch((error) => {
              alert(error.message);
            })
            .then(() => {
              firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                  firstName,
                  lastName,
                  email,
                });
            })
            .catch((error) => {
              alert(error.message);
            });
        })
        .catch((error) => {
          alert(error.message);
        });

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/dd.png')} // Ruta de la imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Regístrate aquí 📝</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nombre"
            onChangeText={(firstName) => setFirstName(firstName)}
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Apellidos"
            onChangeText={(lastName) => setLastName(lastName)}
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => registerUser(email, password, firstName, lastName)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 80,
    color: '#688CD6',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 50,
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: '#FDC9F4',
    borderRadius: 10,
    marginBottom: 20,
    color: '#688CD6',
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: '#F9F2C8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#688CD6',
  },
});

export default Registration;