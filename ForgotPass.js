import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

function ForgotPass() {
  const [email, setEmail] = useState('');
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
  const sendPasswordResetEmail = () => {
    if (error) {
      alert('Por favor, ingresa una dirección de correo electrónico válida');
    } else if (email.trim() !== '') {
      alert('Se ha enviado un correo para restablecer su contraseña');
    } else {
      alert('Por favor, ingresa tu correo electrónico');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>ForgotPass</Text>
      <Image
        source={require('./icon3.jpg')} 
        style={styles.headerImage}
      />

      <Text style={styles.label}>Correo Electrónico</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your email"
          value={email}
          onChangeText={(text) => validacionCorreo(text)} 
        />
        <Image
          source={require('./email.jpg')}
          style={styles.image}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <Button
        title="Send"
        onPress={sendPasswordResetEmail}
        disabled={!email || error} // Deshabilita el botón si no hay correo o hay un error
      />

      <Text style={styles.loginText}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Login?</Text>
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginText: {
    marginTop: 20,
    fontSize: 15,
  },
});

export default ForgotPass;
