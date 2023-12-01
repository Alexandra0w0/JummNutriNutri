import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Ejercicio = () => {
  const [hoursOfExercise, setHoursOfExercise] = useState(1); // Valor inicial simulado
  const [userHours, setUserHours] = useState('');

  const saveHours = () => {
    if (userHours !== '') {
      setHoursOfExercise(parseFloat(userHours));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="dumbbell" size={40} color="#333" />
        <Text style={styles.headerText}>Hoy has ejercitado</Text>
        <Text style={styles.hoursExercise}>{hoursOfExercise} horas</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Ingresa las horas de ejercicio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 1.5"
          keyboardType="numeric"
          value={userHours}
          onChangeText={(text) => setUserHours(text)}
        />
        <TouchableOpacity style={styles.saveButton} onPress={saveHours}>
          <Text style={styles.saveText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
  },
  headerText: {
    fontSize: 20,
    marginTop: 10,
  },
  hoursExercise: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formContainer: {
    width: '80%',
    marginTop: 40,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#F2A6E5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  saveText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#688CD6',
  },
});

export default Ejercicio;
