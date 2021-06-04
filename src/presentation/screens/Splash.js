import React, {useEffect} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {useQuery} from '@apollo/client';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GET_PARTICIPANTS} from '../../data/queries';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // height: ((Dimensions.get('window').width / 4) * 3) / 2, // this CSS formats the Logo in a non-squishy way
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
  },
});

export const Splash = () => {
  const {data} = useQuery(GET_PARTICIPANTS);
  const navigation = useNavigation();

  useEffect(() => {
    if (data && data.characters) {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Participants'}],
          }),
        );
      }, 2000);
    }
  }, [navigation, data]);

  /*TODO TASK 02*/
  /*TODO TASK 08*/
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/splash.png')}
      />
    </SafeAreaView>
  );
};

export default Splash;
