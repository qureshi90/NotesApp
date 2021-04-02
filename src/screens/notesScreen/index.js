import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';
import Header from '../../components/header.js';
import Card from '../../components/card.js';
import {dummyData} from '../../constants/dummyData.js';
import {Icon} from 'react-native-elements';

const Notes = () => {
  return (
    <>
      <View style={styles.container}>
        <Header text={'Notes'} />
        {dummyData.map(data => (
          <Card
            key={data.id}
            title={data.title}
            description={data.description}
          />
        ))}

        <TouchableOpacity
          // onPress={() => navigation.navigate('New Card')}
          style={styles.fabButtonStyle}>
          <Icon type={'ionicon'} name="ios-add" size={36} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Notes;
