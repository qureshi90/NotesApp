import React from 'react';
import Navigator from './src/navigation/navigator.js';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  return (
    <MenuProvider>
      <Navigator />
    </MenuProvider>
  );
};

export default App;
