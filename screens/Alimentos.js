import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Alimentos = () => {
  const mealData = [
    { name: 'Colación', icon: 'apple-alt' },
    { name: 'Desayuno', icon: 'coffee' },
    { name: 'Colación', icon: 'carrot' },
    { name: 'Comida', icon: 'utensils' },
    { name: 'Colación', icon: 'cookie' },
    { name: 'Cena', icon: 'fish' },
  ];

  return (
    <View style={styles.container}>
      <FontAwesome5 name="utensils" size={50} color="#688CD6" style={styles.foodIcon} />
      <Text style={styles.title}>Registra tus alimentos</Text>

      <View style={styles.mealContainer}>
        {mealData.map((meal, index) => (
          <TouchableOpacity key={index} style={styles.mealButton}>
            <FontAwesome5 name={meal.icon} size={24} color="#688CD6" style={styles.icon} />
            <Text>{meal.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  foodIcon: {
    marginBottom: 20, // Espacio entre el ícono y el título
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
    padding: 20, // Aumenta el tamaño verticalmente
    marginVertical: 10, // Espaciado entre los botones
    width: '48%', // Ancho de los botones
  },
  icon: {
    marginBottom: 10, // Ajusta el espacio entre el ícono y el texto
  },
});

export default Alimentos;
