import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    marginHorizontal: 15,
    marginVertical: 6,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 5,
    overflow: 'hidden',
  },
  title: {
    marginHorizontal: 10,
    fontSize: 22,
  },
  description: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default Card;
