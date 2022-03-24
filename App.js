import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Text style={{color: 'black', padding: 15}}>Hello World!</Text>
        </View>
        <View style={styles.list}>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
