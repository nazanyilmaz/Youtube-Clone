//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import SubscriptionHeader from '../components/SubscriptionComponents/SubscripHeader';
import SubscriptionChannelsAvatar from '../components/SubscriptionComponents/SubscripChannelAvatar';
import SubsFilterButton from '../components/SubscriptionComponents/SubFilterButton';
import HomeCard from '../components/HomeCard';
import StatusCard from '../components/StatusCard/StatusCard';
import {defaultVideo, defaultVideo2} from '../utils/defaultVideo';

// create a component
const SubscriptionsScreen = () => {
  const [filterIndex, setFilterIndex] = useState(0);
  return (
    <ScrollView className=" bg-neutral-900 h-screen">
      <SubscriptionHeader />
      <View className="flex-row w-100 justify-between">
        <View className="w-4/5">
          <ScrollView horizontal={true} className="max-h-20">
            <SubscriptionChannelsAvatar
              badge={true}
              channelName={'Udemig'}
              channelAvatar={
                'https://media.licdn.com/dms/image/C4E0BAQGFZ0iabF3taA/company-logo_200_200/0/1654131810800?e=2147483647&v=beta&t=rXAmfJwszh9FgApAIptNCJ44UiRljMoiYS8e48blJII'
              }
            />
            <SubscriptionChannelsAvatar
              badge={true}
              channelName={'React Native'}
              channelAvatar={
                'https://eduramp.in/wp-content/uploads/2023/12/react-native.jpg'
              }
            />
            <SubscriptionChannelsAvatar
              channelName={'Mehmet Can Seyhan'}
              channelAvatar={
                'https://yt3.ggpht.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj-mo'
              }
            />
            <SubscriptionChannelsAvatar
              channelName={'NZN Coder'}
              channelAvatar={
                'https://media.licdn.com/dms/image/D4E03AQELJcSbF2Diiw/profile-displayphoto-shrink_800_800/0/1712683734870?e=1720656000&v=beta&t=Ou2B-5fQb2nVHHASbONz3D4_YKa8dXIwlKH1zA_wlew'
              }
            />
          </ScrollView>
        </View>
        <View
          className="w-1/5"
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text className="text-blue-700 text-md font-bold">All</Text>
        </View>
      </View>

      <ScrollView horizontal={true} className="p-2">
        <SubsFilterButton
          label={'All'}
          index={{currentIndex: filterIndex, statcikIndex: 0}}
          onPress={() => setFilterIndex(0)}
        />
        <SubsFilterButton
          label={'Today'}
          index={{currentIndex: filterIndex, statcikIndex: 1}}
          onPress={() => setFilterIndex(1)}
        />
        <SubsFilterButton
          label={'Live'}
          index={{currentIndex: filterIndex, statcikIndex: 2}}
          onPress={() => setFilterIndex(2)}
        />
        <SubsFilterButton
          label={'Watch'}
          index={{currentIndex: filterIndex, statcikIndex: 3}}
          onPress={() => setFilterIndex(3)}
        />
        <SubsFilterButton
          label={'Videos'}
          index={{currentIndex: filterIndex, statcikIndex: 4}}
          onPress={() => setFilterIndex(4)}
        />
        <SubsFilterButton
          label={'Popular'}
          index={{currentIndex: filterIndex, statcikIndex: 5}}
          onPress={() => setFilterIndex(5)}
        />
        <SubsFilterButton
          label={'Shorts'}
          index={{currentIndex: filterIndex, statcikIndex: 6}}
          onPress={() => setFilterIndex(6)}
        />
      </ScrollView>
      <HomeCard videoInfo={defaultVideo2} />
      <StatusCard />
    </ScrollView>
  );
};

export default SubscriptionsScreen;
