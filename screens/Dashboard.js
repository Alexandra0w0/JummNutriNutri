import { Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log('User does not exist');
        }
      });
  }, []);

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.welcomeText}>Bienvenid@, {name.firstName}</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('AlimentosScreen')}>
          <FontAwesome5 name="apple-alt" size={24} color="#F9DC7F" />
          <Text style={styles.menuText}>Ingresa tu plan alimenticio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Alimentos')}>
          <FontAwesome5 name="utensils" size={24} color="#F9DC7F" />
          <Text style={styles.menuText}>Ingresa tus alimentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('suenio')}>
          <FontAwesome5 name="bed" size={24} color="#F9DC7F" />
          <Text style={styles.menuText}>Ingresa tus horas de sueño</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Ejercicio')}>
          <FontAwesome5 name="dumbbell" size={24} color="#F9DC7F" />
          <Text style={styles.menuText}>Ingresa horas de ejercicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Agua')}>
          <FontAwesome5 name="tint" size={26} color="#F9DC7F" />
          <Text style={styles.menuText}>Ingresa agua consumida</Text>
        </TouchableOpacity>

        {/* Otros elementos del menú */}

        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#688CD6',
    marginBottom: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 20,
    color: '#688CD6',
  },
  button: {
    alignSelf: 'center',
    marginTop: 135,
    height: 60,
    width: 150,
    backgroundColor: '#F2A6E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#688CD6',
  },
});

export default Dashboard;

