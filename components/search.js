import React, { Component } from 'react';
import ImageView from './imageView';
import VideoList from './video_list';

import {
    StyleSheet,
    View,
    NavigatorIOS,
    Text,
    Image,
    StatusBar,
  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Search = (props) => {

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <NavigatorIOS
        style={styles.container}
        translucent={false}
        barTintColor='#c4302b'
        titleTextColor='white'
        tintColor='white'
        initialRoute={{
          title: 'Search some videos',
          component: VideoList,
        }}
      />
    </View>
  );
};


module.exports = Search;
