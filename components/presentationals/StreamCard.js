import React from 'react';
import { StyleSheet, Image, Linking, TouchableHighlight } from 'react-native';
//Presentational React Component
class StreamCard extends React.Component {

  render() {
    return (
      <TouchableHighlight onPress={() => Linking.openURL(this.props.streamLink)}>
        <Image style={styles.stretch}
          resizeMode='contain'
          source={{ uri: this.props.streamCover }}
        />
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 300,
    height: 300
  }
});
export default StreamCard
