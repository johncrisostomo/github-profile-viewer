import React, { Component } from 'react';
import { Card, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class Profile extends Component {
  render() {
    const { avatar_url, name, bio } = this.props.github;

    return (
      <View style={styles.containerStyle}>
        <Avatar
          xlarge
          rounded
          source={{ uri: avatar_url }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ github }) => {
  return { github };
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default connect(mapStateToProps)(Profile);
