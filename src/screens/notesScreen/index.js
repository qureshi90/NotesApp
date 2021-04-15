import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style.js';
import Header from '../../components/header.js';
import Card from '../../components/card.js';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notes = ({navigation}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async function call() {
      let data = await AsyncStorage.getItem('notes');
      setNotes(JSON.parse(data));
    })();
  }, [notes]);

  const Delete = async index => {
    notes.splice(index, 1);
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(notes));
    } catch (e) {
      // saving error
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header text={'Notes'} />
        <ScrollView>
          {notes.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description[0]}
              delete={() => Delete(index)}
              onPress={() =>
                navigation.navigate('note', {
                  index: index,
                })
              }
            />
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('new-note', {title: 'Create Note'})
          }
          style={styles.fabButtonStyle}>
          <Icon type={'ionicon'} name="ios-add" size={36} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Notes;
