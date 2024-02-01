import {StyleSheet, View} from 'react-native';
import React from 'react';

const Separartor = () => {
  return <View style={styles.separator}></View>;
};

export default Separartor;

const styles = StyleSheet.create({
  separator: {
    height: 0.8,
    backgroundColor: '#CAD5E2',
  },
});
