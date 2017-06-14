import React, { Component } from 'react';
import _ from 'underscore';
import { Avatar, Divider } from 'react-native-elements';
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
              <Text style={[{ fontSize: 30, fontWeight: 'bold', marginTop: 15 }, { color: '#F1F1F1' }]}>{name}</Text>
              <Text style={[{ fontSize: 12,  alignSelf: 'center' }, { color: '#F1F1F1' }]}>{login}</Text>
            </View>
          </View>
          <Divider style={{ backgroundColor: '#F1F1F1' }} />
          <View style={styles.followersContainer}>
            <Text style={[styles.followersHeader, { color: '#F1F1F1' }]}>FOLLOWERS</Text>
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
    backgroundColor: '#000',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    padding: 10,
  },
  followersContainer: {

  },
  followersHeader:  {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
};

export default connect(mapStateToProps)(Profile);
