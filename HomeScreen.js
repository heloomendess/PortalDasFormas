import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./assets/formasapp.png')} // Substituir com o logo real
          style={styles.logo}
        />
        <View style={styles.profileIcon}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40/ccccff' }} // Substituir pelo ícone do perfil
            style={styles.icon}
          />
        </View>
      </View>

      {/* Bem-vindo */}
      <Text style={styles.welcomeText}>Bem-vindo!</Text>
      <Text style={styles.subText}>O que você deseja calcular hoje?</Text>

      {/* Botões */}
      {['Esferas', 'Triângulo', 'Cubo', 'Romboedro', 'Retângulo', 'Trapézio'].map((item, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    paddingTop: 30,
    width: 40,
    height: 40,
  },
  profileIcon: {
    backgroundColor: '#D0E4FF',
    borderRadius: 20,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E2A4A',
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: '#6E7B8D',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF4F87',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
