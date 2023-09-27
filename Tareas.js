import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';

function Tareas() {
  const [tarea, setTarea] = useState('');
  const [ListaTareas, setListaTareas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedtarea, setEditedtarea] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDay, setEditedDay] = useState('');
  const [editedMonth, setEditedMonth] = useState('');
  const [editedYear, setEditedYear] = useState('');
  const [editedIndex, setEditedIndex] = useState(-1);

  const handleGuardarTarea = () => {
    if (tarea.trim() !== '') {
      setListaTareas([...ListaTareas, { text: tarea, checked: false, description: '', date: '' }]);
      setTarea('');
    }
  };

  const handleToggleCheckBox = (index) => {
    const updatedListaTareas = [...ListaTareas];
    updatedListaTareas.splice(index, 1);
    setListaTareas(updatedListaTareas);
  };

  const handleEditarTarea = (index) => {
    setEditedIndex(index);
    setEditedtarea(ListaTareas[index].text);
    setEditedDescription(ListaTareas[index].description);

    const dateParts = ListaTareas[index].date.split('-');
    setEditedDay(dateParts[2]);
    setEditedMonth(dateParts[1]);
    setEditedYear(dateParts[0]);

    setModalVisible(true);
  };

  const handleGuardarEdicion = () => {
    if (editedIndex !== -1) {
      const updatedListaTareas = [...ListaTareas];
      updatedListaTareas[editedIndex].text = editedtarea;
      updatedListaTareas[editedIndex].description = editedDescription;
  
      if (editedDay !== undefined && editedMonth !== undefined) {
        updatedListaTareas[editedIndex].date = `${editedYear}-${editedMonth}-${editedDay}`;
      } else {
        updatedListaTareas[editedIndex].date = ''; 
      }
  
      setListaTareas(updatedListaTareas);
      setModalVisible(false);
      setEditedIndex(-1);
      setEditedtarea('');
      setEditedDescription('');
    }
  };

  const handleEliminarTarea = (index) => {
    const updatedListaTareas = [...ListaTareas];
    updatedListaTareas.splice(index, 1);
    setListaTareas(updatedListaTareas);
  };

  const handleNumericInputChange = (value, setValue, maxLength) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, maxLength);
    setValue(numericValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tareas</Text>
      <Image
        source={require('./icon3.jpg')}
        style={styles.headerImage}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu tarea"
          value={tarea}
          onChangeText={(text) => setTarea(text)}
        />
        <Button
          title="Guardar"
          onPress={handleGuardarTarea}
          disabled={!tarea}
        />
      </View>

      <Text style={styles.label}>Lista de Tareas:</Text>
      <FlatList
        data={ListaTareas}
        renderItem={({ item, index }) => (
          <View style={styles.tareaContainer}>
            <View style={styles.tareaItemContainer}>
              <TouchableOpacity onPress={() => handleToggleCheckBox(index)}>
                <Text style={styles.checkBox}>
                  {item.checked ? '☑' : '☐'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEditarTarea(index)}>
                <Text style={styles.tareaItem}>
                  {item.text.length > 8 ? `${item.text.substring(0, 8)}...` : item.text}
                </Text>
                <Text style={styles.tareaDescription}>
                  {item.description.length > 8 ? `${item.description.substring(0, 8)}...` : item.description}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tareaInfoContainer}>
              {item.date !== '' && (
                <Text style={styles.tareaDate}>{item.date}</Text>
              )}
            </View>
            <TouchableOpacity onPress={() => handleEliminarTarea(index)}>
              <Image
                source={require('./eliminar.png')}
                style={styles.eliminarIcon}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalSection}>
              <Text style={styles.label}>Tarea:</Text>
              <TextInput
                style={styles.input}
                placeholder="Tarea"
                value={editedtarea}
                onChangeText={(text) => setEditedtarea(text)}
              />
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.label}>Descripción:</Text>
              <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={editedDescription}
                onChangeText={(text) => setEditedDescription(text)}
              />
            </View>
            
            <View style={[styles.modalSection, { marginTop: 10 }]}>
              <Text style={styles.label}>Fecha:</Text>
              <View style={styles.datePickerContainer}>
                <TextInput
                  style={styles.dateInput}
                  placeholder="Día"
                  value={editedDay}
                  onChangeText={(text) => handleNumericInputChange(text, setEditedDay, 2)}
                  keyboardType="numeric"
                  maxLength={2}
                />
                <TextInput
                  style={styles.dateInput}
                  placeholder="Mes"
                  value={editedMonth}
                  onChangeText={(text) => handleNumericInputChange(text, setEditedMonth, 2)}
                  keyboardType="numeric"
                  maxLength={2}
                />
                <TextInput
                  style={styles.dateInput}
                  placeholder="Año"
                  value={editedYear}
                  onChangeText={(text) => handleNumericInputChange(text, setEditedYear, 4)}
                  keyboardType="numeric"
                  maxLength={4}
                />
              </View>
            </View>
            
            <View style={[styles.modalSection, { marginTop: 10 }]}>
              <Button title="Guardar" onPress={handleGuardarEdicion} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 150,
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
    fontSize: 20,
  },
  tareaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  tareaItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tareaItem: {
    fontSize: 18,
    marginRight: 10,
  },
  tareaInfoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  tareaDescription: {
    fontSize: 12,
    color: 'gray',
  },
  tareaDate: {
    fontSize: 14,
  },
  checkBox: {
    fontSize: 20,
    marginRight: 10,
  },
  eliminarIcon: {
    width: 24,
    height: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 500,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  datePickerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateInput: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 16,
    marginRight: 5,
    padding: 5,
  },
  modalSection: {
    marginTop: 10,
  },
});

export default Tareas;
