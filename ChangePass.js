import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

function ChangePass() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetPassword = () => {
    if (currentPassword.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
      alert('Por favor, completa todos los campos');
    } else if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden');
    } else {
      alert('Contraseña cambiada con exito');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Reset Password</Text>
      <Image
        source={require('./icon3.jpg')}
        style={styles.headerImage}
      />

      <Text style={styles.label}>Contraseña Actual</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your current password"
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
          secureTextEntry
        />
        <Image
          source={require('./candado.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.label}>Nueva Contraseña</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your new password"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
        />
        <Image
          source={require('./candado.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.label}>Confirmar Contraseña</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
        <Image
          source={require('./candado.png')}
          style={styles.image}
        />
      </View>

      <Button
        title="Reset"
        onPress={resetPassword}
        disabled={!currentPassword || !newPassword || !confirmPassword}
      />
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
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default ChangePass;
