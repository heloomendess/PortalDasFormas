import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Button, Image, ImageBackground} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab=createBottonTabNavigator(); 
const Stack = createNativeStackNavigator();


function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#022545', // cor de fundo da tab bar
          borderColor: 'transparent',
        },
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CustomIcons icon="home" size={size} color={color} />
          ),
          headerShown: false, // Ocultar a barra superior nesta tela específica
        }}
      />
      <Tab.Screen
        name="Reserva"
        component={Reserva}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CustomIcons icon="reservas" size={size} color={color} />
          ),
          headerShown: false, // Ocultar a barra superior nesta tela específica
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CustomIcons icon="perfil" size={size} color={color} />
          ),
          headerShown: false, // Ocultar a barra superior nesta tela específica
        }}
      />
    </Tab.Navigator>
  );
}