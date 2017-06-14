import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';

import { findUser, clearUser } from '../actions/github_actions';

class Main extends Component {
  static navigationOptions = {
    title: 'Search',
    header: null,
  };

  state = {
    input: '',
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <FormInput
          keyboardAppearance="dark"
          autoCapitalize="none"
          autoCorrect={false}
          inputStyle={{ height: 60, fontSize: 40, color: '#FFF' }}
          containerStyle={{ width: 350 }}
          value={this.state.input}
          onChangeText={text => this.setState({ input: text })}
        />
        <Button
          large
          raised
          title="Search on GitHub"
          buttonStyle={{ backgroundColor: 'maroon' }}
          containerViewStyle={{ marginTop: 20 }}
          onPress={() => {
            this.setState({ input: '' });
            this.props.clearUser();
            this.props.findUser(this.state.input);
            this.props.navigation.navigate('profile');
          }}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
};

export default connect(null, { findUser, clearUser })(Main);
