import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style.js';
import Header from '../../components/header.js';
import Card from '../../components/card.js';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';

const Notes = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  let titleInput, descriptionInput;

  const Save = () => {
    setModal(false);

    if (title !== '' || description !== '') {
      notes.unshift({title: title, description: description});
      setNotes(notes);
      setTitle('');
      setDescription('');
      titleInput.clear();
      descriptionInput.clear();
    }
  };

  const Cancel = () => {
    setTitle('');
    setDescription('');
    titleInput.clear();
    descriptionInput.clear();
    setModal(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Header text={'Notes'} />
        <ScrollView>
          {/* {dummyData.map(data => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
            />
          ))} */}
          {notes.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
            />
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={() => setModal(true)}
          style={styles.fabButtonStyle}>
          <Icon type={'ionicon'} name="ios-add" size={36} color="#fff" />
        </TouchableOpacity>

        <Modal isVisible={modal} style={styles.modal}>
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
        </Modal>
      </View>
    </>
  );
};

export default Notes;
