import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MIcon from './CoreComponents/MIcon';
import StatusIconCard from './StatusCard/StatusIconCard';

const HomeCard = ({onPress, videoInfo}) => {
  //console.log(videoInfo);
  //videoInfo icindeki tarihi duzenleme
  // const publishDate = videoInfo?.snippet?.publishedAt.split('');
  // const videoTitle = videoInfo?.snippet?.title?.split('').slice(0, 40).join('');

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="p-1 justify-center items-center relative ">
        <Image
          className="w-screen h-72"
          source={{
            uri: videoInfo?.videoThumbnail,
          }}
        />
        <View className="rounded bg-slate-800 opacity-90 absolute right-0 bottom-5">
          <Text className="  text-white p-1 ">{videoInfo?.videoDuration}</Text>
        </View>
      </View>

      <View className="flex-row justify-between p-2 items-center">
        <View className="gap-2 flex-row items-center">
          <Image
            className=" rounded-full w-10 h-10"
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1666792824656875522/YgPO2b-j_400x400.jpg',
            }}
          />
          <View>
            <Text className="text-white text-md font-semibold">
              {videoInfo?.videoTitle}
            </Text>
            <View className="flex-row gap-2 ">
              <Text className="text-gray-400">{videoInfo?.channelTitle}</Text>
              <Text className="text-gray-400">{videoInfo?.videoViews}</Text>
              <Text className="text-gray-400">
                {videoInfo?.videoPublishedDate}
              </Text>
            </View>
          </View>
        </View>
        <MIcon
          name={'ellipsis-vertical'}
          size={20}
          color={'rgb(120 113 108)'}
        />
      </View>
      <StatusIconCard />
    </TouchableOpacity>
  );
};

export default HomeCard;
