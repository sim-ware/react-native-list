import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

/*TODO TASK 05*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Participant = props => {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(props.route.params)}</Text>
    </View>
  );
};

export default Participant;
