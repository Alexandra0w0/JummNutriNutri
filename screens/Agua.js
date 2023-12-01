import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Agua = () => {
  const [cupsOfWater, setCupsOfWater] = useState(0);
  const [animation] = useState(new Animated.Value(0));

  const incrementWater = () => {
    if (cupsOfWater < 8) {
      setCupsOfWater(cupsOfWater + 1);
      animateWaterFill();
    }
  };

  const decrementWater = () => {
    if (cupsOfWater > 0) {
      setCupsOfWater(cupsOfWater - 1);
      animateWaterFill();
    }
  };

  const animateWaterFill = () => {
    Animated.timing(animation, {
      toValue: cupsOfWater,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const cupStyles = Array.from({ length: 8 }, (_, index) => {
    const heightInterpolation = animation.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 50, 100],
      extrapolate: 'clamp',
    });

    return {
      height: heightInterpolation,
      backgroundColor: index < cupsOfWater ? '#4CAF50' : '#DDD',
      borderRadius: 5,
      margin: 2,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agrega las tazas de agua que has consumido</Text>
      <FontAwesome5 name="glass-whiskey" size={50} color="#688CD6" style={styles.icon} />

      <View style={styles.waterContainer}>
        {cupStyles.map((style, index) => (
          <Animated.View key={index} style={[styles.cup, style]} />
        ))}
      </View>

      <Text style={styles.tip}>Recuerda consumir dos litros de agua</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={decrementWater}>
          <FontAwesome5 name="minus" size={20} color="#FFF" />
        </TouchableOpacity>

        <Text style={styles.text}>{cupsOfWater} vasos</Text>

        <TouchableOpacity style={styles.button} onPress={incrementWater}>
          <FontAwesome5 name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  icon: {
    marginBottom: 20,
  },
  waterContainer: {
    flexDirection: 'row',
  },
  cup: {
    width: 50,
    backgroundColor: '#DDD',
    borderRadius: 5,
    margin: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#688CD6',
    borderRadius: 15,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  tip: {
    marginTop: 10,
    fontSize: 12,
    color: '#888',
  },
});

export default Agua;
