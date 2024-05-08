//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MIcon from './CoreComponents/MIcon';

// create a component
const Header = () => {
  return (
    <View className=" bg-neutral-900 p-2 flex-row justify-between items-center">
      <Image
        source={require('../assets/images/logo3.png')}
        className="w-20 h-10"
      />

      <View className="flex-row items-center gap-3">
        <MIcon name={'videocam-outline'} size={25} color={'white'} />
        <MIcon name={'search-outline'} size={25} color={'white'} />
        <Image
          className="w-8 h-8 rounded-full"
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1666792824656875522/YgPO2b-j_400x400.jpg',
          }}
        />
      </View>
    </View>
  );
};

export default Header;
