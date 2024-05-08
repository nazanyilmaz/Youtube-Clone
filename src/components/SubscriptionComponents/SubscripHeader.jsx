import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MIcon from '../CoreComponents/MIcon';
import BadgetIcon from '../BadgetIcon';

const SubscriptionHeader = () => {
  return (
    <View className=" bg-neutral-900 p-3 flex-row justify-between items-center">
      <Image
        className="w-20 h-10"
        source={require('../../assets/images/logo3.png')}
      />

      <View className="flex-row justify-center items-center gap-5">
        <MIcon name={'bar-chart-outline'} size={25} color={'white'} />
        <View>
          <BadgetIcon
            label={9}
            iconName={'notifications-outline'}
            size={25}
            color={'white'}
          />
        </View>
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

export default SubscriptionHeader;

const styles = StyleSheet.create({});
