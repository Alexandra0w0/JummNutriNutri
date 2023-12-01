import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const AlimentosScreen = () => {
  const [planName, setPlanName] = useState('');
  const [calories, setCalories] = useState('');

  const mealData = [
    { name: 'Colación 1', icon: 'apple-alt' },
    { name: 'Desayuno', icon: 'coffee' },
    { name: 'Colación 2', icon: 'carrot' },
    { name: 'Comida', icon: 'utensils' },
    { name: 'Colación 3', icon: 'cookie' },
    { name: 'Cena', icon: 'utensil-spoon' },
  ];

  const saveData = () => {
    const data = {
      planName,
      calories,
    };
    console.log('Datos guardados:', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agrega tu plan alimenticio</Text>
      <FontAwesome5 name="cheese" size={50} color="#688CD6" style={styles.icon} />

      <TextInput
        style={styles.input}
        placeholder="Nombre del plan alimenticio"
        value={planName}
        onChangeText={(text) => setPlanName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Calorías"
        keyboardType="numeric"
        value={calories}
        onChangeText={(text) => setCalories(text)}
      />

      <View style={styles.mealContainer}>
        {mealData.map((meal, index) => (
          <TouchableOpacity key={index} style={styles.mealButton}>
            <FontAwesome5 name={meal.icon} size={24} color="#688CD6" style={styles.icon} />
            <Text>{meal.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={saveData}>
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  mealContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  mealButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '48%', // For two items in a row
  },
  saveButton: {
    backgroundColor: '#688CD6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  saveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default AlimentosScreen;

