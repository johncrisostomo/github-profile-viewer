import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <Avatar
        xlarge
        rounded
        source={{ uri: this.props.github.avatar_url }}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
      />
    );
  }
}

const mapStateToProps = ({ github }) => {
  return { github };
};

export default connect(mapStateToProps)(Profile);
