import Expo from 'expo';
import React from 'react';

import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// mga redux na bagay
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Main from './screens/Main';
import Profile from './screens/Profile';

class App extends React.Component {
  render() {
    const MainNav = StackNavigator({
      main: { screen: Main },
      profile: { screen: Profile },
    });

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <MainNav />

      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
