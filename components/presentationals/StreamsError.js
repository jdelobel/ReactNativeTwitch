import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//Presentational React Component
class StreamsError extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Erreur de traitement. Cause:</Text>
        <Text>{this.props.error.message}</Text>
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


export default StreamsError

