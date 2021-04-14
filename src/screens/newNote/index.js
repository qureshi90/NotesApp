import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './style.js';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewNote = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);

  let index = route.params.index;

  useEffect(() => {
    (async function call() {
      if (title === '' && description === '') {
        let data = await AsyncStorage.getItem('notes');
        setNotes(JSON.parse(data));
        setTitle(notes[index].title);
        setDescription(notes[index].description.join('\n'));
      }
    })();
  }, [description, index, notes, title]);

  const Save = async () => {
    if (title !== '' || description !== '') {
      if (!isNaN(index)) {
        notes[index] = {
          title: title,
          // checkStatus: check,
          // bullet: bullet,
          description: description.split('\n'),
        };
        try {
          await AsyncStorage.setItem('notes', JSON.stringify(notes));
        } catch (e) {
          // saving error
        }
        navigation.navigate('note', {index: index});
      } else {
        notes.unshift({
          title: title,
          // checkStatus: check,
          // bullet: bullet,
          description: description.split('\n'),
        });
        try {
          await AsyncStorage.setItem('notes', JSON.stringify(notes));
        } catch (e) {
          // saving error
        }
        navigation.navigate('note', {index: 0});
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <Icon
            type={'ionicon'}
            name="chevron-back-outline"
            size={36}
            color="#fff"
          />
        </TouchableOpacity>
        <Text style={styles.heading}>{route.params.title}</Text>
        <Text style={styles.saveButton} onPress={Save}>
          Save
        </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <TextInput
          style={styles.title}
          placeholder={'Enter title'}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.description}
          placeholder={'Add description'}
          multiline={true}
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </ScrollView>
    </View>
  );
};

export default NewNote;
