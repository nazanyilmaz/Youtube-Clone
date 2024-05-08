import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MIcon from '../CoreComponents/MIcon';
import PressebleIcon from '../CoreComponents/PressebleIcon';

const TrendsHeader = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between p-3  bg-neutral-900 text-white">
      <View className="flex-row items-center justify-center gap-3">
        <PressebleIcon
          onPress={() => navigation.navigate('HomeScreen')}
          name={'arrow-back-outline'}
          size={24}
          color={'white'}
        />
        <Text className="font-semibold text-lg text-white ">Trends</Text>
      </View>

      <View className="flex-row items-center justify-center gap-5">
        <MIcon name={'bar-chart-outline'} size={25} color={'white'} />
        <MIcon name={'search-outline'} size={25} color={'white'} />
        <MIcon name={'ellipsis-vertical'} size={25} color={'white'} />
      </View>
    </View>
  );
};

export default TrendsHeader;
