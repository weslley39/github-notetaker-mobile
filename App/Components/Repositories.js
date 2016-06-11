let React     =require('react-native');
let Badge     =require('./Badge');
let Separator =require('./Helpers/Separator');
let WebView   =require('./Helpers/WebView');

let {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} = React;

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

class Repositories extends React.Component{
  openPage(repo){
    this.props.navigator.push({
      title    : repo.name,
      component: WebView,
      passProps: {url: repo.html_url}
    })
  }
  render(){
    let repos = this.props.repos;
    let list = repos.map((item, index) => {
      var desc = repos[index].description
        ? <Text style={styles.description}> {repos[index].description} </Text>
        : <View />

      return(
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repos[index])}
              underlayColor='transparent'>
              <Text style={styles.name}> {repos[index].name} </Text>
            </TouchableHighlight>
            <Text style={styles.stars}>Stars: {repos[index].stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
};

Repositories.PropTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos   : React.PropTypes.array.isRequired
}

module.exports = Repositories;
