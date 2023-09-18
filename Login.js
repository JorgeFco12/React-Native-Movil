import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const botonGuardar = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Por favor, llena todos los campos');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Login</Text>
      <Image
        source={require('./icon3.jpg')} 
        style={styles.headerImage}
      />

      <Text style={styles.label}>Usuario</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Image
          source={require('./usuario.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.label}>Contraseña</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Image
          source={require('./candado.png')}
          style={styles.image}
        />
      </View>

      <Button
        title="Login"
        onPress={botonGuardar}
        disabled={!username || !password}
      />

      <Text style={styles.forgotPassword}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Contraseña olvidada?</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  headerImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  forgotPassword: {
    marginTop: 20,
  },
});

export default Login;