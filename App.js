/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.sectionContainer}>
        <Text>Code Push</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default codePush(App);
