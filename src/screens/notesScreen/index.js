import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import Header from '../../components/header.js';
import Card from '../../components/card.js';
import {dummyData} from '../../constants/dummyData.js';

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
      </View>
    </>
  );
};

export default Notes;
