import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootomNavigation from './src/navogations/BootomNavigation';
import {VideoProvider} from './src/context/VideoStore';

const App = () => {
  return (
    <VideoProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <BootomNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </VideoProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
