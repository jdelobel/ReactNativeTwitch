import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getState } from 'redux';
import axios from 'axios';
import Loader from '../presentationals/Loader';
import StreamsError from '../presentationals/StreamsError';
import StreamCard from '../presentationals/StreamCard';
import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';

//Provider/Container React Component
class Streams extends Component {

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.apiRequest();
    this.dispatchFetchRequest();
  }

  async apiRequest() {
    try {
      const response = await axios.get('https://api.twitch.tv/kraken/streams/featured?&client_id=')
      const streams = response.data.featured.map(feat => feat.stream);
      this.dispatchFetchSuccess(streams);
    }
    catch (error) {
      alert(error)
      this.dispatchFetchFailure(error);
    }
  }

  dispatchFetchRequest() {
    this.props.store.dispatch(FetchRequest());
  }

  dispatchFetchSuccess(streams) {
    this.props.store.dispatch(FetchSuccess(streams));
  }

  dispatchFetchFailure(error) {
    this.props.store.dispatch(FetchFailure(error));
  }

  renderItem = ({ item }) => (
    <StreamCard
      key={item._id}
      streamCover={item.preview.medium}
      streamLink={item.channel.url}
    />
  );
  render() {
    const stateProps = this.props.store.getState();
    const status = stateProps.status;
    const error = stateProps.error;
    return (
      <View>
        {status === "loading" ? (
          <Loader />
        ) : (
            status === "success" ? (
              <FlatList
                styles={styles.container}
                data={stateProps.streams}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index + ''}
              />
            ) : (
                status === "error" ? (
                  <StreamsError error={error}></StreamsError>

                ) : (
                    <View></View>
                  )
              )
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
export default Streams
