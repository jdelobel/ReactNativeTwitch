import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TwitchApp from './reducers/TwitchApp';

import Streams from './components/containers/Streams';


 //intialize store
 const store = createStore(TwitchApp) 

export default class App extends React.Component {
  render() {

   
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Streams store={store} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80b3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
