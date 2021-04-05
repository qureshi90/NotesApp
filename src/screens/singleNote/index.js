import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  // TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style.js';
// import Header from '../../components/header.js';
import {Icon} from 'react-native-elements';
// import Modal from 'react-native-modal';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Note = ({navigation, route}) => {
  // const [modal, setModal] = useState(false);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [notes, setNotes] = useState([]);
  // let titleInput, descriptionInput;

  // useEffect(() => {
  //   (async function call() {
  //     let data = await AsyncStorage.getItem('notes');
  //     setNotes(JSON.parse(data));
  //   })();
  // }, [notes]);

  // const Save = async () => {
  //   setModal(false);

  //   if (title !== '' || description !== '') {
  //     notes.unshift({title: title, description: description});
  //     setTitle('');
  //     setDescription('');
  //     titleInput.clear();
  //     descriptionInput.clear();
  //     try {
  //       await AsyncStorage.setItem('notes', JSON.stringify(notes));
  //     } catch (e) {
  //       // saving error
  //     }
  //   }
  // };

  // const Cancel = () => {
  //   setTitle('');
  //   setDescription('');
  //   titleInput.clear();
  //   descriptionInput.clear();
  //   setModal(false);
  // };

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
          <Text style={styles.heading}>{route.params.title}</Text>
        </View>
        <ScrollView>
          <Text style={styles.description}>{route.params.description}</Text>
        </ScrollView>

        <TouchableOpacity
          // onPress={() => setModal(true)}
          style={styles.fabButtonStyle}>
          <Icon type={'feather'} name="edit-3" size={26} color="#fff" />
        </TouchableOpacity>

        {/* <Modal isVisible={modal} style={styles.modal}>
          <View>
            <TextInput
              style={styles.title}
              placeholder={'title'}
              value={title}
              onChangeText={text => setTitle(text)}
              ref={input => (titleInput = input)}
            />
            <TextInput
              style={styles.description}
              placeholder={'description'}
              multiline={true}
              value={description}
              onChangeText={text => setDescription(text)}
              ref={input => (descriptionInput = input)}
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
        </Modal> */}
      </View>
    </>
  );
};

export default Note;
