import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style.js';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Note = ({navigation, route}) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);
  const [notes, setNotes] = useState([]);

  let index = route.params.index;

  useEffect(() => {
    (async function call() {
      let data = await AsyncStorage.getItem('notes');
      setNotes(JSON.parse(data));
    })();
  }, [notes]);

  const Save = async () => {
    setModal(false);

    if (title !== '' || description !== '') {
      notes[index] = {title: title, description: description};
      try {
        await AsyncStorage.setItem('notes', JSON.stringify(notes));
      } catch (e) {
        // saving error
      }
    }
  };

  const Cancel = () => {
    setTitle(route.params.title);
    setDescription(route.params.description);
    setModal(false);
  };

  // const Delete = async index => {
  //   notes.splice(index, 1);
  //   try {
  //     await AsyncStorage.setItem('notes', JSON.stringify(notes));
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  return (
    <>
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
          <Text style={styles.heading}>{title}</Text>
        </View>
        <ScrollView>
          <Text style={styles.description}>{description}</Text>
        </ScrollView>

        <TouchableOpacity
          onPress={() => setModal(true)}
          style={styles.fabButtonStyle}>
          <Icon type={'feather'} name="edit-3" size={26} color="#fff" />
        </TouchableOpacity>

        <Modal isVisible={modal} style={styles.modal}>
          <View>
            <TextInput
              style={styles.title}
              placeholder={'title'}
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <TextInput
              style={styles.modalDescription}
              placeholder={'description'}
              multiline={true}
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </View>
          <View style={styles.buttons}>
            <Text style={styles.cancelButton} onPress={Cancel}>
              Cancel
            </Text>
            <Text style={styles.saveButton} onPress={Save}>
              Save
            </Text>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Note;
