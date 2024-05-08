//import liraries
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import TrendsHeader from '../components/TrendsComponents/TrendsHeader';
import ChangeCard from '../components/TrendsComponents/ChangeCard';
import TrendingHeader from '../components/TrendsComponents/TrendingHeader';
import HomeCard from '../components/HomeCard';
import {
  defaultVideo,
  defaultVideo1,
  defaultVideo2,
  defaultVideo3,
} from '../utils/defaultVideo';
import CommentsCard from '../components/CommentCard';
import StatusIconCard from '../components/StatusCard/StatusIconCard';
import StatusCard from '../components/StatusCard/StatusCard';
StatusIconCard;

// create a component
const TrendingScreen = () => {
  const [changer, setChanger] = useState(0);
  return (
    <ScrollView className="bg-neutral-900 h-screen">
      <TrendsHeader />
      <View className=" w-100 flex-row justify-between border-b border-slate-800">
        <ChangeCard
          label={'Now'}
          currentindex={changer}
          staticindex={0}
          onPress={() => setChanger(0)}
        />

        <ChangeCard
          label={'Music'}
          currentindex={changer}
          staticindex={1}
          onPress={() => setChanger(1)}
        />

        <ChangeCard
          label={'Game'}
          currentindex={changer}
          staticindex={2}
          onPress={() => setChanger(2)}
        />

        <ChangeCard
          label={'Movie'}
          currentindex={changer}
          staticindex={3}
          onPress={() => setChanger(3)}
        />
      </View>
      {changer === 0 ? (
        <Text>
          <TrendingHeader head={'Trending Videos'} />{' '}
          <HomeCard videoInfo={defaultVideo} />
        </Text>
      ) : changer === 1 ? (
        <Text>
          <TrendingHeader head={'Trending Music'} />{' '}
          <HomeCard videoInfo={defaultVideo1} />
        </Text>
      ) : changer === 2 ? (
        <Text>
          <TrendingHeader head={'Trending Games'} />{' '}
          <HomeCard videoInfo={defaultVideo2} />
        </Text>
      ) : changer === 3 ? (
        <Text>
          <TrendingHeader head={'Trending Movies'} />{' '}
          <HomeCard videoInfo={defaultVideo3} />
        </Text>
      ) : (
        'null'
      )}
      <StatusIconCard />
      <CommentsCard />
      <StatusCard />
    </ScrollView>
  );
};

export default TrendingScreen;
