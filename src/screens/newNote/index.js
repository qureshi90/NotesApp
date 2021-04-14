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

const NewNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async function call() {
      let data = await AsyncStorage.getItem('notes');
      setNotes(JSON.parse(data));
    })();
  }, [notes]);

  const Save = async () => {
    if (title !== '' || description !== '') {
      notes.unshift({
        title: title,
        // checkStatus: check,
        // bullet: bullet,
        description: description.split('\n'),
      });
      setTitle('');
      setDescription('');
      navigation.navigate('note', {index: 0});
      // titleInput.clear();
      // descriptionInput.clear();
      // setCheck(false);
      // setBullet(false);
      try {
        await AsyncStorage.setItem('notes', JSON.stringify(notes));
      } catch (e) {
        // saving error
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
        <Text style={styles.heading}>Create a new note</Text>
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
