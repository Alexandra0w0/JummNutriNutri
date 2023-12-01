import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';

const LoginUsuario = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/JummNutri.png')} // Ruta de la imagen (puede variar)
        style={styles.logo}
        resizeMode="contain" // Ajusta la imagen al tamaño del contenedor
      />
      <Text style={styles.title}>¡Bienvenido a jummNutri!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => loginUser(email, password)} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.signupLink}>
        <Text style={styles.signupText}>¿No tienes cuenta? ¡Regístrate ahora!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  logo: {
    marginTop:-120,
    width: 120,
    height: 120,
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 40,
    color: '#688CD6', // Cambiar a tu color de texto preferido

  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: '#FDC9F4',
    color: '#688CD6', // Cambiar a tu color de texto preferido

    borderRadius: 10,
    marginBottom: 20,
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
    color: '#688CD6', // Cambiar a tu color de texto preferido

    
    
  },
  signupLink: {
    marginTop: 40,
  },
  signupText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#688CD6', // Cambiar a tu color de texto preferido
  },
});

export default LoginUsuario;

