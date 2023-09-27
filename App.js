import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignUp from './SignUp'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import ForgotPass from './ForgotPass';
import ChangePass from './ChangePass';
import Tareas from './Tareas';

export default function App() {
  return (
    <View style={styles.container}>
      <Tareas/> {}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
