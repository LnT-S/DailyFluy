import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import Buttons from './Button';

const ColorPickerModal = ({ visible, onClose, onColorChange, defaultColor }) => {

  const [prevColor, setPrevColor] = useState(defaultColor)

  const handleColorChange = (newColor) => {
    onColorChange(newColor);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5, zIndex: 500, backgroundColor: 'transparent', borderRadius: 0, marginRight: 5 }} onPress={onClose}>
          <Text style={{ fontSize: 26, color: 'red', fontWeight: '900', padding: 0, margin: 0 }}>X</Text>
        </TouchableOpacity>
        <ColorPicker
          color={defaultColor}
          sliderHidden={true}
          noSnap={false}
          swatches={false}
          gapSize={0}
          autoResetSlider={true}
          onColorChange={(v) => handleColorChange(v)}
          style={{ flex: 1, marginTop: 25 }}
          thumbSize={20}
        // thumbStyle={{ height: 100, width: 100, borderRadius: 15 }}
        />
        <View style={{ marginVertical: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
          <TouchableOpacity style={{
            zIndex: 500, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 5, borderColor: 'red', borderWidth: 1
          }} onPress={() => handleColorChange(prevColor)}>
            <Text style={{ fontSize: 20, color: 'red', fontWeight: '900' }}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ zIndex: 500, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 5 }} onPress={onClose}>
            <Text style={{ fontSize: 20, color: 'red', fontWeight: '900' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'relative',
    top: 180,
    left: 55,
    // margin: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 15,
    // borderColor: 'red',
    // borderWidth: 1,
    boxShadow: `rgba(50, 50, 93, 0.25) ${0} 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`
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
