import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <ImageBackground
      source={require('../assets/jm.png')} // Ruta de tu imagen de fondo
      style={styles.background}
      resizeMode="cover" // Ajusta la forma en que se muestra la imagen de fondo
    />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    // Otros estilos si es necesario
  },
});
