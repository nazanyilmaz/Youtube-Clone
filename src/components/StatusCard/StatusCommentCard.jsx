import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

const StatusCommentsCard = () => {
  return (
    <View className="bg-gray-600 p-3  m-auto rounded-lg mt-2 mb-3">
      <View className="flex-row mb-2">
        <Text>Comments</Text>
        <Text> 1</Text>
      </View>

      <View className="flex-row justfy-between  ">
        <Image
          style={{width: 30, height: 30, borderRadius: 15}}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1666792824656875522/YgPO2b-j_400x400.jpg',
          }}
        />
        <TextInput
          placeholderTextColor={'black'}
          className="bg-gray-500 w-4/5 m-auto rounded-full p-2 "
          placeholder="type your comment"
        />
      </View>
    </View>
  );
};

export default StatusCommentsCard;

const styles = StyleSheet.create({});
