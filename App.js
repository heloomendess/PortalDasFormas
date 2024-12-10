import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const MENSAGEM_EMAIL = "Digite o seu e-mail.";
const MENSAGEM_SENHA = "Digite a sua senha.";
const EMAIL = "usuario@gmail.com";
const SENHA = "admin123";

function LoginScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [activity, setActivity] = useState(false);

  const validarLogin = () => {
    setActivity(true);
    setTimeout(() => {
      if (user === EMAIL && password === SENHA) {
        setStatus('Login efetuado com sucesso!');
        navigation.replace('Home'); // Navega para o HomeScreen
      } else {
        setStatus('Usuário ou senha inválidos!');
      }
      setActivity(false);
    }, 1000);
  };

  return (
    <View style={Estilos.container}>
      <ImageBackground
        source={require('./Splash.png')}
        resizeMode="cover"
        style={Estilos.appImage}
        imageStyle={{ opacity: 0.3 }}
      >
        <Image
          style={Estilos.logo}
          source={require('./assets/formasapp.png')}
        />
        <Text style={Estilos.paragraph}>O Portal das Formas</Text>
        <Text style={Estilos.loginLabel}>E-mail:</Text>
        <TextInput
          autoCorrect={false}
          placeholder={MENSAGEM_EMAIL}
          placeholderTextColor="grey"
          style={Estilos.textInput}
          clearButtonMode="always"
          onChangeText={(value) => setUser(value)}
        />
        <Text style={Estilos.loginLabel}>Senha:</Text>
        <TextInput
          autoCorrect={false}
          placeholder={MENSAGEM_SENHA}
          placeholderTextColor="grey"
          secureTextEntry={true}
          style={Estilos.textInput}
          clearButtonMode="always"
          onChangeText={(value) => setPassword(value)}
        />
        <View style={Estilos.button}>
          <Button onPress={validarLogin} title="OK" />
        </View>
        <View style={{ marginTop: 10 }}>
          <ActivityIndicator size="large" animating={activity} />
        </View>
        <Text style={Estilos.loginLabel}>{status}</Text>
      </ImageBackground>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#202020',
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    color: '#073B4C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginLabel: {
    color: '#073B4C',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    fontSize: 15,
    width: 120,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    height: 40,
    width: 250,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  appImage: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFD166',
  },
});
