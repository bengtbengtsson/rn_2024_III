import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import Counter from './src/features/counter/Counter'

import("./ReactotronConfig")

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Counter />
      <StatusBar style="auto" />
    </View>
    </Provider>
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
