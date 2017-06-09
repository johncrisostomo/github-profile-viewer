import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class Profile extends Component {
  render() {
    const { avatar_url, name, bio } = this.props.github;

    return (
      <Card title={name} image={{ uri: avatar_url }}>
        <Text>{bio}</Text>
      </Card>
    );
  }
}

const mapStateToProps = ({ github }) => {
  return { github };
};

export default connect(mapStateToProps)(Profile);
