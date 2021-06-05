import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';

/*TODO TASK 05*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonContainer: {
    marginLeft: 12,
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  customProfileHeaderContainer: {
    width: Dimensions.get('window').width,
    height: 100,
    paddingTop: 50,
    flexDirection: 'row',
  },
  customProfileHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderRadius: 12,
    marginRight: 12,
  },
  imageBorder: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  profileHeaderText: {
    marginLeft: 12,
    fontSize: 39,
    fontWeight: 'bold',
  },
  profileInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftAlignedCellContainer: {
    flex: 1,
  },
  leftAlignedCell: {
    fontSize: 18,
    marginLeft: 12,
  },
  rightAlignedCellContainer: {
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  rightAlignedCell: {
    fontSize: 18,
    textAlign: 'right',
    marginRight: 12,
  },
});

export const Participant = props => {
  const navigation = useNavigation();

  const onBackButtonPress = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Participants'}],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.customProfileHeaderContainer}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => onBackButtonPress()}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.customProfileHeader}>
          {props.route.params.name}
        </Text>
      </View>
      <ProfileImage image={props.route.params.image} />
      <ProfileInfo props={props.route.params} />
    </View>
  );
};

const ProfileImage = image => {
  console.log(image);
  return (
    <View style={styles.imageBorder}>
      <Image source={{uri: image.image}} style={styles.image} />
    </View>
  );
};

const ProfileInfo = props => {
  const {origin, gender, status, species} = props.props;

  return (
    <View>
      <View>
        <Text style={styles.profileHeaderText}>Profile</Text>
      </View>
      <View style={styles.profileInfoRow}>
        <View style={styles.leftAlignedCellContainer}>
          <Text style={styles.leftAlignedCell}>Origin</Text>
          <Text style={styles.leftAlignedCell}>{origin.name}</Text>
        </View>
        <View style={styles.rightAlignedCellContainer}>
          <Text style={styles.rightAlignedCell}>Gender</Text>
          <Text style={styles.rightAlignedCell}>{gender}</Text>
        </View>
      </View>
      <View style={styles.profileInfoRow}>
        <View style={styles.leftAlignedCellContainer}>
          <Text style={styles.leftAlignedCell}>Status</Text>
          <Text style={styles.leftAlignedCell}>{status}</Text>
        </View>
        <View style={styles.rightAlignedCellContainer}>
          <Text style={styles.rightAlignedCell}>Species</Text>
          <Text style={styles.rightAlignedCell}>{species}</Text>
        </View>
      </View>
    </View>
  );
};

export default Participant;
