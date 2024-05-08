import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MIcon from './CoreComponents/MIcon';
import YInput from './CoreComponents/YInput';

const CommentsCard = () => {
  return (
    <View className=" mb-2">
      <View className="flex-row justify-between p-1 ">
        <Text className="text-white text-sm font-semibold">Comments</Text>
        <MIcon name={'chevron-expand-outline'} size={20} color={'white'} />
      </View>

      <View className="flex-row p-1 ">
        <Image
          className="w-10 h-10 rounded-full mr-2"
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1666792824656875522/YgPO2b-j_400x400.jpg',
          }}
        />
        <YInput />
      </View>
    </View>
  );
};

export default CommentsCard;
