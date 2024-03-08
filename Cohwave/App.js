import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Puedes reemplazar 'logo.png' con tu propio archivo de imagen en la carpeta assets */}
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Cohwave</Text>
      <Text style={styles.subtitle}>Ride the New Wave of Cohousing Living</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// Aquí mantenemos tus estilos originales y agregamos algunos nuevos para los elementos que hemos añadido
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});