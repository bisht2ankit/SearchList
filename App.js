import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import SearchList from './src/screens/search/SearchList';

const App = () => {
  return (
    <Provider store={store}>
    {/* <SafeAreaView> */}
      <SearchList />
      {/* </SafeAreaView> */}
    </Provider>
  );
};

export default App;