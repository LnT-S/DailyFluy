import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import Buttons from './Button';

const ColorPickerModal = ({ visible, onClose, onColorChange }) => {
  const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleSaveColor = () => {
    onColorChange(color);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <ColorPicker
          onColorChange={handleColorChange}
          style={{ flex: 1 }}
          thumbSize={30}
          thumbStyle={{ height: 100, width: 100, borderRadius: 15 }}
        />
        <View>
          <Buttons
            name='Save'
            onPress={handleSaveColor}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorPickerModal;
