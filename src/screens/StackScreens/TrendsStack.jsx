import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import TrendingScreen from '../TrendingScreen';

const TrendsStack = () => {
  const TrendStack = createNativeStackNavigator();
  return (
    <TrendStack.Navigator screenOptions={{headerShown: false}}>
      <TrendStack.Screen name="TrendsScreen" component={TrendingScreen} />
      <TrendStack.Screen name="HomeStackScreen" component={HomeStack} />
    </TrendStack.Navigator>
  );
};

export default TrendsStack;
