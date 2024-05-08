//import liraries
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import {useNavigation} from '@react-navigation/native';
import {VideoContext} from '../context/VideoStore';
import VideosController from '../controller/VideosController';
import StatusIconCard from '../components/StatusCard/StatusIconCard';

// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
  const {vvideos, setVvideos} = useContext(VideoContext);

  useEffect(() => {
    fetchVideo();
  }, []);
  const fetchVideo = async () => {
    try {
      const fetchedVideo = await VideosController.getVideos();
      setVvideos(fetchedVideo);
    } catch (error) {
      console.log(error, 'ww');
    }
  };
  console.log(vvideos[0]);
  return (
    <View className="flex-1 bg-neutral-900">
      <Header />
      <View className=" flex-1 px-5 flex">
        <FlatList
          data={vvideos}
          renderItem={({item}) => {
            //console.log(item);
            return (
              <HomeCard
                videoInfo={item}
                onPress={() =>
                  navigation.navigate('VideoScreen', {video: item})
                }
              />
            );
          }}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default HomeScreen;
