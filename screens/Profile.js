import React, { Component } from 'react';
import _ from 'underscore';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { Text, View, ActivityIndicator } from 'react-native';

class Profile extends Component {
  render() {
    if (!(_.isEmpty(this.props.github))) {
      const { avatar_url, name, bio, login } = this.props.github;

      return (
        <View style={styles.containerStyle}>
          <View style={styles.headerStyle}>
            <Avatar
              large
              rounded
              source={{ uri: avatar_url }}
            />
            <View>
              <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 15 }}>{name}</Text>
              <Text style={{ fontSize: 12,  alignSelf: 'center' }}>{login}</Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}

const mapStateToProps = ({ github }) => {
  return { github };
};

const styles = {
  containerStyle: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    padding: 10,
  },
};

export default connect(mapStateToProps)(Profile);
