import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_PARTICIPANTS} from '../../data/queries';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  participantList: {
    padding: 10,
  },
  participant: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
  },
});

export const Home = () => {
  const {data} = useQuery(GET_PARTICIPANTS);
  const navigation = useNavigation();

  const onTouchableOpacityPress = item => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Participant', params: item}],
      }),
    );
  };

  /*TODO TASK 03*/
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {!!data && !!data.characters.results && (
        <FlatList
          style={styles.participantList}
          data={data.characters.results}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            /*TODO TASK 04*/
            <TouchableOpacity
              onPress={() => onTouchableOpacityPress(item)}
              style={styles.participant}>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
