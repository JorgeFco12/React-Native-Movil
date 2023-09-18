import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const expresionEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validacionCorreo = (inputValue) => {
    setEmail(inputValue);

    if (!expresionEmail.test(inputValue)) {
      setError('El correo electrónico no es válido');
    } else {
      setError('');
    }
  };

  const botonGuardar = () => {
    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      alert('Registro exitoso');
    } else {
      alert('Por favor, llena todos los campos.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>SignUp</Text>
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

      <Text style={styles.label}>Correo Electrónico</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error && styles.invalidInput]}
          placeholder="Type your email"
          value={email}
          onChangeText={validacionCorreo}
        />
        <Image
          source={require('./email.jpg')} 
          style={styles.image}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}

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
        title="SignUp"
        onPress={botonGuardar}
        disabled={!username || !email || !password || error}
      />

      <Text style={styles.orText}>or</Text>
      <Text style={styles.loginText}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Login</Text>
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
    marginBottom: 50,
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
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
  orText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUp;
