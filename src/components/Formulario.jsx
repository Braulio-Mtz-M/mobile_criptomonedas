/*
  Instalar @react-native-community/picker

  View padre
  Text Moneda style label
  Picker
  Picker.Item:
    - Seleccione
    - Dolar USD
    - Peso Mexicano MXN
    - Euro EUR
    - Libra Esterlina GBP

  Text Criptomoneda style label
  Picker
  Picker.Item:
    - Seleccione

  Touchable Cotizar style btnCotizar
  Funcionalidad: Al dar clic al btn mostrar un Text
  que diga "Formulario creado"
*/

import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Formulario() {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const cotizar = () => {
    setMostrarMensaje(true);
  };

  return (
    <View style={styles.formulario}>
      <Text style={styles.label}>Moneda</Text>

      <View style={styles.select}>
        <Picker
          selectedValue={moneda}
          onValueChange={(valor) => setMoneda(valor)}
        >
          <Picker.Item label="Seleccione" value="" />
          <Picker.Item label="Dólar USD" value="USD" />
          <Picker.Item label="Peso Mexicano MXN" value="MXN" />
          <Picker.Item label="Euro EUR" value="EUR" />
          <Picker.Item label="Libra Esterlina GBP" value="GBP" />
        </Picker>
      </View>

      <Text style={styles.label}>Criptomoneda</Text>

      <View style={styles.select}>
        <Picker
          selectedValue={criptomoneda}
          onValueChange={(valor) => setCriptomoneda(valor)}
        >
          <Picker.Item label="Seleccione" value="" />
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.btnCotizar}
        onPress={cotizar}
      >
        <Text style={styles.textoBoton}>COTIZAR</Text>
      </TouchableOpacity>

      {mostrarMensaje && (
        <Text style={styles.mensaje}>
          Formulario creado
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 15,
    gap: 20,
  },

  label: {
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#1F2937',
    letterSpacing: 0.5,
  },

  select: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  btnCotizar: {
    backgroundColor: '#5E49E2',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#5E49E2',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 18,
    letterSpacing: 1,
  },

  mensaje: {
    marginTop: 10,
    color: '#5E49E2',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});