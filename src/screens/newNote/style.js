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
  saveButton: {
    position: 'absolute',
    right: 10,
    fontSize: 20,
    color: 'white',
  },
  scrollContainer: {
    marginHorizontal: 10,
  },
  title: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});

export default styles;
