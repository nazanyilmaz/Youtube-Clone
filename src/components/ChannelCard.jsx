import {View, Text, Image} from 'react-native';
import React from 'react';
import MIcon from './CoreComponents/MIcon';
import YButton from './CoreComponents/YButton';

const ChannelCard = ({channelTitle}) => {
  return (
    <View className=" flex-row justify-between items-center p-3 border-t border-stone-700 border-b">
      <View className="gap-2 flex-row items-center">
        <Image
          className="rounded-full w-10 h-10"
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1666792824656875522/YgPO2b-j_400x400.jpg',
          }}
        />

        <View>
          <Text className="font-bold text-white text-lg">{channelTitle}</Text>
          <View className="flex-row gap-2">
            <Text className="text-stone-500">5m </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center  justify-center gap-2">
        <YButton style={{marginLeft: 5}} title={'Subscribe'} />
        <MIcon color={'rgb(120 113 108)'} name={'notifications'} size={24} />
      </View>
    </View>
  );
};

export default ChannelCard;
