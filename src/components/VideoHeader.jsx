import {Animated, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import IconBox from './CoreComponents/IconBox';
import PressebleIcon from './CoreComponents/PressebleIcon';

const VideoHeader = ({header}) => {
  const [headHeight, setHeadHeight] = useState(null);

  //console.log('header', header.longHeader);

  const heightAnimation = useRef(new Animated.Value(0)).current;

  const handleToggleHeadHeight = () => {
    if (headHeight === null) {
      // Yavaşça yüksekliği artırma animasyonu
      Animated.timing(heightAnimation, {
        toValue: 1,
        duration: 500, // Animasyonun süresi (ms)
        useNativeDriver: false, // Native sürücü kullanımı (true'dan false'a)
      }).start();
      setHeadHeight('h-20');
    } else {
      // Yavaşça yüksekliği azaltma animasyonu
      Animated.timing(heightAnimation, {
        toValue: 0,
        duration: 500, // Animasyonun süresi (ms)
        useNativeDriver: false, // Native sürücü kullanımı (true'dan false'a)
      }).start();
      setHeadHeight(null);
    }
  };

  const interpolatedHeight = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['32%', '50%'], // Değer aralıklarına göre yükseklik değerleri
  });
  return (
    <View className="bg-stone-900 p-4">
      {/*Video Başlık info*/}

      <View className="">
        <View style={{height: interpolatedHeight}}>
          <View
            className={`flex-row justify-between px-2 gap-3 ${headHeight} `}>
            <Text className="text-white text-lg font-semibold">
              {headHeight ? header.longHeader : header.shortHeader + '...'}
            </Text>

            {headHeight ? (
              <PressebleIcon
                onPress={() => setHeadHeight(null)}
                name={'chevron-up-outline'}
                color={'white'}
                size={25}
              />
            ) : (
              <PressebleIcon
                onPress={() => setHeadHeight('h-20')}
                name={'chevron-down-outline'}
                color={'white'}
                size={25}
              />
            )}
          </View>
        </View>
        <View>
          <Text className="text-stone-500 mt-2 ml-3">10m görüntüleme</Text>
        </View>
      </View>

      <View>
        <View className="flex-row justify-between px-1">
          <IconBox name={'thumbs-up'} value={1} />
          <IconBox name={'thumbs-down'} value={'Dislike'} />
          <IconBox name={'share'} value={'Share'} />
          <IconBox name={'download'} value={'Dowland'} />
          <IconBox name={'bookmark'} value={'Save'} />
        </View>
      </View>
    </View>
  );
};

export default VideoHeader;
