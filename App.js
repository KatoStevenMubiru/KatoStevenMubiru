import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import {colors} from './source/utils/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Kiki enyoo Boss</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    backgroundColor: colors.darkOrange
  },
  text: {
    color: colors.white,
  },
});
