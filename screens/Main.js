import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';

import { findUser, clearUser } from '../actions/github_actions';

class Main extends Component {
  static navigationOptions = {
    title: 'GitHub Profile Viewer',
  };

  state = {
    input: '',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FormInput
          inputStyle={{ height: 60, fontSize: 40 }}
          value={this.state.input}
          onChangeText={text => this.setState({ input: text })}
        />
        <Button
          large
          title="Search on GitHub"
          containerViewStyle={{ marginTop: 15 }}
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

export default connect(null, { findUser, clearUser })(Main);
