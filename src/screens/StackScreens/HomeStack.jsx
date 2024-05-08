import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import VideoScreen from '../VideoScreen';

const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="VideoScreen" component={VideoScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
