import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';

const Card = props => {
  return (
    <>
      <Pressable onPress={props.onPress} style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Icon
          onPress={props.delete}
          type={'ionicon'}
          name={'md-close'}
          size={18}
          color={'#8393A7'}
          containerStyle={styles.icon}
        />
      </Pressable>
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
    backgroundColor: '#F9F6C5',
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
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 10,
    right: 10,
  },
});

export default Card;
