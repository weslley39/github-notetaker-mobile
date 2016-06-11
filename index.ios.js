/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

let Main = require('./App/Components/Main');

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
})

class Project extends Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute = {{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('Project', () => Project);
