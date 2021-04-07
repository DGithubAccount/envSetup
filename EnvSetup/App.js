/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  const env = 'dev';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You're using</Text>
      <Text style={styles.envText}>{env}</Text>
      <Text style={styles.text}> envirment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
  },
  envText: {
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default App;
