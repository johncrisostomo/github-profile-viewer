import React, { Component } from 'react';
import _ from 'underscore';
import { Avatar, Divider, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Text, View, ListView, ActivityIndicator } from 'react-native';

class Profile extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: 'maroon',
  };

  constructor() {
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: [],
    }
  }

  componentWillReceiveProps({ github }) {
    this.setState({
      dataSource: this.ds.cloneWithRows(github.followers),
    });
  }

  renderRow(rowData, index) {
    return (
      <ListItem
        hideChevron={true}
        roundAvatar
        key={index}
        title={rowData.name}
        subtitle={rowData.login}
        avatar={{ uri: rowData.avatar_url }}
      />
    )
  }

  render() {
    if (!(_.isEmpty(this.props.github))) {
      const { avatar_url, name, bio, login, followers } = this.props.github;

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
            <Text style={[styles.followersHeader, { color: '#F1F1F1' }]}>SHOWING {followers.length} FOLLOWERS</Text>
          </View>
          <View style={{ marginTop: 10 }}>
              <ListView
                renderRow={this.renderRow.bind(this)}
                dataSource={this.state.dataSource}
              />
            </View>
        </View>
      );
    } else {
      return (
        <View style={styles.loadingStyle}>
          <ActivityIndicator color='#FFF' size="large" />
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
    marginBottom: 15,
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
  loadingStyle: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default connect(mapStateToProps)(Profile);
