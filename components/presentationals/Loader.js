import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//Presentational React Component
class Loader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chargement...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Loader

