import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6C5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#A48862',
    elevation: 5,
  },
  backIcon: {
    marginLeft: 5,
  },
  heading: {
    margin: 10,
    fontSize: 24,
    color: 'white',
  },
  modal: {
    marginHorizontal: '10%',
    marginVertical: '20%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  modalInput: {
    height: '85%',
  },
  title: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },
  modalDescription: {
    backgroundColor: 'transparent',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    color: 'gray',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: '#0081D5',
  },
  saveButton: {
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#0081D5',
    color: 'white',
  },
  fabButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#0081D5',
    elevation: 5,

    width: 50,
    height: 50,
    borderRadius: 50 / 2,

    position: 'absolute',
    right: 5,
    bottom: 5,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 20,
    marginBottom: 20,
  },
  image: {
    marginTop: 10,
    height: 300,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default styles;
